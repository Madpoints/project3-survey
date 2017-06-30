/*global $*/

$(document).ready(function() {
    
    $('#user-survey').submit(validation);
    
});

function validation(event) {
    
    //prevent form submission
    event.preventDefault();
    
    //clear error
    clearError();
    
    var password = $('#password').val();
    var verify = $('#verify').val();
    
    //if passwords do not match display error
    if (password != verify) {
        displayError();   
    }
    //else clear error and alert user
    else {
        clearError();
        alert("User info submitted"); 
        $('#user-survey').trigger("reset");
    }

    
}

function displayError() {
    $('.error-message').attr("hidden", false);
    $('.error-message').text(" Password does not match.");
    $('#password').attr('style', "border: 1px solid #9C4D49; color: #9C4D49; background-color: #EFDFDF");
    $('#verify').attr('style', "border: 1px solid #9C4D49; color: #9C4D49; background-color: #EFDFDF");
    $('label[for=password]').attr('style', "color: #9C4D49");
    $('label[for=verify]').attr('style', "color: #9C4D49");
}

function clearError() {
    $(".error-message").text("");
    $('#password').attr('style', "");
    $('#verify').attr('style', "");
    $('label[for=password]').attr('style', "");
    $('label[for=verify]').attr('style', "");
}