// Get references to HTML elements
const userInput = document.getElementById("userInput");  // input field
const generateBtn = document.getElementById("generateBtn");  // button
const contentArea = document.getElementById("contentArea");  // display area

// Add a click event listener to the button
generateBtn.addEventListener("click", () => {
  // Get what the user typed
  const text = userInput.value.trim();

  // Check if user typed something
  if (text === "") {
    alert("Please type something!");
    return; // stop if nothing entered
  }

  // Create a new paragraph element
  const newParagraph = document.createElement("p");

  // Set the text of that paragraph
  newParagraph.textContent = text;

  // Add it to the content area
  contentArea.appendChild(newParagraph);

  // Clear input box
  userInput.value = "";
});
