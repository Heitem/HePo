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

   $(document).ready(function(){

    var i = 0;
 
  // hide our element on page load
  $('.text .container').css('opacity', 0);
  $('.competences .container').css('opacity', 0);
  $('.diplomes .container').css('opacity', 0);
  $('.gallery .container').css('opacity', 0);
  $('.contact .container').css('opacity', 0);
//   $('.map').css('opacity', 0);
 
  $('.text .container').waypoint(function() {
      $('.text .container').addClass('fadeInLeft');
  }, { offset: '70%' });

  $('.competences .container').waypoint(function() {
      $('.competences .container').addClass('fadeIn');
      
      if(i < 1){
          
      $("#android-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 90,
            iconColor: '#69C2E4',
            foregroundColor: '#69C2E4',
            fontColor: '#69C2E4',
            showPercent: true,
            text: 'Android',
            textBelow: true,
            textColor: '#69C2E4'
           });

        $("#ios-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 50,
            iconColor: '#69C2E4',
            foregroundColor: '#69C2E4',
            fontColor: '#69C2E4',
            showPercent: true,
            text: 'iOS',
            textBelow: true,
            textColor: '#69C2E4'
           });

           $("#ionic-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 70,
            iconColor: '#69C2E4',
            foregroundColor: '#69C2E4',
            fontColor: '#69C2E4',
            showPercent: true,
            text: 'Ionic Framework',
            textBelow: true,
            textColor: '#69C2E4'
           });

           $("#cordova-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 60,
            iconColor: '#69C2E4',
            foregroundColor: '#69C2E4',
            fontColor: '#69C2E4',
            showPercent: true,
            text: 'Cordova',
            textBelow: true,
            textColor: '#69C2E4'
           });

           $("#angular-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 50,
            iconColor: '#69C2E4',
            foregroundColor: '#69C2E4',
            fontColor: '#69C2E4',
            showPercent: true,
            text: 'Angular 4',
            textBelow: true,
            textColor: '#69C2E4'
           });

           $("#java-circle").circliful({
            animation: 1,
            animationStep: 6,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 1,
            percent: 80,
            iconColor: '#69C2E4',
            foregroundColor: '#69C2E4',
            fontColor: '#69C2E4',
            showPercent: true,
            text: 'Java',
            textBelow: true,
            textColor: '#69C2E4'
           });

           i++;

           console.log(i);
      }

  }, { offset: '70%' });

  $('.diplomes .container').waypoint(function() {
      $('.diplomes .container').addClass('fadeInUp');
  }, { offset: '70%' });

  $('.gallery .container').waypoint(function() {
      $('.gallery .container').addClass('fadeInRight');
  }, { offset: '70%' });

  $('.contact .container').waypoint(function() {
      $('.contact .container').addClass('rollIn');
  }, { offset: '70%' });

//   $('.map').waypoint(function() {
//       $('.map').addClass('fadeIn');
//   }, { offset: '70%' });

  
//   $('.competences .container').css('opacity', 1);
//   $('.contact .container').css('opacity', 1);
    $('.owl-carousel').owlCarousel({
        nav: true
    });
});