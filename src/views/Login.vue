<template>
<div class="container">
	<div class="main">
		<div class="logo">
			<h1>#</h1>
		</div>
		<form action="#">
			<input type="username" placeholder="username" autocomplete="off" required>	<i class="fa fa-user"></i>
			<input type="password" placeholder="password" autocomplete="off" required>	<i class="fa fa-lock"></i>
			<input type="submit" value="Log In">
			<h4>Not Registered?<a href="#Register"> Create an Account</a></h4>
		</form>
	</div>
</div>
</template>

<script>

</script>

<style scoped>
.container{
	padding-top:100px ;
}

.main {
	width: 390px;
	height: 550px;
	background: #fff;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
	border-radius: 10px;
	-webkit-box-shadow: 0 0 20px rgba(137, 207, 240);
	        box-shadow: 0 0 20px rgba(137, 207, 240);
}
.logo {
	top: 50px;
	width: 100px;
	height: 100px;
	margin: auto;
	background: #000;
	position: relative;
	border-radius: 100px;
	-webkit-transition: 200ms ease-in-out;
	-o-transition: 200ms ease-in-out;
	transition: 200ms ease-in-out;
	-webkit-animation: rotation 10s infinite linear;
	-webkit-box-shadow: 0 0 100px #89d8f0;
	        box-shadow: 0 0 100px #89d8f0;
	background: #89d8f0;  
	background: -webkit-linear-gradient(to right, #fa3380, #89d8f0);  
	background: linear-gradient(to right, #fa3380, #89d8f0); 

}
.logo:hover {
	-webkit-animation: rotation 0.9s infinite linear;
	-webkit-box-shadow: 0 0 10px #fa3380;
	        box-shadow: 0 0 10px #fa3380;
}
.logo h1 {
	color: #fff;
	font-size: 70px;
	font-weight: 200;
	line-height: 100px;
}
form {
	top: 100px;
	position: relative;
}
form input {
	display: block;
	margin: 10px auto;
}

form h4 {
	font-size: 12px;
	margin-top: 50px;
}

h4 a {
	color: #89d8f0;
	font-weight: bold;
	text-decoration: none;
	transition: 200ms ease-in-out;
}
h4 a:hover {
	color: #000;
}
input[type='username'], input[type='password'] {
	width: 60%;
	outline: none;
	border-top: 0;
	color: #89d8f0;
	border-left: 0;
	border-right: 0;
	font-size: 14px;
	padding: 26px;
	font-weight: 300;
	border-bottom: 1px solid #89d8f0;
}


input[type='submit'] {
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
	background: #89cff0; 
	background: -webkit-linear-gradient(to right, #89e0f0, #89d8f0);  
	background: linear-gradient(to right, #89e0f0, #89d8f0); 
}
input[type='submit']:hover {
	width: 155px;
	height: 52px;
	transform: scale(1.1);
	box-shadow: 0 0 40px #fa3380;
}
.fa-user {
	color: #89d8f0;
  position: absolute;
  top: 25px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}

.fa-lock {
	color: #89d8f0;
  position: absolute;
  top: 105px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}
.fa-redo {
	color: #89d8f0;
  position: absolute;
  top: 185px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}


[placeholder]::-webkit-input-placeholder  {
	color: #89d8f0;
	padding-left: 10px;
}
[placeholder]:focus::-webkit-input-placeholder {
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  -webkit-transform: translate(10px, 0);
          transform: translate(10px, 0);
  opacity: 0;
}
 

@-webkit-keyframes rotation {
		from {
				-webkit-transform: rotate(0deg);
		}
		to {
				-webkit-transform: rotate(359deg);
		}
}


</style>