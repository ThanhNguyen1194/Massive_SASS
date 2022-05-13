window.onscroll = function () {
    // scrollFunction();
    console.log(posProgress)
  };
  
  var progressEle = document.getElementsByClassName("experience");
  var posProgress = progressEle.offsetTop;
  var intElemOffsetHeight = progressEle.clientHeight;
  
//   function scrollFunction() {
//     if (window.pageYOffset + intElemOffsetHeight >= posProgress) {
//       progressEle.classList.add("progess-animate");
//     } 
//     else {
//       progressEle.classList.remove("progess-animate");
//     }
//   }
  