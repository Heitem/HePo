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

   $(document).ready(function(){
 
  // hide our element on page load
  $('.text .container').css('opacity', 0);
  $('.competences .container').css('opacity', 0);
  $('.diplomes .container').css('opacity', 0);
  $('.gallery .container').css('opacity', 0);
  $('.contact .container').css('opacity', 0);
  $('.map').css('opacity', 0);
 
  $('.text .container').waypoint(function() {
      $('.text .container').addClass('fadeInLeft');
  }, { offset: '70%' });

  $('.competences .container').waypoint(function() {
      $('.competences .container').addClass('fadeInRight');
  }, { offset: '70%' });

  $('.diplomes .container').waypoint(function() {
      $('.diplomes .container').addClass('fadeInDown');
  }, { offset: '70%' });

  $('.gallery .container').waypoint(function() {
      $('.gallery .container').addClass('fadeInRight');
  }, { offset: '70%' });

  $('.contact .container').waypoint(function() {
      $('.contact .container').addClass('rollIn');
  }, { offset: '70%' });

  $('.map').waypoint(function() {
      $('.map').addClass('fadeIn');
  }, { offset: '70%' });

  
//   $('.competences .container').css('opacity', 1);
//   $('.contact .container').css('opacity', 1);
 
});