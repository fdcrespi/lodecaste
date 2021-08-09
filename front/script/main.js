"use strict";

window.addEventListener("DOMContentLoaded", initPage());

function initPage() {

    const URL_BD = "http://localhost:8080";
   
    async function loadProducts(){
        let cuerpo = document.querySelector("#contenido");
        let r = await fetch(`${URL_BD}/producto`, {
            "method": "GET"
        });
        let text = await r.json();
        cuerpo.innerHTML += text;
    }

    loadProducts();
}