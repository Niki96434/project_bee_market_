from main import db, Articles, app
import click
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask.cli import with_appcontext

@app.cli.command("add-article") # запуск через консоль
@click.argument("title")
@click.argument("link")
@click.argument("article_file") # файл с текстом

def add_article(title, link, article_file):
    with app.app_context(): # ручной контекст
        with open (article_file, 'r', encoding='utf-8') as f: # открываем файл с текстом статьи
                   text_articles = f.read() # столбец в таблице Articles
        article = Articles(title, link, articles=text_articles)
        db.session.add(article)
        db.session.commit()
        print('Статья "{title}" добавлена.')

if __name__ == '__main__':
    app.run(debug=True)
