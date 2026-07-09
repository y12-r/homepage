import './style.css';

import JustValidate from 'just-validate';

const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
    },
    {
      rule: 'maxNumber',
      value: 150,
    },
  ])

  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: '必須入力項目です。',
    },
  ])

  .onSuccess((event) => {
    console.log('呼び出された');
    let formData = new FormData(event.currentTarget);
    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('password'));
    console.log(formData.get('age'));
    console.log(formData.get('address'));
  });

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let titleElement = document.createTextNode(
  'スライド' + swiper.realIndex + 'を表示しています。',
);

let titleContainer = document.getElementById('swiper-title');
titleContainer.appendChild(titleElement);

swiper.on('slideChange', function () {
  console.log('slide changed');
  console.log(swiper.realIndex);
  titleElement.remove();

  titleElement = document.createTextNode(
    'スライド' + swiper.realIndex + 'を表示しています。',
  );
  titleContainer.appendChild(titleElement);
});

const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const titles = [
  'ぴえんのイラスト（男性）',
  '浮かれる人のイラスト（女性）',
  '怖くて腰が抜ける人のイラスト（女性）',
  '悔しくてハンカチを噛む人のイラスト（男性）',
];

let titleElement2 = document.createTextNode(titles[swiper2.realIndex]);
let titleContainer2 = document.getElementById('swiper-title-2');
titleContainer2.appendChild(titleElement2);

swiper2.on('slideChange', function () {
  titleElement2.remove();
  titleElement2 = document.createTextNode(titles[swiper2.realIndex]);
  titleContainer2.appendChild(titleElement2);
});
