const images1 = [
  " https://www.westside.com/cdn/shop/files/C3_01_1920X900_LOV.jpg?v=1731671478",
                "https://www.westside.com/cdn/shop/files/C2_11_1920x900_HAIR.jpg?v=1731657419",
                "https://www.westside.com/cdn/shop/files/C1_07_1920X900_SHOP_LOUNGEWEAR.jpg?v=1731656996",
                "https://www.westside.com/cdn/shop/files/C1_08_1920X900_SHOP.jpg?v=1731656940",
                "https://www.westside.com/cdn/shop/files/C1_03_1920X900_SHOP_WINTERWEAR.jpg?v=1731656119",
                "https://www.westside.com/cdn/shop/files/C1_04_1920X900_BOTTOMS.jpg?v=1731656384",
                "https://www.westside.com/cdn/shop/files/C1_06_1920X900_SHOP_FORMALS.jpg?v=1731656508"
];

let currentIndex1 = 0;
const sliderImage1 = document.getElementById("sliderImage1");

function showSlide1(index) {
  currentIndex1 = (index + images1.length) % images1.length;
  sliderImage1.style.opacity = 0;
  setTimeout(() => {
    sliderImage1.src = images1[currentIndex1];
    sliderImage1.style.opacity = 1;
  }, );
}

let interval1 = setInterval(() => showSlide1(currentIndex1 + 1), 2000);

function showPrevSlide() {
  clearInterval(interval1);
  showSlide1(currentIndex1 - 1);
  interval1 = setInterval(() => showSlide1(currentIndex1 + 1), 2000);
}

function showNextSlide() {
  clearInterval(interval1);
  showSlide1(currentIndex1 + 1);
  interval1 = setInterval(() => showSlide1(currentIndex1 + 1), 2000);
}

sliderImage1.src = images1[currentIndex1];

const images2 = [
  "	https://www.westside.com/cdn/shop/files/C2_01_1920X900_SHOP_MENSWEAR.jpg?v=1733464926",
  "	https://www.westside.com/cdn/shop/files/C2_02_1920X900_WINTER_UPDATE.jpg?v=1733465050",
  "https://www.westside.com/cdn/shop/files/C2_03_1920X900_SUIT_YORSELF.jpg?v=1733465186",
  "	https://www.westside.com/cdn/shop/files/C2_04_1920X900_SHOP_BLAZZERS.jpg?v=1733465303",
  "	https://www.westside.com/cdn/shop/files/C2_06_1920X900_SHOP_CASUAL_SHIRTS.jpg?v=1733465628",
  "	https://www.westside.com/cdn/shop/files/C2_07_1920X900_SHOP_SWEATSHIRT.jpg?v=1733465739",
  "	https://www.westside.com/cdn/shop/files/C2_09_1920X900_CASUAL_FOOTWEAR.jpg?v=1733465911"
];

let currentIndex2 = 0;
const sliderImage2 = document.getElementById("sliderImage2");

function showSlide2(index) {
  currentIndex2 = (index + images2.length) % images2.length;
  sliderImage2.style.opacity = 0;
  setTimeout(() => {
    sliderImage2.src = images2[currentIndex2];
    sliderImage2.style.opacity = 1;
  },);
}

let interval2 = setInterval(() => showSlide2(currentIndex2 + 1), 2000);

function showPrevSlide2() {
  clearInterval(interval2);
  showSlide2(currentIndex2 - 1);
  interval2 = setInterval(() => showSlide2(currentIndex2 + 1), 2000);
}

function showNextSlide2() {
  clearInterval(interval2);
  showSlide2(currentIndex2 + 1);
  interval2 = setInterval(() => showSlide2(currentIndex2 + 1), 2000);
}

