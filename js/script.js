// SWIPER CATEGORIES
var swiperCategories = new Swiper('.categories__container', {
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 6.7,
            spaceBetween: 45,
          },
        },
  });
// SWIPER CATEGORIES END



// SWIPER PRODUCT SECTION START
var swiperProducts = new Swiper('.new__container', {
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
});
// SWIPER PRODUCT SECTION END


// PRODUCTS TABS 
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });

    target.classList.add('active-tab');

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');
  });

});






// let email = 'samsung@gmail.com';

// let result = email.indexOf('s');
// console.log(result);


// let ism = 'shakhzod';
// let natija = ism.slice(1, 2);
// console.log(natija);


// let ism = prompt('Ismingizni kiriting:');

// let result = ism.charAt().toUpperCase()
// let davomi = ism.slice(1).toLowerCase();
// let yakun = result + davomi;
// alert(`Salom ${yakun}`);

// const ism = prompt('Ismingizni kiriting:');
// const yosh = prompt('Yoshingizni kiriting:');

// let yil = 2024 - yosh;
// let oy = yosh * 12;
// let hafta = ((yosh * 365) / 7).toFixed(0);
// let kun = yosh * 365;
// let soat = kun * 24;
// let daqiqa = soat * 60;
// let soniya  = daqiqa * 60;
// const result = `Hurmatli ${ism}. Siz ${yil} yilda tug'ilgansiz. Va siz ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat, ${daqiqa} daqiqa, ${soniya} soniya yashagan ekansiz. `
// alert(result);

// const ism = prompt('Ismni kiriting:');
// const ismlar = ['Ahror', 'Sardor', 'Diyor'];


  // let i = 0;
  // while( i < ismlar.length){
  //   let result = ismlar[i] + 'bek'
  //   console.log(result);
  //   i++;
  // }

  // for (let i = 0; i < ismlar.length; i++) {
  //    const index = ismlar[i] + 'bek';
  //   console.log(index);
  // }

// if (ismlar.includes(ism)){
//   alert (`Ha ${ism} bor!`)
// } else {
//   alert(`Afsus ${ism} ismi yo'q!`)
// }

// const viloyat = prompt ('Qaysi viloyat kerak sizga?');
// switch(viloyat) {
//   case 'Toshkent':
//   alert('Bu viloyatda 5mln aholi bor.')
//   break;
//   case 'Buxoro':
//   alert('Bu viloyatda 3mln aholi bor.')
//   break;
//   case 'Samarqand':
//   alert('Bu viloyatda 7mln aholi bor.')
//   break;
//   default: 
//   alert('Afsus bizda bunday viloyat mavjud emas!')
//   break;
// }


// let user = prompt('Belgi kiriting:')
// let meyor = 10;

// if (user.length > meyor) {
//   alert(`Siz ${meyor} ta belgi kiritishingiz mumkin. Lekin siz ${user.length - meyor} ta ortiqcha belgi kiritdingiz. `)
// } else {
//   alert(`Siz meyordan ${meyor - user.length} ta kam kiritdingiz.`)
// }

// let calc = function (radius) {
//   const name = 3.14 * radius ** 2;
//   return name;
// }

// const a = calc(5);

// const val = function (a) {
//   return a * 2
// }

// console.log(val(a));


// let array = [10, 13, 45];

// const bill = (products, tax) => {
//   let total = 0;

//   for(let i = 0; i < products.length; i++) {
//     total +=  products[i] * tax;
//   }
//   return total
// }

// const result = bill(array, 0.2)
// console.log(result);


// const ismlar = ['ahror', 'sardor', 'diyor', 'farxod'];

// ismlar.forEach((ism) => {
//   const newIsm = ism.charAt().toUpperCase();
//   const Upism = ism.slice(1).toLowerCase();
//   const plusIsm = newIsm + Upism + 'bek';
//   console.log(plusIsm);
// // })


// const user = {
//   name: 'Shakhzod',
//   yosh: 25,
//   joy: 'Xorazm',
//   langs: ['uzbek', 'russian', 'korean'],
//   login: function() {
//     console.log('Siz bu saytdagi sahifangizga kirdingiz!')
//   },
//   speak: function () {
//      console.log('I can speak:')
//      this.langs.forEach((lang) => {console.log(lang)})
//   },
//   movies: [
//     {name: 'avatar', likes: 453},
//     {name: 'titanic', likes: 635},
//     {name: 'sherlock',likes: 356},
//   ],
//   moviesWatch: function(){
//     this.movies.forEach((movie) => {
//       const result = `Kino nomi: ${movie.name} 🎥, Likelar: ${movie.likes}ta ❤️`
//       console.log(result);
//     })
//   }
// }
 
// user.moviesWatch()

// movies.forEach((movie) => {
//   const result = `Kino nomi: ${movie.name} 🎥, Likelar: ${movie.likes}ta ❤️`
//   console.log(result);
// })


// const area = 6.4 
// console.log(Math.trunc(area));

// const array = [[false, true], [1, 2], 99, 'yaxshi']

// array.forEach((obj, i) => {
//   if (typeof obj == 'string') {
//     console.log('String index:', i)
//   }
// })

// for (let i = 0; i < array.length; i++){
//   if (typeof array[i] == 'string') {
//     console.log('Stringning indexi:', i)
//   }
// }

// const data = [[1, 2, 3], 'qizil', [4, 5, 6], true, false];
// const newData = [];

// data.forEach((item) => {
//   const result = Array.isArray(item)
//   if (result) {
//     item.forEach((num) => {
//       newData.push(num);
//     })
//   }
// })

// console.log(newData);

// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0'];
// const empty = []

// checkData.forEach((item) => {
//   if (!item){
//     empty.push(item)
//   }
// })

// console.log(empty);

 const word = 'samarqand';
 const splitword = word.split('')
 let newword = ''
 for (let i = word.length - 1; i >= 0; i--){
  newword += splitword[i]
 }
 console.log(newword);