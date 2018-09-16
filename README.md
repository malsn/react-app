Сервис онлайн автозаполнения и подсказок адресов


https://github.com/malsn/react-app - frontend часть
https://github.com/malsn/symfony-app - backend + frontend часть

Оба проекта должны быть развернуты в одной родительской директории.
Связка frontend React + Webpack и продакшн backend + frontend и фиксация изменений в продакшн происходит по запуску скрипта из директории react-app
#bash
sh task.sh
Данный скрипт производит build-код приложения через Webpack, копирует его в необходимые директории backend,
устанавливает backend-assets в продакшн, очищает продакшн кеш Symfony-приложения.
Далее, достаточно только перезагрузить страницу сервиса.
