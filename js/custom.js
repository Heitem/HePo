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