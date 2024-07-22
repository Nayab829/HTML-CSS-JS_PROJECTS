const tabTitles = document.getElementsByClassName("tab-title");
const tabContents = document.getElementsByClassName("tab-contents");
const menu = document.querySelector(".nav-links");
function openTab(event, tabname) {
  for (let tabTitle of tabTitles) {
    tabTitle.classList.remove("active-link");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
// Responsive Navigation
function openMenu(){
menu.classList.toggle("active")
}
function closeMenu(){
menu.classList.remove("active")
}
window.onscroll = ()=>{
  menu.classList.remove("active");
  if(document.documentElement.scrollTop > 20){
    document.querySelector('nav').classList.add("sticky");
  }else{
    document.querySelector('nav').classList.remove("sticky");
  }
}