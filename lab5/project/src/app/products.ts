export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: string;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ голубой',
    price: 799,
    description: 'Смартфон Galaxy A33 5G стал тоньше и элегантнее благодаря матовому покрытию, качественным рамкам и безупречному корпусу камеры с Ambient Edge.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h03/49897401188382/smartfon-samsung-galaxy-a33-5g-128gb-sm-a336blbgskz-blue-104399147-1.jpg",
    rating: "8 by 10",  
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-goluboi-104399147/?c=750000000#!/item"
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 699,
    description: 'Изображение на экране смартфона диагональю 6.1 дюйма обладает поразительной детализацией и цветопередачей. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
    rating: "7 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item"
  },
  {
    id: 3,
    name: 'iPhone 14 Pro Max 256gb',
    price: 1000,
    description: 'OLED, Super Retina XDR display с возможностью постоянной работы',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item"
  },
  {
    id: 4,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ',
    price: 599,
    description: 'Смартфон Galaxy A33 5G стал тоньше и элегантнее благодаря матовому покрытию, качественным рамкам и безупречному корпусу камеры с Ambient Edge',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg",
    rating: "5 by 10",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item"
  },
  {
    id: 5,
    name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ',
    price: 399,
    description: 'Сверхвысокая частота обновления. Высокая частота обновления 120 Гц обеспечивает бесперебойную работу и высокую детализацию изображения при просмотре веб-страниц.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg",
    rating: "4 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item"
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 13 128Gb розовый',
    price: 899,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
    rating: "7 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item"
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ',
    price: 299,
    description: 'Больше дисплей, больше возможностей. Расширьте границы доступного с 6.5-дюймовым экраном с V-образным вырезом.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/hf4/52423971995678/samsung-galaxy-a03-core-2-gb-32-gb-bronzovyj-105772530-1.jpg",
    rating: "2 by 10",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000#!/item"
  },
  {
    id: 8,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ ',
    price: 599,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hff/51348549861406/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164-1.jpg",
    rating: "8 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item"
  },
  {
    id: 9,
    name: 'Смартфон Apple iPhone 14 Pro 256Gb',
    price: 1299,
    description: 'голосовое управление, голосовой набор, поддержка nano SIM + eSIM',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/hb5/63073435254814/apple-iphone-14-pro-128gb-cernyj-106363265-1.jpg",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item"
  },
  {
    id: 10,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/64 ГБ',
    price: 699,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/h3e/49939919699998/xiaomi-redmi-10c-4-gb-64-gb-seryj-104417151-1.jpg",
    rating: "6 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-64-gb-seryi-104417151/?c=750000000#!/item"
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/