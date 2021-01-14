
function navbu() {
  document.getElementById("navbut_u").classList.toggle("u2");
}

function navbwe() {
  document.getElementById("navbut_we").classList.toggle("we2");
}
function navbov() {
  document.getElementById("navbut_ov").classList.toggle("ov2");
}

function navbcarr() {
  document.getElementById("navbut_carr").classList.toggle("carr2");
}

function navbearth() {
  document.getElementById("navbut_earth").classList.toggle("earth2");
}

function loginscreen() {
  var x = document.getElementById("login-form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
function regscreen() {
  var x = document.getElementById("reg-form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
 
  function ani(){
    document.getElementById("login-form").style.WebkitAnimationPlayState = "running";
     
  }
  function ani1(){
    document.getElementById("reg-form").style.WebkitAnimationPlayState = "running";}

/*function nav() {
var x = document.getElementById("navbutu");
if (x.style.display === "none"){x.style.display = "block",
 function klik obok(x.style.display = 'none',
 x = document.getElementById("navbutu");
){document.onclick = function(e){ if(e.target.id !== "x"){x.style.display = 'none'} } }
}
else   {x.style.display = "none"}
}





*/
/*



window.onload = function(){ var navbutu = document.getElementById('navbutu'); document.onclick = function(e){ if(e.target.id !== "navbutu"){  navbutu.style.display = 'none'; } }; };




function e(){{
var x = document.getElementById("navbutu");
document.onclick = "target";}
if ("target" !=== x){
{x.style.display  = "none"}
;}
}


document.getElementById("myBtn").onclick = function() {myFunction()};

 myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

*/
