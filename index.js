// navbar scroll
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// scroll up
document.querySelector('#to-top').addEventListener('click', () => {
  let TopInterval = setInterval(() => {
    let ArrowTop = document.body.scrollTop > 0 ? document.body : document.documentElement;
    if (ArrowTop.scrollTop > 0) {
      ArrowTop.scrollTop = ArrowTop.scrollTop - 50;
    }
    if (ArrowTop.scrollTop < 1) {
      clearInterval(TopInterval);
    }
  }, 10);
}, false);

function showscroll() {
  let TopButton = document.getElementById('to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    TopButton.classList.add('show');
  } else {
    TopButton.classList.remove('show');
  }
}

window.onscroll = () => {
  showscroll(); // ✅ fixed
};
