var tabs = document.getElementById('icetab-container').children;
var tabcontents = document.getElementById('icetab-content').children;

var myFunction = function() {
	var tabchange = this.mynum;
	for(var int=0;int<tabcontents.length;int++){
		tabcontents[int].className = ' tabcontent';
		tabs[int].className = ' icetab';
	}
	tabcontents[tabchange].classList.add('tab-active');
	this.classList.add('current-tab');
}


for(var index=0;index<tabs.length;index++){
	tabs[index].mynum=index;
	tabs[index].addEventListener('click', myFunction, false);
}

document.getElementById('submit').addEventListener('click',function(){alert(" Submitted! Good job!")})
// document.getElementById('submit2').addEventListener('click',function(){alert(" That's it! Keep working!")})

var x1 = document.getElementById("c1").checked;
var x2 = document.getElementById("c2").checked;
var x3 = document.getElementById("c3").checked;
var x4 = document.getElementById("c4").checked;
var x5 = document.getElementById("c5").checked;


document.getElementById('submit2').addEventListener('click',function(){
	if(x1)
	{alert(" That's it! Keep working!")}
	else
	{alert(" There's something else! Try again!")}})
