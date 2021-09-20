//here we are importing through require through reffering the path
const math=require('./math')
console.log(math.PI);
console.log(math.square(3))



//here importing the whole repo
const cats=require('./shelter')
console.log('required an entire directory!!',cats);