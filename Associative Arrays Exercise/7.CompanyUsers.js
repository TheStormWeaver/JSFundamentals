/*
Write a function which keeps information about companies and their employees. 
You will receive array of strings containing company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
When you finish reading data, order the companies by the name in ascending order. 
Print the company name and each employee's id in the following format:
{companyName}
-- {id1}
-- {id2}
-- {idN}
Input / Constraints
•	The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
•	The input always will be valid.
*/
function companyUsers(arr) {
  let companylist = {}
  for (const line of arr) {
    let [company, id] = line.split(" -> ")
    if(!companylist.hasOwnProperty(company)){
      companylist[company] = []
    }
    if(companylist[company].includes(id)){
    }else{
    companylist[company].push(id)
    }
  }
  let sorted = Object.entries(companylist)
  sorted.sort(([keyA, refA], [keyB, refB]) => {
    let addrA = keyA;
    let addrB = keyB;
    return addrA.localeCompare(addrB);});
    
    for (let pair of sorted) {
      console.log(pair[0]);
      for (let id of pair[1]) {
          console.log(`-- ${id}`);
      }
  }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'  
]);
