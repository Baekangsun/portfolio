(()=>{let e=window.innerWidth,t=window.innerHeight,o=window.scrollY;const s=document.getElementById("about_me"),n=document.getElementById("works");document.querySelectorAll(".skill ul li .skill_bar").forEach((e=>{window.addEventListener("scroll",(()=>{e.offsetTop<o-1100?e.classList.add("on"):e.classList.remove("on")}))})),window.addEventListener("load",(function(){switch(window.addEventListener("scroll",(function(){!function(){o=window.scrollY;const e=document.querySelector(".gnb");let t;t="work"===window.PORTFOLIO_PAGE?document.querySelector(".contents"):s,t.offsetTop<o+20?e.style.color="black":e.style.color="white"}()})),function(){const o=document.querySelectorAll(".parallax div");window.addEventListener("mousemove",(function(s){const n=.5-s.pageX/e,c=.5-s.pageY/t;o.forEach((function(e){const t=e.getAttribute("data-offset");e.style.transform=`translate3d(${n*t}px, ${c*t}px, 0px)`}))}))}(),window.PORTFOLIO_PAGE){case"main":!function(){const e=document.querySelector(".works .section_more_btn .btn_wrap"),t=document.querySelectorAll(".works .project_wrap");e.addEventListener("click",(()=>{const o=[];t.forEach((function(e){"none"===getComputedStyle(e).display&&o.push(e)})),o.length>0&&(o[0].style.display="block",1===o.length&&(e.style.display="none"))}))}(),o>700&&(s.style.width="100%",n.style.width="100%"),window.addEventListener("scroll",(function(){o>0&&(s.style.width=o+1100+"px",n.style.width=o+1100+"px",s.style.width>e+"px"&&(s.style.width=e+"px",n.style.width=e+"px")),function(){const e=document.querySelectorAll(".gnb a"),t=document.getElementById("visual"),c=document.getElementById("contact");o=window.scrollY,t.offsetTop<=o&&s.offsetTop>o?e[0].classList.add("active"):e[0].classList.remove("active"),s.offsetTop<=o&&n.offsetTop>o?e[1].classList.add("active"):e[1].classList.remove("active"),n.offsetTop<=o&&c.offsetTop-c.offsetHeight>o?e[2].classList.add("active"):e[2].classList.remove("active"),c.offsetTop-c.offsetHeight<o?e[3].classList.add("active"):e[3].classList.remove("active")}()}));break;case"about":break;case"work":document.querySelector("section .section_more_btn").addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}}))})();