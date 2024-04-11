# ZAA-automation
## [Skillfactory](https://skillfactory.ru) Проект: реальный кейс компании «СКАН»

<hr>
<p> </p>

# ПОЛУЧИЛОСЬ:

1. Клиентская часть сервиса состоит из:

    главной страницы,
    формы авторизации,
    формы для ввода параметров запроса,
    страницы с выводом результатов запроса.

   Для перехода между страницами настроена Маршрутизация.
   
3. Шапка сайта

      В ней находятся:
           логотип,
            меню,
            панель управления учётной записью.
    
3. Главная страница:

      Кнопка «Запросить данные» ведёт на страницу ввода параметров поиска. Перейти по ней может только зарегистрированный пользователь;
      Карточки в разделе «Почему именно мы» переключаться по принципу карусели: клик на стрелке слева или справа переключает карточки в соответствующем направлении;
      В разделе «Наши тарифы» перечислены возможные тарифы. Кнопка «Подробнее» — заглушка, при клике на неё ничего не происходит.


4. Форма авторизации

      Эта страница содержит форму с полями для ввода логина и пароля. При заполнении пароля вводимое значение должно маскироваться;
      При отсутствии одного из значений — логина или пароля — кнопка «Войти» неактивна, и при клике на неё ничего не происходит;
      После ввода всех необходимых значений кнопка становится активной;
      Остальные элементы формы не функциональны:
        вкладка «Зарегистрироваться»,
        ссылка «Восстановить пароль»,
        кнопки «Войти» через Google / Facebook / Яндекс.

5. Форма для ввода параметров запроса

       Эта страница доступна только авторизованным пользователям;
       Реализована валидация вводимых данных.

6. Вывод результатов поиска

       Сначала мы делаем запрос POST objectsearch/histograms и получаем общую сводку по количеству публикаций и рискам. Результат выводится в виде карусели.


# Далее о том что НЕ ПОЛУЧИЛОСЬ:

      не реализован вывод Списка публикаций (возникли сложности с последовательным выводом запросов 
      и с правильным применением Хуков, пока разбираюсь с этим);
      
      не интегрированы Шрифты в проект. Сейчас необходимо чтобы у пользователя были локально установлены необходимы Шрифты;
      
      не полностью сверстан проект. Версию под мобильный телефон даже еще не начинал (банально не хватило времени);
      
      проект не оптимизирован с точки зрения декомпозиции. (и снова не успел).

  



<hr>
<p> </p>
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
