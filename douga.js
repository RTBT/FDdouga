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
   
}



function getMovies(data) {
    var id = data.items[0].id;
    getJSON("https://www.googleapis.com/youtube/v3/search?order=date&maxResults=30&part=snippet&type=video&channelId="+id+"&key="+KEY,function(data){        
        var videos = data.items;
        console.log(videos);
        var output = "";
        var output2013 = "";
        var output2012 = "";
	        for (var i=0 ; i<videos.length ; i++) {
	            var date = videos[i].snippet.publishedAt;
	            
	            idx = date.indexOf("2014");
	            if (idx>=0) {
	            output += '<iframe width="560" height="315" src="http://www.youtube.com/embed/'+videos[i].id.videoId+'" frameborder="0" allowfullscreen></iframe>'
	        };
	       
	        document.getElementById("douga2014").innerHTML = output;
	     };

	        for (var i=0 ; i<videos.length ; i++) {
	            var date = videos[i].snippet.publishedAt;
	            idx = date.indexOf("2013");
	            if (idx>=0) {
	            output2013 += '<iframe width="560" height="315" src="http://www.youtube.com/embed/'+videos[i].id.videoId+'" frameborder="0" allowfullscreen></iframe>'
	        };
	       
	        document.getElementById("douga2013").innerHTML = output2013;
	     };
	for (var i=0 ; i<videos.length ; i++) {
		            var date = videos[i].snippet.publishedAt;
		            idx = date.indexOf("2012");
		            if (idx>=0) {
		            output2012 += '<iframe width="560" height="315" src="http://www.youtube.com/embed/'+videos[i].id.videoId+'" frameborder="0" allowfullscreen></iframe>'
		        };
		       
		        document.getElementById("douga2012").innerHTML = output2012;
		     };
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

