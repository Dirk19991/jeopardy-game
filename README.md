## Jeopardy

Игра "Jeopardy" (аналог "Своей игры") с использованием jService API.

Ссылка на GitHub Pages:  https://dirk19991.github.io/jeopardy-game/

## Стек

[![My Skills](https://skillicons.dev/icons?i=react,redux,typescript)](https://skillicons.dev)

## Полное описание

Я увлекаюсь интеллектуальными играми и хотел иметь возможность играть вопросы из базы Jeopardy, которая доступна через [jservice API](https://jservice.io/). 

1. На странице отображается игровое табло с номиналами вопросов. При первом открытии страницы нужно нажать кнопку, чтобы загрузить темы, затем темы можно менять по нажатию этой же кнопки. При нажатии кнопки в состояние Redux Toolkit сразу попадают все вопросы, отсортированные по категориям, поэтому при игре интерфейс реагирует моментально. В базе вопросов иногда нет вопросов за конкретный номинал - в таком случае вопрос затеняется и нажать на него нельзя.

<img src="https://user-images.githubusercontent.com/104031523/208049911-79b342d2-e837-42e8-8782-00c0c1156eae.gif" alt="Alt text" title="Optional title" width=70% height=70%>

2. При нажатии на вопрос появляется поле вопроса с двумя кнопками - "Показать ответ" и "Вернуться к табло". После того, как вопрос отыгран, он затеняется и нажать на него больше нельзя. Я сознательно не делал возможность отвечать текстом - мне удобнее просто отвечать на вопрос "в уме" и сразу проверять ответ. Для вопросов и категорий использованы шрифты  Swiss 911 и ITC Korinna, как в телевизионной версии игры.

<img src="https://user-images.githubusercontent.com/104031523/208050911-4ddc3fc0-7976-4bfd-8bb5-ff45efc7d961.gif" alt="Alt text" title="Optional title" width=70% height=70%>

3. В мобильной версии игры показываются только три темы, в остальном функционал такой же:

<img src="https://user-images.githubusercontent.com/104031523/208052196-036448bd-b623-4cdc-b717-1361303c3c36.jpg" alt="Alt text" title="Optional title" width=30% height=30%>

## Инструкция по установке

```
git clone https://github.com/Dirk19991/jeopardy-game.git
cd .\jeopardy-game\
npm install
npm run dev
```
