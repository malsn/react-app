<h1>Сервис онлайн подсказок адресов<h1>


https://github.com/malsn/react-app<br/>frontend часть<br/>
https://github.com/malsn/symfony-app<br/>backend + frontend часть<br/>

Оба проекта должны быть развернуты в одной родительской директории.<br/>
Связка frontend React + Webpack и продакшн backend + frontend и фиксация изменений в продакшн происходит по запуску скрипта из директории react-app<br/>
#bash<br/>
sh task.sh<br/>
Данный скрипт производит build-код приложения через Webpack, копирует его в необходимые директории backend,<br/>
устанавливает backend-assets в продакшн, очищает продакшн кеш Symfony-приложения.<br/>
Далее, достаточно только перезагрузить страницу сервиса.<br/>
