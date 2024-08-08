function parseCSV(csvText) {
    let rows = csvText.split('\n');
    let data = rows.map(row => row.split(','));
    return data;
}

// Test case 1: Empty CSV text
let csvText1 = '';
let result1 = parseCSV(csvText1);
console.log(result1); // []s

// Test case 2: CSV text with single row and single column
let csvText2 = 'Hello';
let result2 = parseCSV(csvText2);
console.log(result2); // [['Hello']]

// Test case 3: CSV text with multiple rows and columns
let csvText3 = '1,2,3\n4,5,6\n7,8,9';
let result3 = parseCSV(csvText3);
console.log(result3); // [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]