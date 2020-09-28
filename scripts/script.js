// JavaScript Document

var Hamburger = document.querySelector("#hamburger");

Hamburger.addEventListener("click", doeHeen);

function doeHeen() {
    let menu = document.querySelector("#menu");
    menu.classList.add("toonHamburger");

}
var kruisje = document.querySelector("header div > img");

kruisje.addEventListener("click", doeWeer);

function doeWeer() {
    let menu = document.querySelector("#menu");
    menu.classList.remove("toonHamburger");

}

var hartje = document.querySelector("nav ul:first-of-type li:nth-child(5) img");

hartje.addEventListener("click", hartjekloppen);

function hartjekloppen() {
    hartje.classList.toggle("hart");
}
