<template>

<div class="middle">
<div class="text-effect">
    <span>Weeb Store</span>
</div>
 <button >Shop now</button>
<p>Weeb Store is the place where worlds collide.<br>
Explore over a fine collection of anime merchandise to redefine your style with us, while we turn a purchase into a smile with you...</p>
</div>



<div class="row">
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img src="https://i.postimg.cc/g0YMZws0/Tengen-Uzui-Hoodie-5-Color-Variants.jpg">
                </a>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">Women's Top</a></h3>
                <span class="product-category"><a href="#">Women's</a></span>
                <div class="price">$75.55</div>
                <a class="add-to-cart" href="#">Add to cart</a>
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
            <div class="product-content">
                <h3 class="title"><a href="#">Men's SweatShirt</a></h3>
                <span class="product-category"><a href="#">Men's</a></span>
                <div class="price">$88.88</div>
                <a class="add-to-cart" href="#">Add to cart</a>
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
            <div class="product-content">
                <h3 class="title"><a href="#">Men's SweatShirt</a></h3>
                <span class="product-category"><a href="#">Men's</a></span>
                <div class="price">$88.88</div>
                <a class="add-to-cart" href="#">Add to cart</a>
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
            <div class="product-content">
                <h3 class="title"><a href="#">Men's SweatShirt</a></h3>
                <span class="product-category"><a href="#">Men's</a></span>
                <div class="price">$88.88</div>
                <a class="add-to-cart" href="#">Add to cart</a>
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
.middle {
  padding-top: 80px;
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
.product-grid .product-category a{
    color: #666;
    transition: all 0.3s ease 0s;
}
.product-grid .product-category a:hover{ color: #999; }
.product-grid .price{
    color: #4b5354;
    font-size: 14px;
    font-weight: 700;
    margin: 0 0 15px;
}
.product-grid .add-to-cart{
    color: #b8a398;
    background: #fff;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 25px 8px;
    border: 2px solid #b8a398;
    display: inline-block;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-in-out;
}
.product-grid .add-to-cart:hover{
    color: #fff;
    border-color: #b8a398;
}
.product-grid .add-to-cart:before{
    content:"";
    background: #b8a398;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.3s ease-in-out;
}
.product-grid .add-to-cart:hover:before{ width: 100%; }
@media screen and (max-width: 990px){
    .product-grid{ margin-bottom: 30px; }
}
</style>
