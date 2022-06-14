/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com", ".net", ".us", ".io"];
let start = "www.";
let domains = [];

window.onload = function domain() {
  //write your code here

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < ext.length; d++) {
          domains.push(start + pronoun[a] + adj[b] + noun[c] + ext[d]);
        }
      }
    }
  }
  document.querySelector("p").innerHTML = domains;
};
