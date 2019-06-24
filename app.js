const QRReader = require('qrcode-reader');
const fs = require('fs');
const jimp = require('jimp');

run().catch(error => console.error(error.stack));

//Read QR from folder QR-Picture
async function run() {
    //paste picture has QR in this folder
  const img = await jimp.read(fs.readFileSync('./QR-Picture/qr.png'));

  const qr = new QRReader();

  // QRCodeReader's API doesn't support promises, so wrap it
  const value = await new Promise((resolve, reject) => {
    qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
    qr.decode(img.bitmap);
  });

  console.log(value);
  console.log(value.result);
}