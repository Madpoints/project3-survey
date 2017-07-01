/*global $*/

$(document).ready(function() {
    
    var username = GetURLParameter('username'); 
    var email = GetURLParameter('email').replace("%40", "@");
    
    $('#username').text(username);
    $('#email').html("An email will be sent to " + "<b>" + email + "</b>" + " for confirmation.");
});

function GetURLParameter(sParam) {
    
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
