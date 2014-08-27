var username;
var password;

/**
Gets the username and password out of Local Storage and sets these on the
global variables `username` and `password`.

@return {Boolean} true if a username and password exists in Local Storage.
*/
function getCredentials() {
    username = localStorage.getItem("username");
    password = localStorage.getItem("password");
    if (username && password) {
        return true;
    } else {
        return false;
    }
}

function setCredentials(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
}

$(document).ready(function(){
    if($("input#username").length != 0 && $("input#password").length != 0) {
        // Fetches Credentials
        var hasCredentials = getCredentials();
        if (hasCredentials && $('.error').length == 0) { // No error
            console.log("Attempting to auto-fill credentials");

            $("input#username").val(username);
            $("input#password").val(password);
            $("input.button").click();
        } else {
            console.log("No credentials saved or there was an error");

            // Override the behavior when you submit the form
            $("#loginForm").submit(function(e){
                username = $("input#username").val();
                password = $("input#password").val();
                setCredentials(username, password);
                console.log("Setting new username and passwords");
            });
        }
    } else {
        console.log("No login form detected");
    }
});
