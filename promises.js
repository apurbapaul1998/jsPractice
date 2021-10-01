//


function func1(){  //func1 does the promise to do a thing
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error=true;
            if(!error){  // would check with the error code
            console.log('function:your promise has been resolved'); 
            resolve();
            }
            else{
                console.log('function:your promise has not been rsolved');
                reject('sorry not fulfilled')
            }
        },2000);
    })
}

func1().then(function(){
    console.log("Apurba: thanks for resolving");  //if func1 does what he promised
}).catch(function(error){
    console.log('Apurba:very bad bro!!'+error);  //if func1 doesnt do then it's under catch
})