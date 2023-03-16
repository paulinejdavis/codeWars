// function drawTree(height) {
//     for (let i = 0; i < height; i++) {
//       let row = '';
//       for (let j = 0; j < height - i; j++) {
//         row += ' ';
//       }
//       for (let k = 0; k <= i * 2; k++) {
//         row += '*';
//       }
//       console.log(row);
//     }
//   }
  
//   drawTree(5);

//   you can use nested loops to print out a 
//   series of asterisks and spaces in a tree shape. Here's an example:

// This code will draw a Christmas tree with a height of 5. The 
// outer loop iterates from 0 to the height of the tree, while the 
// inner loops are used to construct each row of the tree. The first 
// inner loop adds spaces to the beginning of the row to create a 
// triangular shape, and the second inner loop adds asterisks to the 
// row. Finally, the console.log() statement is used to output each 
// row to the console.

// You can adjust the height parameter to draw a tree of any desired 
// height.

// Set the number of rows for the tree
// Set the number of rows for the tree
const numRows = 5;

// Loop through each row of the tree
for (let i = 0; i < numRows; i++) {
  // Calculate the number of spaces and stars for this row
  const numSpaces = numRows - i - 1;
  const numStars = i * 2 + 1;

  // Draw the spaces for this row
  let row = "";
  for (let j = 0; j < numSpaces; j++) {
    row += " ";
  }

  // Draw the stars for this row
  for (let j = 0; j < numStars; j++) {
    row += "*";
  }

  // Output this row
  console.log(row);
}

// Draw the trunk
let trunk = "";
for (let i = 0; i < numRows - 1; i++) {
  trunk += " ";
}
trunk += "**";
console.log(trunk);

