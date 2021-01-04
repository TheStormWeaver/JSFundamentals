/*
Write a function to calculate the total cost of different types of furniture. You will be given some lines of input until
you receive the line &quot;Purchase&quot;. For the line to be valid it should be in the following format:
&quot;&gt;&gt;{furniture name}&lt;&lt;{price}!{quantity}&quot;
The price can be floating point number or whole number. Store the names of the furniture and the total price. At the
end print the each bought furniture on separate line in the format:
"Bought furniture:
{1 st name}
{2 nd name}
…"
And on the last line print the following: "Total money spend: {spend money}" formatted to the second decimal
point.
*/
function furniture(arr) {
  let result = `Bought furniture:\n`;
  let regex = />>(?<name>\w+)<<(?<price>[\d.\d]+)!(?<quantity>\d+)/;
  let total = 0;
  for (const line of arr) {
    let match = regex.exec(line);
    if (match) {
      result += match.groups.name + `\n`;
      total += Number(match.groups.price) * Number(match.groups.quantity)
    }
  }
  result += `Total money spend: ${total.toFixed(2)}`
  console.log(result)
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
