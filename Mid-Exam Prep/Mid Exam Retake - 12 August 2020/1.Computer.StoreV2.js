function computerStore (input) {
 
let index = 0;
let TotalPriceWithoutTaxes = 0;
 
let currentCommand = input[index++];
 
while ((currentCommand !== "special") && (currentCommand !== "regular")) {
 
        if (Number(currentCommand) < 0) {
            console.log("Invalid price!");
        } else {
            TotalPriceWithoutTaxes += Number(currentCommand);
        }
        currentCommand = input[index++];
    }
    let taxesAmount = TotalPriceWithoutTaxes * 0.2;
    let totalPriceWithTaxes = TotalPriceWithoutTaxes * 1.2;
 
    if (currentCommand ==="special") {
        totalPriceWithTaxes *=0.9;
    }
    if (TotalPriceWithoutTaxes !== 0) {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${TotalPriceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxesAmount.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
    } else {
        console.log("Invalid order!")
    }
}
computerStore([
'1050', 
'200', 
'450',
'2', 
'18.50', 
'16.86', 
'special'
])
