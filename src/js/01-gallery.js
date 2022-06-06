'use strict';

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.
console.log(galleryItems);

const listEl = document.querySelector(".gallery");

function renderGallary() {
  return galleryItems
    .map((el) => {
      return `<a class="gallery__item" href="${el.original}">
      <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
    </a>`;
    })
    .join("");
}


listEl.insertAdjacentHTML("afterbegin", renderGallary(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

