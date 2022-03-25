<template>
  <div class="middle">
<div class="text-effect">
    <span>About us</span>
</div>
<div class="container">
  <img src="https://i.postimg.cc/ncB9GjbR/Anime-Express-Banner.webp" alt="" style="width:100%;">
  <div class="text-block">
<div class="contentp">
<p>Welcome to Weeb Store! We’re a bunch of enthusiastic Anime Fans who decided to convert their passion into an online Weeb Store that free deliver to over 17 countries! All started when we looked for a store that sells the kind of stuff a Weeb whould want and need, especially items related to Ongoing Anime! We couldn’t find it, so we decided to open our own store Weeb-Store by Weebs!</p>
<br>
<p>
    We hope you’ll like it as much as we did building it! Our prime goal was to create a shopping experience where you can easily find whatever Anime Merchandise you need and be 100% satisfied with it for life!
</p>
  </div>
</div>
</div>
</div>
<h1>UL icon cards</h1>
<ul>
    <li style="--accent-color:#60c5a6">
        <div class="icon"><i class="fa-brands fa-codepen"></i></div>
        <div class="title">Codepen</div>
        <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div>
    </li>
    <li style="--accent-color:#f20071">
        <div class="icon"><i class="fa-brands fa-html5"></i></div>
        <div class="title">HTML 5</div>
        <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    </li>
    <li style="--accent-color:#FCBA35">
        <div class="icon"><i class="fa-brands fa-css3"></i></div>
        <div class="title">CSS 3</div>
        <div class="descr">Lorem ipsum dolor sit.</div>
    </li>
    <li style="--accent-color:#DAE438">
        <div class="icon"><i class="fa-brands fa-js"></i></div>
        <div class="title">Javascript</div>
        <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.</div>
    </li>
    <li style="--accent-color:#994D7F">
        <div class="icon"><i class="fa-brands fa-github"></i></div>
        <div class="title">Github</div>
        <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    </li>
</ul>
<div class="credits">
    <a target="_blank" href="https://www.freepik.com/premium-vector/modern-3d-infographic-template-with-5-steps-success_5957879.htm">inspired by</a>
</div>
</template>

<script>
export default {

}
</script>

<style>

@import url("https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css");
@import url("https://fonts.googleapis.com/css2?family=Jura:wght@500;600;900&display=swap");

.middle {
  padding-top: 80px;
}

p{
  font-size: 13px;
}
.contentp{
     position: absolute;
  bottom: 0;
  background: rgb(255, 255, 255); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1;
  width: 99%;
  padding: 20px;
}

.container {
  position: relative;
  font-family: Arial;
}


.demo{ background: #444; }
.text-effect{
    color: transparent;
    font-family: 'Pacifico', cursive;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-shadow: inset 0px 0px 2px 1px rgba(137, 207, 240);
    animation: animate 1.5s ease-in-out infinite alternate;
}
@keyframes animate{
    100%{
       text-shadow: 10px 10px 1px #89d8f0,9px 9px 2px #89d8f0,8px 8px 1px #89d8f0,
                   -8px -8px 1px #89d8f0,-9px -9px 1px #89d8f0,-10px -10px 1px #89d8f0,
                   -11px -11px 1px #89d8f0;
    }
}
@media only screen and (max-width: 990px){
    .text-effect{ font-size: 65px; }
}
@media only screen and (max-width: 767px){
    .text-effect{ font-size: 50px; }
}
@media only screen and (max-width: 479px){
    .text-effect{ font-size: 36px; }
}
@media only screen and (max-width: 359px){
    .text-effect{ font-size: 27px; }
}



h1 {
  text-align: center;
}

ul {
  width: min(60rem, 90%);
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  justify-content: center;
  gap: 2rem;
  list-style: none;
}

ul li {
  max-width: 12rem;
  justify-self: center;
  display: grid;
  grid-template:
    "icon"
    "line"
    "dot"
    "title"
    "descr" 1fr;
  justify-items: center;
  align-items: flex-start;
  text-align: center;
}

ul li .icon {
  grid-area: icon;
  width: 6rem;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  color: white;
  font-size: 2.5rem;
  border: 0.4rem solid var(--bgColor);
  border-radius: 50%;
  background: var(--accent-color);
  box-shadow: -0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.45),
    inset -0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.45);
}

ul li::before {
  content: "";
  grid-area: line;
  height: 2rem;
  border-right: 2px dotted currentColor;
}

ul li::after {
  content: "";
  grid-area: dot;
  width: 1rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--accent-color);
  justify-self: center;
  margin-bottom: 0.5rem;
}

ul li .title {
  grid-area: title;
  margin-block: 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
}

.credits {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
.credits a {
  color: var(--color);
}

</style>