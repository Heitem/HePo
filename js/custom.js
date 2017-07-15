var today = new Date();
var date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();

function calculateAge (birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() || 
        otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}

var t1 = document.querySelector(".lead");
t1.innerText += " " + calculateAge("07/30/1993", date) + " ans.";

$( document ).ready(function() {
	$("#android-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 90,
            iconColor: '#10394B',
            foregroundColor: '#10394B',
            fontColor: '#10394B',
            showPercent: true,
            text: 'Android',
            textBelow: true,
            textColor: '#10394B'
           });
   });

   $( document ).ready(function() {
	$("#ios-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 40,
            iconColor: '#10394B',
            foregroundColor: '#10394B',
            fontColor: '#10394B',
            showPercent: true,
            text: 'iOS',
            textBelow: true,
            textColor: '#10394B'
           });
   });

   $( document ).ready(function() {
	$("#ionic-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 70,
            iconColor: '#10394B',
            foregroundColor: '#10394B',
            fontColor: '#10394B',
            showPercent: true,
            text: 'Ionic Framework',
            textBelow: true,
            textColor: '#10394B'
           });
   });

   $( document ).ready(function() {
	$("#cordova-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 60,
            iconColor: '#10394B',
            foregroundColor: '#10394B',
            fontColor: '#10394B',
            showPercent: true,
            text: 'Cordova',
            textBelow: true,
            textColor: '#10394B'
           });
   });

   $( document ).ready(function() {
	$("#angular-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 40,
            iconColor: '#10394B',
            foregroundColor: '#10394B',
            fontColor: '#10394B',
            showPercent: true,
            text: 'Angular 4',
            textBelow: true,
            textColor: '#10394B'
           });
   });

   $( document ).ready(function() {
	$("#java-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 80,
            iconColor: '#10394B',
            foregroundColor: '#10394B',
            fontColor: '#10394B',
            showPercent: true,
            text: 'Java',
            textBelow: true,
            textColor: '#10394B'
           });
   });