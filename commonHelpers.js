import{S as m,i as l}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function p(s){const i=`https://pixabay.com/api/?key=42530845-4f1978a0628226c655e2788d5&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const u=document.querySelector(".gallery");function d({largeImageURL:s,webformatURL:t,tags:r,likes:i,views:e,comments:o,downloads:n}){return`<a href="${s}">
                <img src="${t}" alt="${r}"/>
                <div class="info-box">
                    <p class="info"><b>Likes</b> ${i}</p>
                    <p class="info"><b>Views</b> ${e}</p>
                    <p class="info"><b>Comments</b> ${o}</p>
                    <p class="info"><b>Downloads</b> ${n}</p>
                </div>
            </a>`}function g(s){const t=s.map(d).join("");return u.insertAdjacentHTML("beforeEnd",t)}const f="/goit-js-hw-11/assets/icon-8fe9c699.svg",a=document.querySelector(".form"),c=document.querySelector(".loading");a.addEventListener("submit",s=>{s.preventDefault(),u.innerHTML="";const t=a.search.value.trim().replace(/\s/g,"+");if(t&&t!=="")c.classList.add("loader"),p(t).then(r=>{c.classList.remove("loader"),r.total!==0?(g(r.hits),new m(".gallery a",{captionsData:"alt",captionDelay:100}).refresh()):l.show({iconUrl:f,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",color:"#FF6868",position:"topRight",progressBarColor:"#ffffff",close:!1,timeout:5e3})}).catch(r=>(l.show({iconUrl:f,message:`Sorry, there is a problem - ${r}!`,messageColor:"#ffffff",color:"#FF7F50",position:"topRight",progressBarColor:"#ffffff",close:!1,timeout:5e3}),console.log(r),c.classList.remove("loader")));else return;a.reset()});
//# sourceMappingURL=commonHelpers.js.map