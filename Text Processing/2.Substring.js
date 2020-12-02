/*
Write a function that receives a string and two numbers. The numbers will be a starting index and count of
elements to substring. Print the result.
*/
function substring(string, start, count) {
  let result = string.substring(start, start + count)
  console.log(result)
}
substring("JavaScript", 4, 6);
