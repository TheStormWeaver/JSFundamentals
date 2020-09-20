function solve (input) {
 
        let index = 0;
        let username = input[index++]; 
        let password = input[index++];
        let counter = 0;
 
        while (true) {
 
            let invertedIncomingpassword ="";
            for (let i = password.length - 1; i >= 0; i--) {
                    let part = password[i];
 
                    invertedIncomingpassword = invertedIncomingpassword + part
 
                }   
 
                counter++;
            if (username !== invertedIncomingpassword) {
 
                if (counter === 4) {
                    console.log(`User ${username} blocked!`);
                    break;
                }
                console.log("Incorrect password. Try again.");
 
 
            } else {
                console.log(`User ${username} logged in.`);
                break;
            }
            password = input[index++];
        }
    }
