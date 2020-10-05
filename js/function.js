function showBigger(e) {
  var img = e.srcElement;
  var origImg = document.createElement('img');
  origImg.src = img.src;
  origImg.style.width = "600px";
  origImg.style.height = "400px";
  origImg.style.position = "absolute";
  origImg.style.zIncex = "999";
  origImg.style.left = e.clientX;
  origImg.style.top = e.clientY;
  origImg.id = "original";

  document.body.appendChild(origImg);

}
function removeoriginalPhoto() {
  document.body.removeChild(document.getElementById('original'));
}
