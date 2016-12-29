/** See jcrew website for available size options.
 	Alter pants_size, shorts_size, shirt_size, shoe_size and auto_buy 
 	to suit your preferences.
**/

// Choose pants size of form "length/width"
var pants_size = "31/32";
// Choose shorts size of form "width"
var shorts_size = "31";
// Choose shirt size of form "SIZE"
var shirt_size = "MEDIUM";
// Choose shoe size of form "# SIZE"
var shoe_size = "10H MEDIUM"
// Option to automatically add to shopping bag 
var autoBuy = false; 

var desired_sizes = [pants_size, shirt_size, shorts_size, shoe_size];

function setSize() {
	var availableSizes=document.getElementsByClassName("size-box");
	function findAndSetSize() {
		for (var i=0; i<availableSizes.length; i++){
			if(desired_sizes.indexOf(availableSizes[i].getAttribute("data-size")) != -1) {
				availableSizes[i].className += " selected";
				console.log("selected")
			}
		}
	}
	if(availableSizes != undefined) {
	    findAndSetSize();
	    if(autoBuy == true) {
	    	document.getElementsByClassName("pdp-bag-button")[0].click();
	    }
	} else {
	    setTimeout("setSize()", 250);
	}
}

// Execute code once page has loaded
var loadfunction = window.onload;
window.onload = function(event){
	setTimeout("setSize()", 250);
    if(loadfunction) loadfunction(event);
}
