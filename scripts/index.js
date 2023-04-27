"use strict";

console.log("the index.js had begun executing...");


const greeting = document.getElementById("greeting");
const nameTextBox = document.getElementById("nameTextBox");
const pressMeButton = document.getElementById("pressMeButton");

function init(){
    pressMeButton.onclick = onPressMeButtonCLicked;
}

window.onload = init;

function onPressMeButtonCLicked(){
    console.log("hello from inside the onPressMeButton");
    let username = nameTextBox.value;
    greeting.innerHTML = 'Hello to ${username} from inside the onPressMeButton';

}

console.log("the index.js has finished executing...");

