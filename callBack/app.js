// function fun1() {
//     console.log(“Code With Harry”);
// }
// function fun2() {
//     console.log(“JavaScript Tutorial”);
// }
// first();
// second();

//  The function fun1 is executed first, and the function fun2 is executed second.
//  JavaScript runs code from top to bottom.However, there are some cases that code must run after something else happens and also not using
//   a top - down approach.

// Callbacks are used to make sure that a function is not 
// going to execute before a task is completed but will execute right after the task has completed.
// It helps us develop asynchronous JavaScript code and keeps us safe from future errors.

// In JavaScript, the way to create a callback function is to pass it as a parameter to another function, 
// and then to call it back right after something has happened or some task is completed.

// How to create a Callback:-

// function myMessage (str) {
//     setTimeout(() => {
//         // script to download the picture here
//         console.log(`Code With Harry`);
//     }, 5000);
// }
// There is a built-in method called “setTimeout”, which calls a function after a given period of time. 
// So here, the myMessage function is being called after 5 seconds. (1 second = 1000 milliseconds). 
// In other words, the myMessage function is being called after something happened (after 5 seconds passed for this example), 
// but not before. So, the myMessage function is an example of a callback function.

// function addition(x, y , callback){
//     setTimeout(() => {
//     document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
//     callback(); 
//      }, 5000); } 
//      // display() function is called just after the ending of addition() function
//     function display(){ 
//     document.write('Numbers added!'); 
//      } 
//      // Calling addition() function
//     addition(5,5,display);

//     Here are the two functions – addition(x, y, callback) and display(). 
//     Here addition() is called after 5 seconds with the display() function,
//      i.e. passed in as the third argument to the addition function along with two numbers x and y.
//       As a result, the addition() is invoked with 1, 2 and the display() which is the callback. 
//       The addition() prints the addition of the two numbers(x+y), and as soon as that is done, the callback function is executed. 

