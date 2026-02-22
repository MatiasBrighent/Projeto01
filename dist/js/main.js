document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header");if(!e)return;let d=window.scrollY;window.addEventListener("scroll",()=>{const s=window.scrollY;s>d&&s>100?e.classList.add("header--is-hidden"):e.classList.remove("header--is-hidden"),d=s},{passive:!0})});
//# sourceMappingURL=main.js.map
