import fs from 'fs';
import qr from "qr-image-color";
import inquirer from "inquirer";
import { url } from 'inspector';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import  Express from "express";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = Express();
const port =3000;


app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.post('/submit', (req, res) => {
  console.log(req.body.url);
  console.log(req.body.color);
  var qr_png= qr.imageSync(`${req.body.url}`, { type: 'png', color: `${req.body.color}`, transparent: true });
  fs.writeFileSync(`qrcode.png`, qr_png);
  console.log('QR code generated successfully!');
  res.sendFile(__dirname + '/qrcode.png');


  // var qr_png= qr.imageSync(`${req.body.url}`, { type: 'png', color: `${req.body.color}`, transparent: true });
  // fs.writeFileSync(`qrcode.png`, qr_png);
  //  console.log('QR code generated successfully!');
   
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});




// inquirer.prompt([
//     {
//         type: "input",
//         message: "Enter your text",
        
//         name: "url",

//     },
//     {
//         type: "input",
//         message: "Enter your color",
//         name: "color",

//     }
// ]).then((answers) => {
//     var qr_png= qr.imageSync(`${answers.url}`, { type: 'png', color: `${answers.color}`, transparent: true });
//     fs.writeFileSync(`${answers.url}.png`, qr_png);
//     console.log('QR code generated successfully!');
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
