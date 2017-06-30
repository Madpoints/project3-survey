$(document).ready(function() {
    
    $("#user-survey").submit(validation);
    
});

function validation(event) {
    
    //prevent form submission
    event.preventDefault();
    
    var email = $("#email").val();
    var verify = $("#verify").val();
    
    if (email != verify) {
        $("#error").text("no match");
    }
    else {
        alert("User info submitted");    
    }

    
};