function animar_child(section, child) {
    var section = document.getElementById(section);
    var sectionStart = section.offsetTop;
  
    window.addEventListener("scroll", (e) => {
      var scroll = document.documentElement.scrollTop - sectionStart;
      var items = document.querySelectorAll(child);
      items.forEach((elem) => {
        if (elem.offsetTop - window.innerHeight / 2 < scroll) {
          elem.classList.add("_show");
          elem.classList.remove("_hide");
          
        } else {
          elem.classList.add("_hide");
          elem.classList.remove("_show");
        }
      });
    });
  }
  
  function animar_progress_bar(seccion, progress) {
    window.addEventListener('scroll', function () {
      var section = document.getElementById(seccion);
      var sectionStart = section.offsetTop;
      var sectionEnd = sectionStart + section.offsetHeight;
  
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      var winScroll = scrollTop - sectionStart;
      var height = sectionEnd - sectionStart;
      var scrolled = (winScroll / height) * 100;
  
      if (scrolled < 0) scrolled = 0;
      if (scrolled > 100) scrolled = 100;
  
      document.getElementById(progress).style.height = scrolled + "%";
    });
  }

  function animar_progress_bar(seccion, progress) {
    window.addEventListener('scroll', function () {
      var section = document.getElementById(seccion);
      var sectionStart = section.offsetTop;
      var sectionEnd = sectionStart + section.offsetHeight;
  
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      var winScroll = scrollTop - sectionStart;
      var height = sectionEnd - sectionStart;
      var scrolled = (winScroll / height) * 100;
  
      if (scrolled < 0) scrolled = 0;
      if (scrolled > 100) scrolled = 100;
  
      document.getElementById(progress).style.height = scrolled + "%";
    });
  }
function cargar_circulo(id_circulo) {
  let circularProgressList = document.querySelectorAll(id_circulo);
  let end = 100;
  let increment = 30;

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateCircularProgress(circularProgress) {
    let inicio = 0;

    function animate() {
      if (isInViewport(circularProgress)) {
        setTimeout(function () {
          inicio += increment;
          circularProgress.style.background = `conic-gradient(#86e7f8 ${
            inicio * 3.6
          }deg,#faf9f8 0deg)`;

          if (inicio < end) {
            requestAnimationFrame(animate);
          }
        }, 500);
      }
    }

    animate();
  }

  function handleScroll() {
    circularProgressList.forEach((circularProgress) => {
      if (isInViewport(circularProgress)) {
        if (!circularProgress.isAnimating) {
          animateCircularProgress(circularProgress);
          circularProgress.isAnimating = true;
        }
      } else {
        circularProgress.isAnimating = false;
        circularProgress.style.background =
          "conic-gradient(#86e7f8 0deg,#faf9f8 0deg)";
      }
    });
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll);
}


