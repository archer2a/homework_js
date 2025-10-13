/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]



  const sliderImg = document.getElementById("web-tech-image");

  //
  const prevBtn = document.getElementById("prev-button");
  const nextBtn = document.getElementById("next-button");

  let currentIndex = 0;

  function displayImage() {
    sliderImg.src = WEB_TECH_IMAGES[currentIndex];
    for (let i = 0; i < WEB_TECH_IMAGES.length; i++) {
      if (i === currentIndex) {
        sliderImg.classList.add('active');
      } else {
        sliderImg.classList.remove('active');
      }


    }
  }

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= WEB_TECH_IMAGES.length) {
      currentIndex = 0;
    }
    displayImage();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = WEB_TECH_IMAGES.length - 1;
    }
    displayImage();
  });

  // Инициализация первого изображения





  //


// // Первоначальная проверка первого изображения
// local_cypress_1.cy.get('#web-tech-image').should('have.attr', 'src', WEB_TECH_IMAGES[0], 'Первоначальное изображение должно соответствовать первому в массиве.'); // Тестирование переключения вперед через изображения
// for (let i = 1; i < WEB_TECH_IMAGES.length; i++) {
//   local_cypress_1.cy.get('#next-button').click();
//   local_cypress_1.cy.get('#web-tech-image').should('have.attr', 'src', WEB_TECH_IMAGES[i], `При нажатии кнопки 'next', ожидается изображение по индексу ${i}`);
// } // Тест зацикливания к первому изображению после последнего
//
// local_cypress_1.cy.get('#next-button').click();
// local_cypress_1.cy.get('#web-tech-image').should('have.attr', 'src', WEB_TECH_IMAGES[0], 'После достижения конца, нажатие кнопки "next" должно возвращать к первому изображению');
