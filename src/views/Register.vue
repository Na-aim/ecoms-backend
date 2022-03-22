<template>
<div class="container">
	<div class="main">
		<div class="logo">
			<h1>#</h1>
		</div>
		<form action="#">
            <input type="email" placeholder="email" autocomplete="off" required>	<i class="fa fa-envelope"></i>

			<input type="username" placeholder="username" autocomplete="off" required>	<i class="fa fa-user"></i>

			<input type="password" placeholder="password" autocomplete="off" required>	<i class="fa fa-lock"></i>

			<input type="submit" value="Register">
			<h4>Not Registered?<a href="#"> Create an Account</a></h4>
		</form>
	</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      fetch("https://ecomsbackend.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("User registered");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style scoped>
.container{
	padding-top:100px ;
}
.main {
	width: 390px;
	height: 650px;
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
	-webkit-box-shadow: 0 0 100px #fa3380;
	        box-shadow: 0 0 100px #fa3380;
	background: #f857a6;  
	background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  
	background: linear-gradient(to right, #ff5858, #f857a6); 

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
	color: #fa3380;
	font-weight: bold;
	text-decoration: none;
	transition: 200ms ease-in-out;
}
h4 a:hover {
	color: #000;
}
input[type='username'], input[type='password'] , input[type='email']{
	width: 60%;
	outline: none;
	border-top: 0;
	color: #fa3380;
	border-left: 0;
	border-right: 0;
	font-size: 14px;
	padding: 26px;
	font-weight: 300;
	border-bottom: 1px solid #fa3380;
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
	-webkit-box-shadow: 0 0 10px #fa3380;
	        box-shadow: 0 0 10px #fa3380;
	background: #f857a6; 
	background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  
	background: linear-gradient(to right, #ff5858, #f857a6); 
}
input[type='submit']:hover {
	width: 155px;
	height: 52px;
	transform: scale(1.1);
	box-shadow: 0 0 40px #fa3380;
}
.fa-envelope {
	color: #fa3380;
  position: absolute;
  top: 195px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}
.fa-user {
	color: #fa3380;
  position: absolute;
  top: 25px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}

.fa-lock {
	color: #fa3380;
  position: absolute;
  top: 105px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}
.fa-redo {
	color: #fa3380;
  position: absolute;
  top: 185px;
  left: 56px;
  font-size: 18px !important;
  cursor: text;
  transition: .2s ease-out;
}


[placeholder]::-webkit-input-placeholder  {
	color: #fa3380;
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