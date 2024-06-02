/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer.prompt([
    {
        message:"Enter a URL: ",
        name:"URL",
    }
    ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('image_qr.png'));
    fs.writeFile('image.txt', url, (err)=>{
        if(err) throw err;
        console.log("image saved succesfully");
     });
    })
  .catch((error) => {
    if (error.isTtyError) {
        throw error;
        } else {
         console.log("Something went wrong");
    }
  });
 