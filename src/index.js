////////////////////////////////// section active
import './style.css';

////////////////////////////////// common 변수
let windoW;
let windoH;
let windowY = window.scrollY;
////////////////////////////////// section active
const sectionEl = document.querySelectorAll('section')
const homeEl = document.getElementById('home')
const aboutMeEl = document.getElementById('about_me')
const worksEl = document.getElementById('works')
const contactEl = document.getElementById('contact')
const aEl = document.querySelectorAll('.gnb a')
const gnbEl = document.querySelector('.gnb')

// aEl[0].classList.add('active')
// window.addEventListener('scroll', function () {
// windowY = window.scrollY;
//   if (homeEl.offsetTop <= windowY && aboutMeEl.offsetTop > windowY) {
//     aEl[0].classList.add('active')
//   } else {
//     aEl[0].classList.remove('active')
//   }
//   if (aboutMeEl.offsetTop <= windowY && worksEl.offsetTop > windowY) {
//     aEl[1].classList.add('active')
//   } else {
//     aEl[1].classList.remove('active')
//   }
//   if (worksEl.offsetTop <= windowY && contactEl.offsetTop - contactEl.offsetHeight > windowY) {
//     aEl[2].classList.add('active')
//   } else {
//     aEl[2].classList.remove('active')
//   }
//   if (contactEl.offsetTop - contactEl.offsetHeight < windowY) {
//     aEl[3].classList.add('active')
//   } else {
//     aEl[3].classList.remove('active')
//   }
// })
////////////////////////////////////////////////////////////////////////
for (let i = 0; i < aEl.length; i++) {
  aEl[i].addEventListener('click', function () {
    sectionEl.forEach(el => {
      const elName = '#' + el.id
      const aElName = aEl[i].hash
      if (aElName === elName) {
        this.classList.add('active')
      } else {
        aEl[i].classList.remove('active')
      }
    });
  })
}
// a를 클릭하면 주소 화면으로 이동
// a를 클릭하면 클릭한 a에 active 클래스 추가
// a를 클릭하면 다른 a의 active 클래스를 삭제

////////////////////////////////// visual background mousemove Event

const parallaxBgEl = document.querySelectorAll(".parallax div");

window.addEventListener('mousemove', function (pointer) {
  windowW = window.innerWidth
  windowY = window.innerHeight
  const pointerX = 0.5 - pointer.pageX / windowW
  const pointerY = 0.5 - pointer.pageY / windowY

  parallaxBgEl.forEach(function (el) {
    const offset = el.getAttribute("data-offset");
    el.style.transform = `translate3d(${pointerX * offset}px, ${pointerY * offset}px, 0px)`;
  });
})

////////////////////////////////// about_me background scroll Event

const aboutMe = document.getElementById('about_me')
let windowW = window.innerWidth;

if (window.scrollY > 0) {
  aboutMe.style.width = window.scrollY + 1100 + 'px'
}
window.addEventListener('scroll', () => {
  windowY = window.scrollY;
  if (windowY > 0) {
    aboutMe.style.width = windowY + 1100 + 'px'
    if (aboutMe.style.width > windowW + 'px') {
      aboutMe.style.width = windowW + 'px';
      return
    }
  } else {
    aboutMe.style.width = 1100 + 'px'
  }
})

