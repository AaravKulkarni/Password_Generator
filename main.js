function getPassword(){
    var Charecters= "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+=-{}:<>?";
    var PasswordLength= 16;
    var Password= "";
    for(var i=0; i<PasswordLength; i++){
        var RandomNumber= Math.floor(Math.random() * Charecters.length);
        Password += Charecters.substring(RandomNumber, RandomNumber+1);
    }
    document.getElementById("password").value = Password
    
}