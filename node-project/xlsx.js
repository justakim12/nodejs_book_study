const xlsx = require("xlsx");


const workbook = xlsx.readFile('./xlsx/test.xlsx');
const firstSheetName = workbook.SheetNames[0];
const firstSheet = workbook.Sheets[firstSheetName];

const firstSheetJson = xlsx.utils.sheet_to_json(firstSheet);
console.log(firstSheetJson);
console.log(firstSheet["A2"].v)