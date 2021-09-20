//creating two js files\\
//math.js and app.js\\
//will export three properties from math.js to app.js\\


module.exports.add=(x,y)=>x+y;
module.exports.PI=3.14159;
module.exports.square=x=>x*x;

//we can export differently
// module.exports.add=add; //like this
// module.exports.PI=PI;
//or we can just add those module.exports befor the var declaration
