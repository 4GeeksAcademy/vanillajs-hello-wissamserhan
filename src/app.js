/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let quien = Math.floor(Math.random() * who.length);
  let accion = Math.floor(Math.random() * action.length);
  let que = Math.floor(Math.random() * what.length);
  let cuando = Math.floor(Math.random() * when.length);
  let excuses =
    who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando];

  document.querySelector("#excuses").innerHTML = excuses;
  console.log("Hello");
};
