window.onload = function () {
	var select =document.getElementById("year");
	select.addEventListener("change", function(event){;
		var remove = document.getElementsByClassName("screen")
		 for(var i=0 ; i<remove.length ; i++) {
			remove[i].classList.remove("is-actived");
      		}

		var year = this.value;
		if (year=="ichiran") {
			year = "2014";
		};
		var test = document.getElementById("douga"+year);
		test.classList.add("is-actived");

	});
};
