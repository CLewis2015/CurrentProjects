$(document).ready(function () {
    /*$('#radio').buttonset();*/
var userNumber = $("#userNumber"); 
  
var getReady = (function () {
    var form = document.getElementById('form');
    
    addEvent(form, 'submit', function (e) {
        e.preventDefault();
        var msg = "Get ready . . .";
        document.getElementById('gen').textContent = msg;
        loadChallenge();
        
    });
}());


var guesses = [];
    
function loadChallenge() { 
        for (var i =0; i<11; i++){
           document.getElementById("problems").innerHTML+="<li>" + userNumber.val() +" x " + i + " = </li>";
            document.getElementById("answers").innerHTML+='<input type="text">';
       }
 
}
});
/*var addButton = '<input type="submit" value="Done">';*/

