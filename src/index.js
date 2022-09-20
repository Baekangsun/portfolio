////////////////////////////////// section active
import './style.css';

////////////////////////////////// section active
const sectionEl = document.getElementsByTagName('section')
for (let i = 0; i < sectionEl.length; i++) {
  console.log(sectionEl[i] + 'sectionEl')
  // if (windowY > sectionEl[i]) {
  // }

}

////////////////////////////////// about_me scroll Event
const aboutMe = document.getElementById('about_me')
const windowW = window.innerWidth;
if (window.scrollY > 0) {
  aboutMe.style.width = window.scrollY + 1100 + 'px'
}
window.addEventListener('scroll', () => {
  const windowY = window.scrollY;
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