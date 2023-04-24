// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 1
// Author: Le Viet Bao
// ID: s3979654
// Acknowledgement: 
// https://bookshop.org/
// https://www.youtube.com/watch?v=bk3Y4heVdFs&ab_channel=Mr.WebDesigner
// https://www.youtube.com/watch?v=yQimoqo0-7g&t=2s&ab_channel=EasyTutorials
// https://www.30secondsofcode.org/css/s/hover-underline-animation/


// js for product gallery
var productImg = document.getElementById('productImg');
var smallImg = document.getElementsByClassName('small-img');
smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
}



