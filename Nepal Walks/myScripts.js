
function myFunction() {
    document.getElementById("demo1").innerHTML = "Thank you for clicking";
    document.getElementById("demo2").innerHTML = "Now move on";
}


function scrollHeader() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   		 document.getElementById("headerBar").className = "scrolledHeader";
	    } else {
        document.getElementById("headerBar").className = "";
    }
}