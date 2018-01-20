var renew = document.querySelector('#renew');
var tweetQuote = document.querySelector('#tweetQuote');


var currentQuote, currentAuthor, currentTweet;
// var loren = document.querySelector('#loren');



//getNew runs two other Fns: setColors and setCurQuote
var getNew = function(){
	setCurQuote();
	console.log('Fx getNew called setCurQuote(); VAR CurrentQuote now set to:'+currentQuote);
	setColors();
	console.log('Fx setColors() called by getNew');
}

// var tweetIt = function(){
// 	console.log('VAR tweetIt invoked. Now calling Fx tweetIt()...');
// 	tweetIt();
// 	console.log('Fx tweetIt completed');
// }

//- - Fn SetColors - - randomizes and sets bg and quoteBox colors
function setColors(){
	console.log('Fx setColors() invoked...');
	var colors = [//bg-color,color
		['#CAB9EE','#FFF646'],
		['#553A90','#D3BF47'],
		['#8B8991','#D3D1C6'],
		['#FFE26B','#7463CA'],
		['#6659A0','#E8D172'],
		['#706C83','#BDB697'],
		['#FFC973','#5479A9'],
		['#FF7373','#5CCD5C'],
		['#CF5D9B','#C1EE6B'],
		['#FE259C','#9EF200']
	];
	var randomizeC = colors[Math.floor(Math.random()*colors.length)];
	var body = document.querySelector('body');
	var quoteBox = document.querySelector('#quoteBox');
	body.style.backgroundColor = randomizeC[0];
	quoteBox.style.backgroundColor = randomizeC[1];
	body.style.color = randomizeC[0];
	console.log('Fx setColors now completed');
}

//- - Fn setCurQuote - -randomizes and sets current author, quote AND * * currentTweet * *
function setCurQuote(){
	console.log('Fx setCurQuote() invoked...');
	var qbQuote = document.querySelector('div.quote');
	var qbAuthor = document.querySelector('div.author');
	var quotes = [
		['Oh, my - Coding is a lot of fun!','Eve RèWôn'],
		['You can call me anything, except "late for dinner."','Yur Dad'],
		['Ohhhh!!','Jackie Oh.'],
		['Heyy, Heeyy, Heeyyyy!!','F. Albert'],
		['Fa Ra Ra Ra Ra, Ra Ra, Ra, Ra!','Chris M\'Scarol'],
		['The most secure code in the world is code which is never written.','Colin Percival'],
		['Some like it hot, when the heat is on...','R. Palmer'],
		['Hap-py Birth-day, Miss-terr Prezz-i-dent...','M. Monroe'],
		["She licked me like a lollypop.","lil Weezy"],
		['First do it, then do it right, then do it better.','Addy Osmani'],
		["Dis is getting old...","E. Nuff with L. Reddy"],
		["Read my lips: NO NEW TAXES.","\"H.W. \"Bush"],
		["When you find yourself unfocused,\nmake a list of things you want done tomorrow,\nand note which of those rely\non what you get done today.","Saron \[para.\] (twitter: @saronyitbarek)"],
		["The best programs are the ones written when the programmer is supposed to be working on something else.","Melinda Varian"],
		["Rules of Optimization:\nRule 1: Don't do it.\nRule 2 (for experts only): Don't do it yet.","Michael A. Jackson"],
		["Computers are good at following instructions, but not at reading your mind.","Donald Knuth"],
		["When in doubt, use brute force.","Ken Thompson"],
		["There's nothing more permanent than a temporary hack.","Kyle Simpson"]
	];
	var randomizeQ = quotes[Math.floor(Math.random()*quotes.length)];
	currentQuote = randomizeQ[0];
	currentAuthor = randomizeQ[1];
	qbQuote.innerText= currentQuote;
	qbAuthor.innerText= " - "+currentAuthor;
	currentTweet = currentQuote+" -"+currentAuthor;
	console.log('setCurQuote now completed');
}

function tweetIt(){
	console.log('Fx tweetIt() invoked...');
	$("#tweetQuote").html("<a href='https://twitter.com/intent/tweet?text="+currentTweet+"&via=lorenmcclaflin&url=https%3A%2F%2Fcodepen.io%2FMozillex%2Ffull%2FqpoQpG&2F&hashtags=100DaysOfCode,freeCodeCamp,SCCodes&related=@lorenmcclaflin,@sc_codes,@freecodecamp'><i class='fab fa-twitter-square'></i></a>");
	console.log('Fx tweetIt now comleted.');
}


//getNew();
//tweetIt();



// and, add these event listeners once the document has loaded...
$(document).ready(function(){
	console.log('Document now ready; calling Fx getNew()...');
	getNew();
	renew.addEventListener('click',getNew);
	console.log('Fx getNew completed and event listener added to  "renew" button.');
	tweetQuote.innerHTML = "<a href='https://twitter.com/intent/tweet?text="+currentTweet+"&via=lorenmcclaflin&url=https%3A%2F%2Fcodepen.io%2FMozillex%2Ffull%2FqpoQpG&2F&hashtags=100DaysOfCode,freeCodeCamp,SCCodes&related=@lorenmcclaflin,@sc_codes,@freecodecamp'><i class='fab fa-twitter-square'></i></a>";
	console.log("added innerHTML to ID tweetQuote.");



	tweetQuote.addEventListener('click',tweetIt);
	console.log('Event listeners addition has completed.');
	$("#loren").fadeIn(500).delay(2000).animate({fontSize: "0.8rem",opacity:".5"},1500).animate({fontSize: "0.5rem",opacity:"1"}, 1000);
	console.log('All doc.ready operations completed.');

});
