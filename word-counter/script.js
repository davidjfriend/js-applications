let inputTextArea = document.getElementById("input-textarea"); 
let characterCount = document.getElementById("character-count"); 
let wordCount = document.getElementById("word-count"); 

inputTextArea.addEventListener("input", () => {
	// Count characters
	characterCount.textContent = inputTextArea.value.length; 
	// Trim whiteSpace 
	let txt = inputTextArea.value.trim(); 
	// Detect words 
	wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;  
});

// David Friend (2022) 