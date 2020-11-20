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
