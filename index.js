 console.log("hey you")
 document.write("write on the page")
 console.warn("don't do that")

// // Numbers
// var number1=34;
// var number2=36;


// // strings are inside quotation
// // if you want to add two SVGStringList, those will concatenate
// var result=number1+number2;
// console.log(result);


// // javascript object
 var marksClass5={
     Apurba:1,
     Soubhik:16,
     Preetam:12,
     Rajkumar:14
 }

 console.log(marksClass5)
console.log(typeof(marksClass5))


// // Booleans
 var a=true;
 var b=false;
 console.log(a +"," +b)

 var Z
 console.log(Z)

// // Main two types of Javascript
// 1.Primitive: undefined,null,number,string,boolean,symbol(will read it later)
// 2.Reference data types: Oobjects,Arrays

// // Arrays
// var numbers=[2,3,4,5,6]
// console.log(numbers)

// functions : take two user input from the user and calculate the average

// a=prompt("enter a number");
// b=prompt("enter another number");
// var a1 = parseInt(a);
// var b1 = parseInt(b);
// function avg(a1,b1){
//     c=((a1+b1)/2);
//     return c;
// }
// c1=avg(a1,b1);
// console.log (c1)


// var arr = [4, 3, 5, 6, 7, 9, 10, 11, 122, 2]
// // console.log(arr)

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


// arr.forEach(function(element){console.log(element)

// })

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }


// let i=0;
// do{
//     console.log(arr[i]);
//     i++;
// }while(i<arr.length);

// let myArr=["Fan","Apu", "Dslr","34B",null,true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("ullu");


// myArr.shift();
// console.log(myArr.unshift("ullu ke patthe"))
// console.log(myArr);

// Read about array methods in js
// let lowlyString="Apurba will be a billionaire";
// newString=lowlyString.replace("billionaire","multibllionaire");
// console.log(newString);
// let myDate=new Date();
// console.log(myDate)
// console.log(myDate.getHours());


// Dom manipulation
// let elem=document.getElementById('click')
// console.log(elem)

// let elemClass=document.getElementsByClassName('container')
// console.log(elemClass)
// // elemClass[0].style.background="yellow"
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerTEXT);
// tn=document.getElementsByTagName('div')
// console.log(tn)
// createdElement=document.createElement('p')
// createdElement.innerText="'This is a created para'"
// tn[0].appendChild(createdElement);


// in button onclick=clicked(); called the clicked() function
// there are other methods like onmouseover onmouseout
// function clicked(){
//     console.log("the button was clicked");
// }

// // window.onload=function(){
// //     console.log('the doc was loaded')
// // }
// document.getElementById("firstContainer").style.backgroundColor="blue"

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container'[1].innerHTML)="<b> We have clicked </b>"
//     console.log("click hua bhai")
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("you touched me")
// })

// // there are tons of events

// firstContainer.addEventListener('mouseup',function(){
//     console.log("mouse is up ")
// })


// arrow function

// function sum(a,b){
//     return 5;
// }

// sum=(a,b)=>{
//     return a+b;  we can use this format very easily in middle of  code 
// }

// setTimeout (it schedules things to happen by the function)

// logFunction= ()=> {
//     // document.querySelectorAll('.container'[1].innerHTML= " <b> set interval fired </b> ";
//     console.log("I am your log");
// }
// setTimeout(logFunction,2000); will show in console after 2 secs
// clr=setInterval(logFunction,2000);    when you want to do something repeatedly
// when you need to stop this you have to run clearInterval(clr) in the console


// Creating Json string to transfer datas
obj= {name:"Apurba", length:1, a:{this:"that"}}
jso=JSON.stringify(obj);
console.log(jso)

parsed=JSON.parse(`{"name":"Apurba","length":1,"a":{"this":"that"}}`)
console.log(parsed);






//Some important DOM manipulation concepts

 tn=document.getElementsByTagName('div')    //storing elements from div into tn
 console.log(tn);   //printing the tn
 createdElement=document.createElement('p')        //creating a para inside div
 createdElement.innerText="This is a created paragraph";    // changing the innerText
 tn[0].appendChild(createdElement)       //making a child in tn[0]

 tn[0].replaceChild(createdElement2,createdElement); //this will replace createdElement to createdElement2 if we have a createdElement2
 removeChild(element); --->removes an element


// selecting using query
sel=document.querySelector('.container') //it will return only the 1st element you can use querySelectorAll for selecting all
console.log(sel)




//Events in JS
//we can write inside the html tag that onclick=clicked() the in JS 

 function clicked(){
     console.log("the button was clicked")
 }

//events: onmouseover, onmousedown, onmousemove
 window.onload=function(){
     document.querySelectorAll('.container')[1].innerHTML=<b>we have clicked</b>
     console.log('the document was loaded')   //will show when the page reloads
 }
let prevHTML=document.querySelectorAll('.container')[1].innerHTML; //saving the prev text inside a string
firstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b>" //this will change the [1th/2nd] paragraph of container after clicking on the button
    console.log("down hua bhai")      //we can add eventListeners this way x.addevntlstr('click',what we want to perform through a function)
}) 
firstContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevHTML; 
    console.log("mouse hata liya bhai")      
})


 firstContainer.addEventListener('mouseover',function(){
     console.log("you touched the container")      //we can add eventListeners this way x.addevntlstr('click',what we want to perform through a function)
 }) 





//Arrow functions
   function summ(a,b){
       return a+b;
   }

  summ=(a,b)=>{
      return a+b;  //we can add ()=>{action} inside anything easily
      }


