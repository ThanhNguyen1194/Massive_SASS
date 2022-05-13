
// AOS.init();

window.onscroll = function () {
    displayHeader();
    scrollFunction();
  };
  
  var progressEle = document.querySelector(".experience");
  var posProgress = progressEle.offsetTop;
  var intElemOffsetHeight = progressEle.clientHeight;
  var headerImg = document.querySelector(".navbar__content .navbar-brand")
  var stickyImg = headerImg.offsetTop; 
  
  function scrollFunction() {
    if (window.pageYOffset + intElemOffsetHeight >= posProgress) {
      progressEle.classList.add("progess-animate");
    } else {
      progressEle.classList.remove("progess-animate");
    }
  }

  function displayHeader(){
    if (window.pageYOffset > stickyImg) {
      headerImg.classList.add("sticky")
    } else {
      headerImg.classList.remove("sticky");
    }
  }
  