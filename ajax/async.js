// synchronus vs asynchronus
// in asynchronus, many things can happen at a same time
//in synchronus one thing can only happen after a particular thing is done
//as I know JS is a synchronus single threaded language

//in js we can perform Async functionalities using these words
//async/await, callback, promises


console.log("AJAX is live ");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('you have clicked the fetchBtn');

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', 'apurba.txt', true);  //this takes 3 argument, true means its async operation

    //what to do on progress(optional)
    xhr.onprogress = function () {
        console.log('on progress');
    }
    //what to do when response is ready
    xhr.onload = function () {
        console.log(this.responseText);
    }

    //send the request
    xhr.send();

}