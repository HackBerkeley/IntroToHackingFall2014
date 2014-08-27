var username;
var password;

function getCredentials(){
    username = localStorage.getItem("username");
    password = localStorage.getItem("password");
    if(username && password){
        return true;
    } else {
        return false;
    }
}

$(document).ready(function(){
    if($("input#username").length && $("input#password").length){
       /* Fetches Credentials */
       var hasCredentials = getCredentials();
       if (hasCredentials && $('.error').length == 0) {
            console.log("Has credentials already");
            $("input#username").val(username);
            $("input#password").val(password);
            $("input.button").click();
            
            console.log("There's username filled in already!");
       } else {
           console.log("has no credentials");
            $("#loginForm").submit(function(e){
                username = $("input#username").val();
                password = $("input#password").val();
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                console.log("Setting new username and passwords");
            });
       }
    } else {
        console.log("No form detected");
    }
});
