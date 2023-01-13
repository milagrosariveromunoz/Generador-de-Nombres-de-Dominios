/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ['the','our' ];
  var adj = ['great','big'];
  var noun =['jogger','racoon'];
  var arr = [];
  var li1 = '<li class="list-group-item">';
  var li2 = '</li>';
  let textHTML = '<ul>';
  textHTML += '<li>linea</li>'


  //1.Combinaciones de los arreglos
  //2.Lista combinaciones HTML
  pronoun.forEach(e => {
    adj.forEach(e1 => {
      noun.forEach(e2 => {
        let arr2 = [];
        arr2.push(li1 + e + e1 + e2 + li2);
        arr.push(arr2);
      });
    });
  });
  var texto = "";
  arr.forEach(a=> {
   texto+=a; 
  }
    )
    

  document.querySelector("#lista").innerHTML = texto
  
};

