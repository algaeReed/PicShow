// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const electron = require("electron");
const fs = require("fs");
const base64Img = require('base64-img');

const dragwrappet = document.getElementById("drag");


dragwrappet.addEventListener("drop",(e)=>{
  e.preventDefault();
  const files = e.dataTransfer.files;
  if(files && files.length > 0){
    const path = files[0].path; 
    console.log('path:',path);
    const content = fs.readFileSync(path);
    // console.log(content.toString());
    console.log(content);

    const imgData = base64Img.base64Sync(path);
    console.log("imgData:",imgData);
    document.querySelector(`img`).src = imgData;
  }
})

dragwrappet.addEventListener("dragover",(e)=>{
  e.preventDefault();
}),

function gehh(){
  console.log(document.body.offsetWidth);
}
gehh();

