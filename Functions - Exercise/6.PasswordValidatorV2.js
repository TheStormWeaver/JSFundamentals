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
