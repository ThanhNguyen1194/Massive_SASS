// window.onscroll = function () {
//     // scrollFunction();
//     // console.log(window.pageYOffset);
//   };
  
//   var progressEle = document.getElementsByClassName("experience");
//   var posProgress = progressEle.offsetTop;
//   var intElemOffsetHeight = progressEle.clientHeight;
//   progressEle.addE(onscroll , function(){
//     progressEle.classList.add("progess-animate");
//   });
  
  
// //   function scrollFunction() {
// //     if (window.pageYOffset + intElemOffsetHeight >= posProgress) {
// //       progressEle.classList.add("progess-animate");
// //     } 
// //     else {
// //       progressEle.classList.remove("progess-animate");
// //     }
// //   }
//   console.log(progressEle);
AOS.init();

var test = document.querySelector(".experience");
var heightTest = test.clientHeight;
var chieuCaoTest = test.offsetTop;
console.log(test);
console.log(heightTest);
console.log(chieuCaoTest);