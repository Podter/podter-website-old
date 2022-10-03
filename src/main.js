import './css/bootstrap.min.css';
import './css/main.css';
import './css/now-ui-kit.css';

// set videos and text
document.querySelector('body').style.color = "#161320";
document.querySelector('.yttitle').innerHTML = "Youtube videos";
document.querySelector('.ytsubtitle').innerHTML = "Some trashs that I made! Enjoy 😁";
document.querySelector('.yt1').src = 'https://www.youtube-nocookie.com/embed/gPwOQk1y_7o';
document.querySelector('.yt2').src = 'https://www.youtube-nocookie.com/embed/K9c5P27a_KI';
document.querySelector('.yt3').src = 'https://www.youtube-nocookie.com/embed/YJY6GRUmr0M';
document.querySelector('.yt4').src = 'https://www.youtube-nocookie.com/embed/NwyHKfx1vX8';

// go to top button
document.querySelector('.scrollToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

document.querySelector('.scrollToTop2').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// rickroll
document.querySelector('.rickroll').addEventListener('click', () => {
    document.querySelector('body').style.backgroundImage = `url(https://raw.githubusercontent.com/Podter/podter.github.io/main/src/assets/rickroll.gif)`;
    document.querySelector('.yttitle').innerHTML = "Rickroll videos";
    document.querySelector('.ytsubtitle').innerHTML = "Some Rickroll videos that you wanted! Enjoy 😁";
    document.querySelector('.yt1').src = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1';
    document.querySelector('.yt2').src = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ';
    document.querySelector('.yt3').src = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ';
    document.querySelector('.yt4').src = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ';
});
