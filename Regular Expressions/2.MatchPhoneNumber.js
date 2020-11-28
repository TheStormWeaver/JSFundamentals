function matchPhone(input) {
    let pattern = /\+359([ \-])2\1\d{3}\1\d{4}\b/g
    let result = pattern.exec(input)
    let validNums = []
    while(result != null){
        validNums.push(result[0])
        result = pattern.exec(input)
    }
    console.log(validNums.join(", "))
}
matchPhone(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",]);
