
// A function to log a message
function logMessage(message: string): void {
  console.log(`Message: ${message}`);
}

// A function to perform a simple calculation
function calculateSum(a: number, b: number): number {
  return a + b;
}

// Main function to run the TypeScript code
async function main() {
  logMessage("Hello from TypeScript in Deno!");

  const sum = calculateSum(5, 7);
  console.log(`Sum of 5 and 7 is ${sum}`);
}

// Execute the main function
main().catch((err) => {
  console.error("Error executing TypeScript code:", err);
});
