from flask import Flask, flash 
from flask import url_for, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_required,login_user, logout_user, current_user # импортируем класс loginmanager
from flask import session # для каждого запроса позволяет сохранять информацию пользователя
from flask_wtf import FlaskForm
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
import sqlalchemy as sa
from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, Length, InputRequired, ValidationError
import bcrypt
import re
import sqlite3 as sq
app = Flask(__name__)

app.config.update(SQLALCHEMY_DATABASE_URI = 'sqlite:///our_database.db',
                   SECRET_KEY = 'nobodycantsaveme')  # секретный ключ поверх файлов куки,т.е. пользователь не сможет чекать мои файлы куки без секретного ключа

app.permanent_session_lifetime = datetime.timedelta(days=10) # время жизни сессии
db = SQLAlchemy(app)

login_manager = LoginManager(app) # обрабатывает вход пользователя

login_manager.login_view = 'register' # перенаправляет пользователя на страницу авторизации(вместо ошибки 401)

class User(UserMixin,db.Model):
 id = db.Column(db.Integer, primary_key=True)
 username = db.Column(db.String(30), nullable=False, unique=True)
 email = db.Column(db.Text, nullable=False)
 password = db.Column(db.String(80), nullable=False)

user = User()
user.username
user.email
user.password 

class RegForm(FlaskForm):
    username = StringField("Никнейм :", validators=[InputRequired(), Length(min=4, max=10)])
    email = StringField("Email:", validators=[Email()])
    password = PasswordField('Пароль:', validators=[InputRequired(), Length(min=8, max=20)])
    submit = SubmitField("Зарегистрироваться")
    def validate_username(self, username, email):
        existing_user = User.query.filter_by(username=username.data).first()
        existing_email = User.query.filter_by(email=email.data).first()
        if existing_user:
            raise ValidationError("имя уже существует")
        elif existing_email:
            raise ValidationError('почта уже существует')

class LogForm(FlaskForm):
    username = StringField("Никнейм :", validators=[InputRequired(), Length(min=4, max=10)])
    # email = StringField("Email:", validators=[Email()])
    password = PasswordField('Пароль:', validators=[InputRequired(), Length(min=8, max=20)])
    submit = SubmitField("Войти")
    def validate_username(self, username):
        existing_user = User.query.filter_by(username=username.data).first()
        # existing_email = User.query.filter_by(email=email.data).first()
        if existing_user:
            raise ValidationError("имя уже существует")
        # elif existing_email:
        #     raise ValidationError('почта уже существует')

class SearchForm(FlaskForm):
    text = StringField('', validators=[Length(max=30)])
    submit_search = SubmitField('поиск')

class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(300), nullable=False)
    link = db.Column(db.String(300), nullable=False)
    articles = db.Column(db.Text, nullable=False)

article = Articles()
article.id
article.title
article.articles

@login_manager.user_loader # загружает данные пользователя по айди,сохраненному в сессии
def load_user(id): # передается параметр айди
    return db.session.get(User, int(id)) # принимает идентификатор пользователя(айди сессии/сеанса) и возвращает экземпляр объекта пользователя User

with app.app_context():
     db.create_all()
     print("database is done")

@app.route('/')
@app.route('/news', methods=['GET','POST'])
def search():
    form_search = SearchForm()
    if form_search.validate_on_submit():
        search_query = form_search.text.data
        key_word = search_query.lower().split() # получили текст из формы и разделяем его по айтемам
        articles = Articles.query.with_entities(Articles.articles).all() # все статьи(объекты) в таблице
        match_article = []
        for article in articles:
            search_find = article.text.lower() # текст одного объекта
            need_word = search_find.split() # делим всю статью на массив из слов

            # if key.len <= wrd.len:
                    # for i in range(key.len):
                    #     if key[i] == wrd[i]:
            if all(key in need_word for key in key_word):

                match_article.append(article)
                            # match_article.append(txt[i])
                            # if re.search(key_word, need_word): # true
        return render_template('news.html', articles=match_article, form=form_search)
                            # else: 
                            #     continue

    return render_template('news.html', form=form_search)

@app.route('/forum')
@login_required
def forum():
    session.permanent = False # если false,то прерывает 10-days сессию
    if 'visits' in session:
        session['visits'] = session.get('visits') + 1 # +1 посещение
        session.modified = True
    else:
        session['visits'] = 1
    # return render_template('forum.html')
    return render_template('forum.html')

@app.route('/profile')
@login_required # страница доступна только для авторизованных пользователей
def profile():
    return f"""<p><a href="{url_for('logout')}">Выход из профиля</a>
    <p>Профиль пользователя: {current_user.username}, {current_user.get_id()}"""
    # return redirect('forum')

@app.route('/video')
@login_required
def video():
    return render_template('video.html')

@app.route('/calc')
def calc():
     return render_template('calc.html')

@app.route('/register', methods=['GET','POST'])
def register():
    #   try:
    #     if request.method == 'POST':
    #         req = request.form # req - словарь с данными из html-формы 
    #         if 'username' and 'email' and 'password' in req:
    #             user_name = req['username'] # все данные из формы с ключом username мы добавляем в отдельную переменную
    #             user_email = req['email']
    #             user_password = req['password']
    #             hash = generate_password_hash(user_password)
                
    #             new_user = User(username=user_name,email=user_email,password=hash)
    #             # existing = db.session.execute(db.select(User).filter_by(User.email==user_email)).first()
    #             # existing = User.query.filter_by(email=user_email).first()
    #             # if not existing:
    #             db.session.add(new_user)
    #             db.session.commit()
    #             login_user(new_user) # авторизуем пользователя с помощью login_user функции
    #             flash('Вы успешно зарегистрировались')
            if current_user.is_authenticated:
                return redirect(url_for('forum'))
            req = request.form
            form = RegForm(req)
            if request.method=='POST':
                new_user = User(username=form.username.data,email=form.email.data,password=form.password.data)
                db.session.add(new_user)
                db.session.commit()
                login_user(new_user) # авторизуем пользователя с помощью login_user функции
                flash('Вы успешно зарегистрировались')
                return redirect(url_for('login'))
            return render_template("register.html", form=form)
                
    #   except Exception as e:
    #       return str(e)
    #   return render_template('register.html')


@app.route('/login', methods=['GET','POST'])
def login():
#     try:
        # if request.method == 'POST':
            # req_sign = request.form
            form = LogForm()
            if form.validate_on_submit(): # для проверки post-запроса
                user = User.query.filter_by(username=form.username.data)
                if user:
                     if bcrypt.check_password_hash(user.password, form.password.data):
                          login_user(user)
                          return redirect(url_for('forum'))
                          
#             # username_sign = req_sign['username']
#             user_em = req_sign['email']
#             # userpsw_sign = req_sign['password']
#             user_sign = db.session.execute(db.select(User).filter_by(User.email==user_em)).first()
#             # user_sign = User.query.filter_by(email=user_em).first()
#             if user_sign:
#                 login_user(user_sign)
#                 # next_page = request.args.get('next')
            return render_template('login.html', form=form)
#     except Exception as e:
#           return str(e)  

@app.route('/logout')
def logout():
    logout_user()
    flash('вы вышли из аккаунта')
    # session.pop('username', None)
    # session.pop('email', None)
    # session.pop('password', None)
    return redirect(url_for('register'))

if __name__ == '__main__':
    app.run(debug=True, port=5502)