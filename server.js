let engine=document.getElementById("engine")
let phpaction=document.getElementById("phpaction")

let google=document.getElementById("google");
let bing=document.getElementById("bing");
let duckduckgo=document.getElementById("duckduckgo");
let searchencrypt=document.getElementById("searchencrypt");



google.addEventListener("click",function(){
    engine.innerHTML=google.innerHTML;
    phpaction.setAttribute("action","https://www.google.com/search")
})

bing.addEventListener("click",function(){
    engine.innerHTML=bing.innerHTML;
    phpaction.setAttribute("action","https://www.bing.com/search")
})

duckduckgo.addEventListener("click",function(){
    engine.innerHTML=duckduckgo.innerHTML;
    phpaction.setAttribute("action","https://duckduckgo.com/")
})

searchencrypt.addEventListener("click",function(){
    engine.innerHTML=searchencrypt.innerHTML;
    phpaction.setAttribute("action","https://www.searchencrypt.com/search/")
})


//clock 


function currentTime() {
    let date = new Date(); /* creating object of Date class */
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hello=document.getElementById("hello")
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
      let t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
      if(hour<12 && hour>=5){
        hello.innerHTML="Good Morning"
      }
      else if(hour<18 && hour>=12)
      hello.innerHTML="Good Afternoon"
      else if(hour>=0 && hour<5 )
      hello.innerHTML="Stop wroking and go to sleep";
      else
      hello.innerHTML="Good Evening"
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */

//   let curday = function(sp){
//     today = new Date();
//     let dd = today.getDate();
//     let mm = today.getMonth()+1; //As January is 0.
//     let yyyy = today.getFullYear();
    
//     if(dd<10) dd='0'+dd;
//     if(mm<10) mm='0'+mm;
//     return (mm+sp+dd+sp+yyyy);
//     };

// document.getElementById("day").innerHTML=curday("-")
let quotes=document.getElementById("quotes")

fetch("https://type.fit/api/quotes")
.then(response => {
	return response.json();
})
.then(data=>{
  console.log(data.length)
  quotes.innerHTML=data[parseInt(Math.random()*data.length)].text})
.catch(err => {
	console.log(err);
});

