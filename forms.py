from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, Length, InputRequired, ValidationError


class LogForm(FlaskForm):
    username = StringField("Никнейм :", validators=[InputRequired(), Length(min=4, max=10)])
    email = StringField("Email:", validators=[Email()])
    password = PasswordField('Пароль:', validators=[InputRequired(), Length(min=8, max=20)])
    submit = SubmitField("Зарегистрироваться")

class SearchForm(FlaskForm):
    text = StringField('')
    submit_search = SubmitField('поиск')