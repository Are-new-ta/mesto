
<h1 align="center">Учебный frontend-проект: "Место"</h1>

<div align="center">
  <a href="https://are-new-ta.github.io/mesto/">
    <img width="600" src="https://user-images.githubusercontent.com/108838349/206931608-5636650f-d971-4993-a0ff-ad0a0bb86619.png" alt="Демонстрация стартовой страницы сайта">
  </a>
</div>

<a name="summary">
<details>
  <summary>Оглавление</summary>
  <ol>
    <li><a href="#project-description">Описание проекта</a></li>
    <li><a href="#technologies">Стек технологий</a></li>
    <li><a href="#installation">Установка и запуск проекта в локальном репозитории</a></li>
    <li><a href="#establishing">Процесс создания</a></li>
    <ul>
      <li><a href="#tasks-and-problems">Основные задачи, проблемы и их решение</a></li>
    </ul>
    <li><a href="#functionality">Функционал</a></li>
     </ol>
</details>
</a>

<a name="project-description"><h2>1. Описание проекта</h2></a>
Данная проектная работа выполнена в рамках образовательной программы Яндекс Практикума. Проект представляет собой создание адаптивного одностраничного сайта с профилем пользователя и фотокарточками - аналога популярных соцсетей - с применением нативных технологий (HTML5, CSS3, JS). В рамках учебного курса он был также <a href="https://github.com/are-new-ta/mesto-react">портирован на "React"</a> и <a href="https://github.com/are-new-ta/react-mesto-auth">расширен</a> добавлением функционала регистрации и авторизации пользователей

<h4>Ссылка на проект:
<br>
https://are-new-ta.github.io/mesto/
<br>
<br>

<i>* - проект прошел код-ревью</i>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="technologies"><h2>2. Стек технологий</h2></a>
<span>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Иконка JavaScript">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Иконка CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка HTML5">
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" alt="Иконка 'Webpack'">
</span>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск проекта в локальном репозитории</h2></a>
1. `git clone https://are-new-ta.github.io/mesto.git` - клонировать репозиторий (с использованием HTTPS) на свое устройство
2. `npm i` - установить зависимости
3. `npm run dev` - запустить приложение в режиме разработчика (в браузере ввести ссылку `http://localhost:8080/`, если приложение не открылось там автоматически)

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="establishing"><h2>4. Процесс создания</h2></a>
Работа разделена на <b>6</b> этапов:
1. Верстка, реализация открытия и закрытия модального окна с возможностью редактирования данных профиля
2. Интерактивные элементы страницы: добавление и удаление карточки, лайки, открытие фотографии карточки в отдельном модальном окне, плавное открытие и закрытие попапов
3. Валидация форм, закрытие модальных кликом по оверлею и нажатием на клавишу "Escape"
4. Начало рефакторинга (переход к классам): добавление компонентов <a href="https://github.com/Are-new-ta/mesto/blob/main/src/components/Card.js">Card</a> и <a href="https://github.com/Are-new-ta/mesto/blob/main/src/components/FormValidator.js">FormValidator</a>, разбиение на модули, директивы import & export
5. Завершение рефакторинга: структуризация проекта, переписывание функций под 5 новых классов (<a href="https://github.com/Are-new-ta/mesto/blob/main/src/components/Section.js">Section</a>, <a href="https://github.com/Are-new-ta/mesto/blob/main/src/components/Popup.js">Popup</a>, <a href="https://github.com/elrouss/mesto/blob/main/src/scripts/components/PopupWithImage.js">PopupWithImage</a>, <a href="https://github.com/Are-new-ta/mesto/blob/main/src/components/PopupWithImage.js">PopupWithForm</a>, <a href="https://github.com/Are-new-ta/mesto/blob/main/src/components/UserInfo.js">UserInfo</a>), сборка проекта Вебпаком
6. Подключение к серверу: загрузка информации о пользователе, обновление аватара, загрузка карточек (добавление и удаление), счетчик лайков, улучшение UX всех форм

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="tasks-and-problems"><h3>4.1 Основные задачи, проблемы и их решение</h3></a>
<p>
Самой трудной частью этого проекта был переход от <b>функционального</b> подхода к <b>классовому</b>: это потребовало прочтения большого количества как основного учебного материала, так и дополнительного. В отдельных случаях терялся контекст (<b>this</b>): проблема решалась использованием стрелочных функций. Кроме того, следовало постоянно отслеживать <b>навешивание</b> и <b>снятие</b> <b>(!)</b> обработчиков событий, в противном случае возникали ошибки (одна из - создание одновременно нескольких карточек при сабмите формы)
</p>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="functionality"><h2>5. Функционал</h2></a>
<details>
  <summary>Адаптивный интерфейс</summary>
  <a href="https://are-new-ta.github.io/mesto/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217381758-b6778d72-2812-43a3-a14a-bc1e26b4e3eb.gif" alt="Гиф с демонстрацией адаптивного интерфейса приложения">
  </a>
