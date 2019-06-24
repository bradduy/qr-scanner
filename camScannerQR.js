let scanner = new Instascan.Scanner({ video: document.getElementById('camera-content') });

scanner.addListener('scan', function (content) {
    document.getElementById("qr-content").innerHTML = content;
    document.getElementById("author-signature").innerHTML = 'Made by Brad Duy!<br>Hope you guys have fun!';
});
Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    scanner.start(cameras[0]);
  } else {
    console.error('Cannot find camera!');
  }
}).catch(function (e) {
  console.error(e);
});