// setTimeout and setInterval

logKaro=()=>{
    console.log("you logged in")
}

setInterval/setTimeout(logKaro,2000);



// const numbers=[2,3,4,5,6,7,8,9,11,22,32,43]

// const doubles=numbers.map(function(num){
//     return num*2
// })


// Map and Callback functions
// const movies = [
//     { title: 'abc', duration: 110 }, { title: 'abc', duration: 110 }, { title: 'abc', duration: 110 }, { title: 'abc', duration: 110 }, { title: 'abc', duration: 110 }, { title: 'abc', duration: 110 }
// ]
// const titles=movies.map(function(movie){
//     return movie.title
// })


// Filter

// let nums=[9,7,5,8,9,11,91,19]
// let odds=nums.filter(n=>{
//     return n%2===1;
// })

//Every and Some
// scores=[70,71,73,74,88,90,89,999]
// scores.every(score =>score>=70)

//Reduce function

//summation w/o reduce
const prices=[9.99,9.88,5.44,7.88,9.90];
// let total=0;
//  for (let i=0;i<prices.length;i++){
//      total+=prices[i]
//  }
//  console.log(total)

 //with reduce function
//  const total=prices.reduce((total,price)=> {return total+price})

//finding lowest number with the help of reduce function

const min=prices.reduce((min,price)=>{
    if  (price<min){
        return price;
    }return min;
    
})



//Default Parameters(10.9.2021) //would take the default value if the param is not given
 function multiply(a,b){
     b(typeof b!=='undefined')? b:1
     return a*b
 }

// multiply(5,2) //10
// multiply(5) //5


function multiply(a,b=1){
    return a*b
}


//Spread in function calls
nums=[2,1,1,11,333,444,43,5555555,67,48]
console.log(Math.max(nums));    //it will print NaN because that function cant take the array
console.log(Math.max(...nums))  //here spreading the array



//Dom Manipulation 11/09/21

//getElementById returns only one method
//selecting img tag and consoling all the sorces on the console
const allImages = document.getElementsByTagName('img'); //saving in a html collections

for (let img of allImages) {
    console.log(img.src)  //(we can change img source from here also)
}



//selecting by the name of the classes
const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}



//querySelector
document.querySelector('.square')

//querySelectorAll it returns collection of elements(all the matching)

const links=document.querySelectorAll('p a')
for (link of links){
    console.log(link.href)
}


// innerHTML,innerText,textContent

const h1=document.querySelector('h1')
console.dir(h1) //it will show me all the details and contains about h1
//from that we can find innerText, innerHTML,textContent etc
//we can also do
 document.querySelector('h1').innerHTML


 //changing the links
const allLinks=document.querySelectorAll('a')
for (let link of allLinks){
    link.innerText="I am the new link"
}




//Event reference from MDN (read)
const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;


document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

// const btn3=document.querySelector('#v3')
// btn3.addEventListener('click',function(){
//     alert("clicked!")
// })
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})


// here below we made the function first( twist and shout)
function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas'); //here we selected using querySelector


//here we are calling the functions
// tasButton.onclick = twist;
// tasButton.onclick = shout;


//here we are doing the same thing using addEventListener
tasButton.addEventListener('click', twist,{once:true} //we can add to call only once )
tasButton.addEventListener('click', shout)


// Make Random color project
// index.html
<body>
    <h1>Welcome!</h1>  //this text will change into rgb values once clicked
    <button>Click Me</button>

    <script src="app.js"></script>
</body>

// app.js
const button=document.querySelector('button')
const h1=document.querySelector('h1')

button.addEventListener('click',function(){
    const newColor=randColor();
    document.body.style.backgroundColor=newColor;
    h1.innerText=randColor();
})

const randColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}


//Random colored buttons and texts in those buttons

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}



//Keyboard Events
document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})   //event object that is automatically passed in, we are capturing that using evt, here it's mouseEvent,
 //all the informations related to the event are getting printed




const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {  //e is the event object
    console.log(e.key) //here we are adding keyboard event Object
    console.log(e.code)
})
input.addEventListener('keyup', function () {
    console.log("KEYUP")
})

//We have access to every event object which is passed in automatically,we can add a parameter to capture it ex: e,evt,event. It contains details about the event, properties and all
//for arrow keys, we have a key(the letter itself) and a code(corresponds to an actual location on the keyboard,an actual little physical key) 
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("up!!");
            break;
        case 'ArrowDown':
            console.log("down!!");
            break;
        case 'ArrowRight':
            console.log("right!!");
            break;
        case 'ArrowLeft':
            console.log("left!!");
            break;
        default:
            console.log("ignored!!");

    }
})



// Tweeting and storing in a list

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault(); //without this the page will try to take me to the next default page,it's preventing the default form behavior

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

what i am gonna do is , will take the tweet from the form and will save them inside the <li> down below
const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

//change color after 1sec of the page(using callbacks)
const delayedColorChange=(newColor,delay,doNext)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor=newColor;
        doNext && doNext();
    },delay)
}

delayedColorChange('olive',1000,()=>{
    delayedColorChange('red',1000,()=>{
        delayedColorChange('blue',1000,()=>{
            delayedColorChange('yellow',1000,()=>{
                delayedColorChange('violet',1000,()=>{
        
                })
        
            })
        
        })
    })
})



//calling APIs and trying to do callback hell
searchMoviesAPI('Jurrassic',()=>{
    saveToMyDB(movies,()=>{
        //if it works,run this:
    },()=>{
        //if it doesn't work,run this:
    })

},()=>{
    //if API is down or request failed
})
