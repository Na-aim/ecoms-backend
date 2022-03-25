<template>

<div class="middle">
<div class="text-effect">
    <span>Weeb Store</span>
</div>
<div class="container">
  <img src="https://i.postimg.cc/hjB4LMXN/Anime-Crossover-by-Legendary-Rey-on-Deviant-Art-1.png" alt="" style="width:100%;">
  <div class="content">
 <button class="btnbtn" >Shop now</button>
<p>Weeb Store is the place where worlds collide.<br>
Explore over a fine collection of anime merchandise to redefine your style with us, while we turn a purchase into a smile with you...</p>
</div>
</div>
</div>



<div class="row">
<div class="text-effect">
    <span>best selling products</span>
</div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img src="https://i.postimg.cc/g0YMZws0/Tengen-Uzui-Hoodie-5-Color-Variants.jpg">
                </a>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img src="https://i.postimg.cc/1XSYZ6r0/ANIME-Nike-Air-Force-Custom.jpg">
                </a>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img src="https://i.postimg.cc/fyFt97qm/Itachi-V2-LINK-IN-BIO-DROPED-NOW.jpg">
                </a>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img src="https://i.postimg.cc/rmZCfrYF/itache-hood.webp">
                </a>
            </div>
        </div>
    </div>
</div>
    



</template>

<script>
export default {

}
</script>


<style scoped>
.container {
  position: relative;
  max-width: auto;
  margin: 0 auto;
}
.container img {vertical-align: middle;}

.container .content {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.3); /* Black background with 0.5 opacity */
  color: #f1f1f1;
  width: 99%;
  padding: 7px;
}
.middle {
  padding-top: 80px;
}

.row {
  padding-top: 100px;
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

.btnbtn  {
	color: #fff;
	width: 150px;
	height: 50px;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 16px;
	margin-top: 50px;
	border-radius: 4px;
	transition: 200ms ease-out;
	-webkit-box-shadow: 0 0 10px #89d8f0;
	        box-shadow: 0 0 10px #89d8f0;
	background: #89c8f0; 
	background: -webkit-linear-gradient(to right, #89e0f0, #1C86EE);  
	background: linear-gradient(to right, #89e0f0, #1C86EE); 
}
.btnbtn  {
	width: 120px;
	height: 40px;
	transform: scale(1.1);
	box-shadow: 0 0 40px #89d8f0;
}

p{
  font-size: 15px;
}


.product-grid{
    font-family: 'Montserrat', sans-serif;
    text-align: center;
}
.product-grid .product-image{ position: relative; }
.product-grid .product-image a.image{display: block; }
.product-grid .product-image img{
    width: 100%;
    height: auto;
    transition: all 0.3s ease 0s;
}
.product-grid:hover .product-image img{
    border-radius: 100px;
    box-shadow: 0 0 20px -10px rgba(0,0,0,0.6);
}
.product-grid .product-content{  padding: 20px 10px 0; }
.product-grid .title{
    font-size: 19px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0 0 10px;
}
.product-grid .title a{
    color: #7e8485;
    transition: all 0.3s ease 0s;
}
.product-grid .title a:hover{ color: #acbfa3; }
.product-grid .product-category{
    font-size: 14px;
    text-transform: capitalize;
    margin: 0 0 10px;
    display: block;
}

.product-grid .add-to-cart:hover:before{ width: 100%; }
@media screen and (max-width: 990px){
    .product-grid{ margin-bottom: 30px; }
}
</style>
