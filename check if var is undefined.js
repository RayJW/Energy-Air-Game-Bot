// ==UserScript==
// @name         Undefined
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://game.energy.ch
// @grant        none
// ==/UserScript==

if(document.getElementsByClassName("btn btn-primary game-button btn-lg")[0] === undefined){
window.alert("Undefined");
}else{
 window.alert("NOT Undefined");
}
