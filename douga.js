var KEY = "apiキー"
 
function getJSON(url,callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
 
    request.onload = function() {
      if (request.status >= 200 && request.status < 400){
        // Success!
        data = JSON.parse(request.responseText);
        callback(data);
      } else {
        console.log("error!");
      }
    };
 
    request.onerror = function() {
      console.log("error!");
    };
 
    request.send();
    console.log(data)
}
 
 

function getMovies(data) {
    var id = data.items[0].id;
    getJSON("https://www.googleapis.com/youtube/v3/search?part=id&type=video&channelId="+id+"&key="+KEY,function(data){
        videos = data.items;
        var output = "";
        for (var i=0 ; i<videos.length ; i++) {
            output += '<iframe width="560" height="315" src="http://www.youtube.com/embed/'+videos[i].id.videoId+'" frameborder="0" allowfullscreen></iframe>'
        };
        document.getElementById("movies").innerHTML = output;
    });
}
 

document.addEventListener('DOMContentLoaded', function(){
    getJSON("https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=FREEDIVISIONweb&key="+KEY,getMovies);
 
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
})

function hoge(arg) {
    console.log("argument:"+arg);
    return "hoge!!!!";
}
 
function piyo() {
    return 2;
}