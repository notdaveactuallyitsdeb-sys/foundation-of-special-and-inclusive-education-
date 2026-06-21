/* =========================================
   READING PROGRESS BAR
========================================= */

window.addEventListener('scroll', () => {

  let scrollTop =
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let progress =
    (scrollTop / scrollHeight) * 100;

  document.getElementById('progressBar').style.width =
    progress
const buttons =
document.querySelectorAll('button.chapter-btn');