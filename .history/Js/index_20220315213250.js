window.onscroll = function () {
    scrollFunction();
  };
  
  var progressEle = document.getElementsByClassName("experience");
  var posProgress = progressEle.offsetTop;
  var intElemOffsetHeight = progressEle.clientHeight;
  
  function scrollFunction() {
    console.log(progressEle.offsetTop)
    if (window.pageYOffset + intElemOffsetHeight >= posProgress) {
      progressEle.classList.add("progess-animate");
    } 
    // else {
    //   progressEle.classList.remove("progess-animate");
    // }
  }
  