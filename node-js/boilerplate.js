//creating folder, files throug the script
const fs=require('fs');

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
fs.mkdir('dogs', { recursive: true }, (err) => {
    console.log('in the callback'); //when the mkdir will be finished then the callback will be run
  if (err) throw err;               //because this is asynchronus
});
console.log("After the callback");



//here is the synchronus version of the same
FileSystem.mkdirSync('cats')
console.log('I come after mkdir in the file');


//Project folder
const fs=require('fs');
const folderName=process.argv[2]||'Project'

try{
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/style.css`)
}
catch(e){
    console.log("something went wrong");
    console.log("e");
}