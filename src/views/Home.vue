<template>
<div class="hero-image">
  <div class="hero-text">
    <h1 style="font-size:50px"></h1>
    <p></p>
    <button >Shop now</button>
  </div>
</div>

<div class="text-effect">
    <span>Weeb Store</span>
</div>
<p>Weeb Store is the place where worlds collide.<br>
Explore over a fine collection of anime merchandise to redefine your style with us, while we turn a purchase into a smile with you...</p>



</template>

<script>
export default {

}
</script>

<style scoped>
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





.hero-image {
  background-image: url("https://i.postimg.cc/KvdJy8DZ/4rl3b1mz.webp");
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 500px;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #89d8f0;
  text-align: center;
  cursor: pointer;
  margin-top:350px;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}
p{
  font-size: 15px;
}
</style>
