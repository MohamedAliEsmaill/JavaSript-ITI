function outerScope(firstNum) {
    // Outer function scope: Displays the value of the outer parameter
    console.log(`Outer number (firstNum): ${firstNum}`);

    function innerScope(secondNum) {
        // Inner function scope: Displays the value of the inner parameter
        console.log(`Inner number (secondNum): ${secondNum}`);

        // Accessing outer parameter within inner function: Displays the value of the outer parameter from the lexical environment
        console.log(`Outer number within inner function: ${firstNum}`);
    }

    // Returning the inner function from the outer function: Returns the inner function for later use
    return innerScope;
}

// Creating an instance of outerScope with parameter 42: Calls outerScope and assigns the returned inner function to closureInstance
const closureInstance = outerScope(42);

// Invoking the inner function with parameter 7: Calls the inner function with a new parameter
closureInstance(7);