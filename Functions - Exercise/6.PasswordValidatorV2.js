/*
Write a function that checks if a given password is valid. Password validations are:
 The length should be 6 - 10 characters (inclusive)
 It should consists only of letters and digits
 It should have at least 2 digits
If a password is valid print "Password is valid".
If it is NOT valid, for every unfulfilled rule print a message:
 "Password must be between 6 and 10 characters"
 "Password must consist only of letters and digits"
 "Password must have at least 2 digits"
*/
function passValidator (password) {
    let checkPassword = (/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g).test(password);
    let counter = 0;
    if(password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    } 
    if (checkPassword) {
     console.log('Password must consist only of letters and digits');
    } 
    for (let i = 0; i < password.length; i++) {
       let char = Number(password[i]);
       if(char >= 0) {
           counter++;
       }
    }
    if(counter < 2) {
        console.log('Password must have at least 2 digits');
    } else if(password.length >= 6 && password.length <= 10 && !checkPassword) {
        console.log('Password is valid');
    }
    
}
passValidator("MyPass123")
