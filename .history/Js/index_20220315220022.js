window.onscroll = function () {
    // scrollFunction();
    // console.log(window.pageYOffset);
  };
  
  var progressEle = document.getElementsByClassName("experience");
  var posProgress = document.getElementsByClassName('experience').offsetTop;
  var intElemOffsetHeight = progressEle.clientHeight;
  
//   function scrollFunction() {
//     if (window.pageYOffset + intElemOffsetHeight >= posProgress) {
//       progressEle.classList.add("progess-animate");
//     } 
//     else {
//       progressEle.classList.remove("progess-animate");
//     }
//   }
  console.log(progressEle);
  console.log(posProgress);