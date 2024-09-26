console.log("Hello, Node.js!");

function summa(a, b){
return a+b;
}

module.exports = summa;

// Testa funkcija darbojas
function testSum() {
    const result = summa(2, 3);
    const expected = 5;
  
    if (result === expected) {
      console.log('Test passed!');
    } else {
      console.log(`Test failed! Expected ${expected}, but got ${result}`);
    }
  }
  
  // Izsauc testa funkciju
testSum();