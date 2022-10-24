let windowW = window.innerWidth;
let windowH = window.innerHeight;
let windowY = window.scrollY;

const aboutMeEl = document.getElementById("about_me");
const worksEl = document.getElementById("works");

function gnbStyleChange() {
  const aEl = document.querySelectorAll(".gnb a");
  const visualEl = document.getElementById("visual");
  const contactEl = document.getElementById("contact");
  windowY = window.scrollY;
  if (visualEl.offsetTop <= windowY && aboutMeEl.offsetTop > windowY) {
    aEl[0].classList.add("active");
  } else {
    aEl[0].classList.remove("active");
  }
  if (aboutMeEl.offsetTop <= windowY && worksEl.offsetTop > windowY) {
    aEl[1].classList.add("active");
  } else {
    aEl[1].classList.remove("active");
  }
  if (worksEl.offsetTop <= windowY && contactEl.offsetTop - contactEl.offsetHeight > windowY) {
    aEl[2].classList.add("active");
  } else {
    aEl[2].classList.remove("active");
  }
  if (contactEl.offsetTop - contactEl.offsetHeight < windowY) {
    aEl[3].classList.add("active");
  } else {
    aEl[3].classList.remove("active");
  }
}

function gnbColorChange() {
  windowY = window.scrollY;

  const gnbEl = document.querySelector(".gnb");
  const isWorkPage = window.PORTFOLIO_PAGE === "work";

  //삼항연산자
  // const offsetEl = isWorkPage ? document.querySelector(".contents") : aboutMeEl;
  let offsetEl;
  if (isWorkPage) {
    offsetEl = document.querySelector(".contents");
  } else {
    offsetEl = aboutMeEl;
  }

  if (offsetEl.offsetTop < windowY + 20) {
    gnbEl.style.color = "black";
  } else {
    gnbEl.style.color = "white";
  }
}

function parallaxMouseMove() {
  const parallaxBgEl = document.querySelectorAll(".parallax div");
  window.addEventListener("mousemove", function (pointer) {
    const pointerX = 0.5 - pointer.pageX / windowW;
    const pointerY = 0.5 - pointer.pageY / windowH;

    parallaxBgEl.forEach(function (el) {
      const offset = el.getAttribute("data-offset");
      el.style.transform = `translate3d(${pointerX * offset}px, ${pointerY * offset}px, 0px)`;
    });
  });
}

function aboutMeScrollBerak() {
  if (windowY > 700) {
    aboutMeEl.style.width = 100 + "%";
    worksEl.style.width = 100 + "%";
  }
}

function aboutMeScrollEvent() {
  if (windowY > 0) {
    aboutMeEl.style.width = windowY + 1100 + "px";
    worksEl.style.width = windowY + 1100 + "px";
    if (aboutMeEl.style.width > windowW + "px") {
      aboutMeEl.style.width = windowW + "px";
      worksEl.style.width = windowW + "px";
    }
  }
}
function workMoreEvent() {
  const worksMoreBtn = document.querySelector(".works .section_more_btn .btn_wrap");
  const project = document.querySelectorAll(".works .project_wrap");

  worksMoreBtn.addEventListener("click", () => {
    const noneItem = [];
    project.forEach(function (el) {
      const projectDisplay = getComputedStyle(el).display;
      if (projectDisplay === "none") {
        noneItem.push(el);
      }
    });
    if (noneItem.length > 0) {
      noneItem[0].style.display = "block";
      if (noneItem.length === 1) {
        worksMoreBtn.style.display = "none";
      }
    }
  });
}

function topOfPage() {
  const scrollTopBtn = document.querySelector("section .section_more_btn");
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function skillBarAnimation() {}
const skillBarEl = document.querySelectorAll(".skill ul li .skill_bar");
skillBarEl.forEach((el) => {
  window.addEventListener("scroll", () => {
    if (el.offsetTop < windowY - 1100) {
      el.classList.add("on");
    } else {
      el.classList.remove("on");
    }
  });
});
function fadeInActionEvent() {
  const fadeInEls = document.querySelectorAll(".fade_in");
  fadeInEls.forEach((fadeInEl) => {
    factory(fadeInEl);
  });
  function factory(el) {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.intersectionRatio > 0)) {
          const delayTime = el.getAttribute("data-delay");
          setTimeout(function () {
            el.style.animation = "boxAnimate 1s cubic-bezier(0.35, 1.34, 0.43, 1.28)";
            el.style.opacity = 1;
          }, delayTime);
        }
      },
      {
        threshold: 0.2,
      }
    );
    io.observe(el);
    return io;
  }
}

////////////////////////////////////////////////////////////// commen
window.addEventListener("scroll", function () {
  gnbColorChange(); //상단 header 메뉴 color 변경
});
parallaxMouseMove(); // visual 이미지 마우스무브 인터렉션
fadeInActionEvent(); // fadein 애니메이션

switch (window.PORTFOLIO_PAGE) {
  ////////////////////////////////////////////////////////////// main
  case "main":
    workMoreEvent(); // work 더보기 기능
    aboutMeScrollBerak();
    window.addEventListener("scroll", function () {
      aboutMeScrollEvent(); // about 배경 인터렉션 이벤트
      gnbStyleChange(); // 상단 gnb active style 변경
    });
    break;
  ////////////////////////////////////////////////////////////// about
  case "about":
    skillBarAnimation(); // 스킬 바 애니메이션
    break;
  ////////////////////////////////////////////////////////////// work
  case "work":
    topOfPage(); // 상단으로 이동하는 기능
    break;
}
