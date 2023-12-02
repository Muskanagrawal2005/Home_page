var randompic = document.getElementById("back");
var images = ["b1.jpg", "b2.jpg", "b3.jpg", "b4.jpg", "b5.jpg"]
var imgcount = images.length
var number = Math.floor(Math.random() * imgcount);


window.onload= function () {
    randompic.style.backgroundImage = 'url("' + images[number] + '")';
    randompic.style.backgroundPosition = "center center";
    randompic.style.backgroundAttachment="fixed";
    randompic.style.backgroundRepeat = 'no-repeat';
    randompic.style.backgroundSize = "cover";
    randompic.style.height = "100%";
}
