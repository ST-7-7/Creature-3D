const ACTIVE = 'active';

const active_video = document.querySelectorAll('.main-structure .content video');

const active_video_overlay = document.querySelector('.main-structure .content .video-overlay');


const menu_logo = document.querySelector("header .menu-logo");
const main_structure = document.querySelector(".main-structure");
const main_header = document.querySelector(".content .text-description h1");
const second_header = document.querySelector(".content .text-description h2");
const paragraph = document.querySelector(".content .text-description p");
const text_link = document.querySelector(".content .text-description a");
const menu_button = document.querySelectorAll(".aside-menu a");

active_video[0].classList.remove(ACTIVE);
active_video[0].classList.add(ACTIVE);
active_video_overlay.classList = "video-overlay video-overlay-otter";

main_header.innerHTML = CONTENT_INFO.otter.h1;
second_header.innerHTML = CONTENT_INFO.otter.h2;
paragraph.innerHTML = CONTENT_INFO.otter.p;
text_link.innerHTML = "Explore";

menu_logo.addEventListener("click", ()=> {
  menu_logo.classList.toggle(ACTIVE);
  main_structure.classList.toggle(ACTIVE);
})

menu_button.forEach((button, index) => {
  button.addEventListener("click", ()=> {
    active_video.forEach((video) => {
      video.classList.remove(ACTIVE);
    });
    active_video[index].classList.add(ACTIVE);
    modify_content(index);
  });
})

function modify_content(index) {
  switch (index) {
    
    case 0:
      main_header.innerHTML = CONTENT_INFO.otter.h1;
      second_header.innerHTML = CONTENT_INFO.otter.h2;
      paragraph.innerHTML = CONTENT_INFO.otter.p;
      active_video_overlay.className = "video-overlay video-overlay-otter";
      break;

    case 1:
      main_header.innerHTML = CONTENT_INFO.cat.h1;
      second_header.innerHTML = CONTENT_INFO.cat.h2;
      paragraph.innerHTML = CONTENT_INFO.cat.p;
      active_video_overlay.className = "video-overlay video-overlay-cat";
      break;

    case 2:
      main_header.innerHTML = CONTENT_INFO.owl.h1;
      second_header.innerHTML = CONTENT_INFO.owl.h2;
      paragraph.innerHTML = CONTENT_INFO.owl.p;
      active_video_overlay.className = "video-overlay video-overlay-owl";
      break;

    case 3:
      main_header.innerHTML = CONTENT_INFO.cockatoo.h1;
      second_header.innerHTML = CONTENT_INFO.cockatoo.h2;
      paragraph.innerHTML = CONTENT_INFO.cockatoo.p;
      active_video_overlay.className = "video-overlay video-overlay-cockatoo";
      break;

    case 4:
      main_header.innerHTML = CONTENT_INFO.seal.h1;
      second_header.innerHTML = CONTENT_INFO.seal.h2;
      paragraph.innerHTML = CONTENT_INFO.seal.p;
      active_video_overlay.className = "video-overlay video-overlay-seal";
      break;

    default:
      break;
  }
}