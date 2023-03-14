export interface Product {
  id: number;
  category: string;
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
    category: "Phones, gadjets",
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ голубой',
    price: 799,
    description: 'Смартфон Galaxy A33 5G стал тоньше и элегантнее благодаря матовому покрытию, качественным рамкам и безупречному корпусу камеры с Ambient Edge.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h03/49897401188382/smartfon-samsung-galaxy-a33-5g-128gb-sm-a336blbgskz-blue-104399147-1.jpg",
    rating: "8 by 10",  
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-goluboi-104399147/?c=750000000#!/item"
  },
  {
    id: 2,
    category: "Phones, gadjets",
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 699,
    description: 'Изображение на экране смартфона диагональю 6.1 дюйма обладает поразительной детализацией и цветопередачей. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
    rating: "7 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item"
  },
  {
    id: 3,
    category: "Phones, gadjets",
    name: 'iPhone 14 Pro Max 256gb',
    price: 1000,
    description: 'OLED, Super Retina XDR display с возможностью постоянной работы',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item"
  },
  {
    id: 4,
    category: "Phones, gadjets",
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ',
    price: 599,
    description: 'Смартфон Galaxy A33 5G стал тоньше и элегантнее благодаря матовому покрытию, качественным рамкам и безупречному корпусу камеры с Ambient Edge',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg",
    rating: "5 by 10",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item"
  },
  {
    id: 5,
    category: "Phones, gadjets",
    name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ',
    price: 399,
    description: 'Сверхвысокая частота обновления. Высокая частота обновления 120 Гц обеспечивает бесперебойную работу и высокую детализацию изображения при просмотре веб-страниц.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg",
    rating: "4 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item"
  },
  {
    id: 6,
    category: "Phones, gadjets",
    name: 'Смартфон Apple iPhone 13 128Gb розовый',
    price: 899,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
    rating: "7 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item"
  },
  {
    id: 7,
    category: "Phones, gadjets",
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ',
    price: 299,
    description: 'Больше дисплей, больше возможностей. Расширьте границы доступного с 6.5-дюймовым экраном с V-образным вырезом.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/hf4/52423971995678/samsung-galaxy-a03-core-2-gb-32-gb-bronzovyj-105772530-1.jpg",
    rating: "2 by 10",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000#!/item"
  },
  {
    id: 8,
    category: "Phones, gadjets",
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ ',
    price: 599,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hff/51348549861406/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164-1.jpg",
    rating: "8 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item"
  },
  {
    id: 9,
    category: "Phones, gadjets",
    name: 'Смартфон Apple iPhone 14 Pro 256Gb',
    price: 1299,
    description: 'голосовое управление, голосовой набор, поддержка nano SIM + eSIM',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/hb5/63073435254814/apple-iphone-14-pro-128gb-cernyj-106363265-1.jpg",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item"
  },
  {
    id: 10,
    category: "Phones, gadjets",
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/64 ГБ',
    price: 699,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/h3e/49939919699998/xiaomi-redmi-10c-4-gb-64-gb-seryj-104417151-1.jpg",
    rating: "6 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-64-gb-seryi-104417151/?c=750000000#!/item"
  },
  {
    id: 11,
    category: "Computers",
    name: 'Ноутбук Lenovo IdeaPad 3',
    price: 199,
    description: 'Диагональ экрана15.6 дюйм Разрешение экрана1920x1080 Full HD',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg",
    rating: "4 by 10",
    url: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item"
  },
  {
    id: 12,
    category: "Computers",
    name: 'Ноутбук Acer Nitro 5 AN515-57',
    price: 499,
    description: 'Диагональ экрана15.6 дюйм Разрешение экрана1920x1080 Частота обновления экрана144 Гц',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg",
    rating: "7 by 10",
    url: "https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item"
  },
  {
    id: 13,
    category: "Computers",
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 599,
    description: 'Диагональ экрана 15.6 дюйм Разрешение экрана1920x1080 Частота обновления экрана144 Гц',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    rating: "8 by 10",
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item"
  },
  {
    id: 14,
    category: "Computers",
    name: 'Ноутбук ASUS TUF Gaming A15',
    price: 799,
    description: 'ПроцессорAMD Ryzen 5 4600H Базовая частота процессора 3000 МГц Количество ядер процессора6 ядер',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item"
  },
  {
    id: 15,
    category: "Computers",
    name: 'Ноутбук Apple MacBook Air 13 MLXW3 серый',
    price: 899,
    description: 'Это сверхбыстрый и сверхмощный ноутбук, который позволяет вам работать, играть или создавать что угодно — где угодно.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/he9/52679187890206/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-1.jpg",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/?c=750000000#!/item"
  },
  {
    id: 16,
    category: "Shoes",
    name: 'Decathlon Kipsta Agility 100 TF 8398029 черные RU 39',
    price: 589,
    description: 'Застежка шнуровка Дополнительная информациятип покрытия: улица',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/h27/44867133210654/decathlon-kipsta-agility-100-tf-8398029-102135946-1.jpg",
    rating: "6 by 10",
    url: "https://kaspi.kz/shop/p/decathlon-kipsta-agility-100-tf-8398029-chernye-ru-39-100187127/?c=750000000#!/item"
  },
  {
    id: 17,
    category: "Shoes",
    name: 'JOMA AGUS2201TF черный 40',
    price: 449,
    description: 'Резиновая подошва двойной плотности с максимальной устойчивостью к истиранию. • Промежуточная подошва из материала Phylon, обеспечивающая отличное поглощение ударов.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h1c/63335357972510/joma-agus2201tf-cernyj-105589872-1.jpg",
    rating: "7 by 10",
    url: "https://kaspi.kz/shop/p/joma-agus2201tf-chernyi-40-105589877/?c=750000000#!/item"
  },
  {
    id: 18,
    category: "Shoes",
    name: 'бутсы JOMA INTERW2122IN белый 41',
    price: 149,
    description: 'Резиновая подошва двойной плотности с максимальной устойчивостью к истиранию. • Промежуточная подошва из материала Phylon, обеспечивающая отличное поглощение ударов.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/h11/68122370998302/butsy-joa-itw2122i-belyi-108543314-1.jpg",
    rating: "5 by 10",
    url: "https://kaspi.kz/shop/p/butsy-joma-interw2122in-belyi-41-108543324/?c=750000000#!/item"
  },
  {
    id: 19,
    category: "Shoes",
    name: 'Борцовки Green Hill GWB-3052 черный 42',
    price: 779,
    description: 'Вид спортабокс, борьба Застежка шнуровка  Особенности размераразмер в размер',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h19/68612208459806/bortsovki-green-hill-gwb-3052-chernyi-108745116-1.jpg",
    rating: "7 by 10",
    url: "https://kaspi.kz/shop/p/bortsovki-green-hill-gwb-3052-chernyi-42-108745117/?c=750000000#!/item"
  },
  {
    id: 20,
    category: "Shoes",
    name: 'Decathlon Kipsta Agility 100 FG 8397881 черные RU 39',
    price: 889,
    description: 'Модельбутсы Материал верхатермополиуретан Сезон круглогодичный',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/h6a/44866477326366/decathlon-kipsta-agility-100-fg-8397881-102135776-1.jpg",
    rating: "8 by 10",
    url: "https://kaspi.kz/shop/p/decathlon-kipsta-agility-100-fg-8397881-chernye-ru-39-100187302/?c=750000000#!/item"
  },
  {
    id: 21,
    category: "Smart TV",
    name: 'Телевизор Samsung UE43T5300AUXCE',
    price: 1599,
    description: 'Смотрите HDR контент с улучшенной четкостью и точнейшей цветопередачей. Телевизор Samsung UHD обеспечивает более точную передачу деталей в самых ярких и темных сценах.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item"
  },
  {
    id: 22,
    category: "Smart TV",
    name: 'Телевизор Xiaomi Mi TV P1 50 L50M6-6ARG',
    price: 1899,
    description: 'Дизайн обеспечивает более высокое соотношение размера экрана и корпуса, а также углы обзора 178° для более реалистичного изображения и приятного просмотра.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/he8/51568662249502/xiaomi-l50m6-6arg-cernyj-105324626-1.jpg",
    rating: "10 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-50-l50m6-6arg-127-sm-chernyi-105324626/?c=750000000#!/item"
  },
  {
    id: 23,
    category: "Smart TV",
    name: 'Телевизор Yasin 32G7 81 см черный',
    price: 2199,
    description: 'Благодаря разрешению Ultra-HD зритель с удовольствием просмотрит на своём телевизоре любой фильм, ведь его изображение будет выше всяких похвал. Технологии Smart и Android у Вас дома!',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/hc5/61768877965342/yasin-g7-cernyj-103489358-1.jpg",
    rating: "8 by 10",
    url: "https://kaspi.kz/shop/p/yasin-32g7-81-sm-chernyi-103489358/?c=750000000#!/item"
  },
  {
    id: 24,
    category: "Smart TV",
    name: 'Телевизор SSMART 43F20 109 см черный',
    price: 2599,
    description: 'Конструкция эргономичная телевизор устанавливается на крепких ножках.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h62/51432017985566/ssmart-43f20-chernyi-105159159-1.jpg",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/ssmart-43f20-109-sm-chernyi-105159159/?c=750000000#!/item"
  },
  {
    id: 25,
    category: "Smart TV",
    name: 'Телевизор Qwatt Q55YK-MB 140 см черный',
    price: 1099,
    description: 'Конструкция эргономичная телевизор устанавливается на крепких ножках.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/h6c/51443505922078/qwatt-q55yk-mb-chernyi-103717670-1.jpg",
    rating: "6 by 10",
    url: "https://kaspi.kz/shop/p/qwatt-q55yk-mb-140-sm-chernyi-103717670/?c=750000000#!/item"
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/