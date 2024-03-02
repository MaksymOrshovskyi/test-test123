// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero!");
    }
    return num1 / num2;
}

// Test cases for addition
function testAddition() {
    console.log("Testing addition...");
    console.assert(add(1, 1) === 2, "1 + 1 should equal 2");
    console.assert(add(-1, 1) === 0, "-1 + 1 should equal 0");
    console.assert(add(0, 0) === 0, "0 + 0 should equal 0");
    console.log("Addition tests passed!");
}

// Test cases for subtraction
function testSubtraction() {
    console.log("Testing subtraction...");
    console.assert(subtract(3, 1) === 2, "3 - 1 should equal 2");
    console.assert(subtract(-1, 1) === -2, "-1 - 1 should equal -2");
    console.assert(subtract(0, 0) === 0, "0 - 0 should equal 0");
    console.log("Subtraction tests passed!");
}

// Test cases for multiplication
function testMultiplication() {
    console.log("Testing multiplication...");
    console.assert(multiply(2, 3) === 6, "2 * 3 should equal 6");
    console.assert(multiply(-2, 3) === -6, "-2 * 3 should equal -6");
    console.assert(multiply(0, 5) === 0, "0 * 5 should equal 0");
    console.log("Multiplication tests passed!");
}

// Test cases for division
function testDivision() {
    console.log("Testing division...");
    console.assert(divide(6, 3) === 2, "6 / 3 should equal 2");
    console.assert(divide(-6, 3) === -2, "-6 / 3 should equal -2");
    console.assert(divide(0, 5) === 0, "0 / 5 should equal 0");
    console.log("Division tests passed!");
}

// Run all test cases
function runAllTests() {
    testAddition();
    testSubtraction();
    testMultiplication();
    testDivision();
}

// Call function to run all tests
runAllTests();
