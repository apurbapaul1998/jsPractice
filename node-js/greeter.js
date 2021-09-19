//In commandLine\\
//touch greeter.js
//node greeter.js Aluu chotoMini

const args=process.argv.slice(2);
for(let arg of args){
    console.log(`Hi there,${arg}`)
}