</details>

<details>
  <summary>Редактирование данных пользователя</summary>
  <a href="https://are-new-ta.github.io/mesto/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217381792-17c71ed6-c175-4b83-856d-718870a76139.gif" alt="Гиф с демонстрацией редактирования данных пользователя">
  </a>
</details>

<details>
  <summary>Обновление аватара</summary>
  <a href="https://are-new-ta.github.io/mesto/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217381813-beeec672-baaf-4ca3-86a1-4d1414f0c6b2.gif" alt="Гиф с демонстрацией обновления аватара пользователя">
  </a>
</details>

<details>
  <summary>Добавление новой карточки</summary>
  <a href="https://are-new-ta.github.io/mesto/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217381855-8f4b562a-f05b-49b1-b1d7-83facd18a1d2.gif" alt="Гиф с демонстрацией добавления новой карточки">
  </a>
</details>

<details>
  <summary>Добавление и снятие лайка (включая счетчик лайков)</summary>
  <a href="https://are-new-ta.github.io/mesto/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217381884-5730b35f-2330-4c25-8235-a4d0b63be65a.gif" alt="Гиф с демонстрацией добавления и снятия лайка (включая счетчик лайков)">
  </a>
</details>

<details>
  <summary>Удаление карточки с модальным окном подтверждения действия</summary>
  <a href="https://are-new-ta.github.io/mesto/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217381908-6b49e2f1-bca2-4897-abad-c31605d8aa73.gif" alt="Гиф с демонстрацией удаления карточки">
  </a>
</details>

<details>
  <summary>Модальное окно с увеличенной фотографией карточки</summary>
  <a href="https://are-new-ta.github.io/mesto/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217382271-5416c39e-8e91-4b23-89e5-c3f55847ccfc.gif" alt="Гиф с демонстрацией модального окна с увеличенной фотографией карточки">
  </a>
</details>

<details>
  <summary>Открытие и закрытие модальных окон (по кнопке, оверлею и клавише "Escape")</summary>
  <a href="https://are-new-ta.github.io/mesto/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217382271-5416c39e-8e91-4b23-89e5-c3f55847ccfc.gif" alt="Гиф с демонстрацией открытия и закрытия модального окна">
  </a>
</details>

<details>
  <summary>Спиннеры загрузки</summary>
  <a href="https://are-new-ta.github.io/mesto/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217381813-beeec672-baaf-4ca3-86a1-4d1414f0c6b2.gif" alt="Гиф с демонстрацией спиннера загрузки на примере модального окна с обновлением аватара">
  </a>
</details>

<details>
  <summary>Валидация форм</summary>
  <a href="https://are-new-ta.github.io/mesto/">
    <img width="500" src="https://user-images.githubusercontent.com/108838349/217381813-beeec672-baaf-4ca3-86a1-4d1414f0c6b2.gif" alt="Гиф с демонстрацией валидации формы на примере модального окна с обновлением аватара">
  </a>
</details>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

