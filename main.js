
const canvas = document.getElementById('canvas');
const ctx = canvas.msGetInputContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const downloadBtn = document.getElementById('upload-file');
const downloadBtn = document.getElementById('revert-btn');

//TODO Filters

//Upload File
UploadFile.addEventListener('change', (e) => {
    //Get File
    const file = document.getElementById('upload-file').files[0];
    
    //Init FileReader
    const reader = new FileReader();

    if(file) {
        //Set file name
        fileName = file.name;
        //Read data as URL
        reader.readAsDataURL(file);
    }

    //Add image to canvas
    reader.addEventListener('load', () => {
    //Create Img
        img = new Image();
        //Set src
        img.src = reader.result;
        //On image load, add to canvas
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute('data-caman-id'); 
        }

    }, false);
});