sliderImage2.src = images2[currentIndex2];
// Slider 3
const images3 =[
  "	https://www.westside.com/cdn/shop/files/C4_01_1920X900_WEDDING_EDIT.jpg?v=1733466948",
  "	https://www.westside.com/cdn/shop/files/C4_02_1920X900_SHOP_ETHNIC.jpg?v=1733467164",
  "	https://www.westside.com/cdn/shop/files/C4_03_1920X900_AMPM.jpg?v=1733467252",
  "	https://www.westside.com/cdn/shop/files/C4_07_1920X900_FOOTWEAR.jpg?v=1733467346",
  "	https://www.westside.com/cdn/shop/files/C4_08_1920X900_BOHO.jpg?v=1733467449",
  "	https://www.westside.com/cdn/shop/files/C4_06_1920X900_COORDS.jpg?v=1733467640",
  "	https://www.westside.com/cdn/shop/files/C4_09_1920X900_LAYER_SEASON.jpg?v=1733467750",
  "https://www.westside.com/cdn/shop/files/C4_05_1920X900_SHOP_BOTTOMWEAR.jpg?v=1733467936",
  "	https://www.westside.com/cdn/shop/files/C4_04_1920X900_SHOP_CURVY.jpg?v=1733468638",
  "https://www.westside.com/cdn/shop/files/C1_08_1920X900_SHOP_ADD_ONS.jpg?v=1733468781",
  "	https://www.westside.com/cdn/shop/files/C4_02_1920X900_SKINCARE.jpg?v=1733468952"
];
let currentIndex3 = 0;
   const sliderImage3 = document.getElementById("sliderImage3");
   let interval3 = setInterval(showNextSlide3, 2000);
   
   function showSlide3(index) {
     currentIndex3 = (index + images3.length) % images3.length;
     sliderImage3.style.opacity = 0;
     setTimeout(() => {
       sliderImage3.src = images3[currentIndex3];
       sliderImage3.style.opacity = 1;
     }, );
   }
   
   function showPrevSlide3() {
     showSlide3(currentIndex3 - 1);
     clearInterval(interval3);
     interval3 = setInterval(showNextSlide3, 2000);
   }
   
   function showNextSlide3() {
     showSlide3(currentIndex3 + 1);
     clearInterval(interval3);
     interval3 = setInterval(showNextSlide3, 2000);
   }
   
   sliderImage3.src = images3[currentIndex3];


// Slider 4
const images4 = ["https://www.westside.com/cdn/shop/files/C3_01_1920X900_SHOP_FOR_TEENS.jpg?v=1733469515",
    "https://www.westside.com/cdn/shop/files/C3_04_1920X900_FOR_LITTLE_GIRLS.jpg?v=1733469909",
"	https://www.westside.com/cdn/shop/files/C3_04_1920X900_FOR_LITTLE_BOYS.jpg?v=1733470061",
"https://www.westside.com/cdn/shop/files/C3_06_1920X900_TEEN_GIRLS.jpg?v=1733470188",
"	https://www.westside.com/cdn/shop/files/C3_03_1920X900_TEEN_BOYS.jpg?v=1733470223",
"	https://www.westside.com/cdn/shop/files/C3_05_1920X900_SHOP_KIDS_ETHNICWEAR.jpg?v=1733470331"
];
let currentIndex4 = 0;
   const sliderImage4 = document.getElementById("sliderImage4");
   let interval4 = setInterval(showNextSlide4, 2000);
   
   function showSlide4(index) {
     currentIndex4 = (index + images4.length) % images4.length;
     sliderImage4.style.opacity = 0;
     setTimeout(() => {
       sliderImage4.src = images4[currentIndex4];
       sliderImage4.style.opacity = 1;
     }, );
   }
   
   function showPrevSlide4() {
     showSlide4(currentIndex4 - 1);
     clearInterval(interval4);
     interval4 = setInterval(showNextSlide4, 2000);
   }
   
   function showNextSlide4() {
     showSlide4(currentIndex4 + 1);
     clearInterval(interval4);
     interval4 = setInterval(showNextSlide4, 2000);
   }
   

sliderImage4.src = images4[currentIndex4];

const images5 = ["	https://www.westside.com/cdn/shop/files/Christmas-Web-HERO-Banner.gif?v=1732258334",
    "	https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_FOR_KITCHEN.jpg?v=1732258427",
"		https://www.westside.com/cdn/shop/files/C4_03_1920X900_SHOP_FOR_LIVING.jpg?v=1732258463",
"	https://www.westside.com/cdn/shop/files/C5_02_1920X900_SHOP_BEDDING.jpg?v=1728986944",
"	https://www.westside.com/cdn/shop/files/C5_05_1920X900__SHOP_BATH.jpg?v=1728987001"];
let currentIndex5 = 0;
   const sliderImage5 = document.getElementById("sliderImage5");
   let interval5 = setInterval(showNextSlide5, 2000);
   
   function showSlide5(index) {
     currentIndex5 = (index + images5.length) % images5.length;
     sliderImage5.style.opacity = 0;
     setTimeout(() => {
       sliderImage5.src = images5[currentIndex5];
       sliderImage5.style.opacity = 1;
     },);
   }
   
   function showPrevSlide5() {
     showSlide5(currentIndex5 - 1);
     clearInterval(interval5);
     interval5 = setInterval(showNextSlide5, 2000);
   }
   
   function showNextSlide5() {
     showSlide5(currentIndex5 + 1);
     clearInterval(interval5);
     interval5 = setInterval(showNextSlide5, 2000);
   }
sliderImage5.src = images5[currentIndex5];



function subscribe()
{
  var email = document.getElementById("Email").value;

  if(email)
  {
    alert("Email id" + email);

    alert("Email id is enterd :" + email);
  }
  else{
    alert("Please enter your email");
  }
}
