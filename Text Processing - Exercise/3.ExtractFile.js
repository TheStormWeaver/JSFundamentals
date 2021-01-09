/*
Write a function that receives a single string - the path to a file (the '\' character is escaped)
Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).
*/
function extractFile(str) {
  let i = str.lastIndexOf(".");
  let e = str.lastIndexOf("\\")
  let name = str.slice(e + 1, i)
  let extention = str.substring(i + 1);
  console.log(`File name: ${name}`);
  console.log(`File extension: ${extention}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
