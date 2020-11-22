function extractFile(str) {
  let i = str.lastIndexOf(".");
  let e = str.lastIndexOf("\\")
  let name = str.slice(e + 1, i)
  let extention = str.substring(i + 1);
  console.log(`File name: ${name}`);
  console.log(`File extension: ${extention}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
