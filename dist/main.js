(()=>{"use strict";let e=localStorage.getItem("today")?JSON.parse(localStorage.getItem("today")):[],t=localStorage.getItem("week")?JSON.parse(localStorage.getItem("week")):[],o="today";function c(){l();const n=document.querySelector(".button-add-project"),r=document.querySelector(".add-project-popup"),a=document.querySelector(".button-add-project-popup"),d=document.querySelector(".button-cancel-project-popup"),u=document.querySelector(".week"),s=document.querySelector(".today"),i=document.querySelector(".week-button");document.querySelector(".today-button").addEventListener("click",(()=>{u.classList.remove("active"),s.classList.add("active"),o="today",c()})),i.addEventListener("click",(()=>{s.classList.remove("active"),u.classList.add("active"),o="week",c()})),n.addEventListener("click",(()=>{n.style.display="none",r.style.display="block"})),d.addEventListener("click",(()=>{n.style.display="block",r.style.display="none"})),a.addEventListener("click",(()=>{let c=e;"week"==o&&(c=t);var n=document.querySelector(".input-add-project-popup").value;""!==n&&(document.querySelector(".input-add-project-popup").value="",function(e,t){t.push(e),localStorage.setItem(o,JSON.stringify(t)),location.reload()}(n,c),l())})),document.querySelectorAll(".delProj").forEach(((c,l)=>{c.addEventListener("click",(()=>{!function(c){let l=e;"week"==o&&(l=t),l.splice(c,1),localStorage.setItem(o,JSON.stringify(l)),location.reload()}(l)}))}))}function l(){let c="",l=e;"week"==o&&(l=t);for(let e=0;e<l.length;e++)c+=`<div class="projstyle"> \n                    <button class="newProj">${l[e]}</button>\n                    <button class="delProj">X</button>\n                </div>`;document.querySelector(".projects-list").innerHTML=c}window.onload=function(){l(),c()}})();