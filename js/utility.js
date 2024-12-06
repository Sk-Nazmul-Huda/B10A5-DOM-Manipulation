// Shared function for Input field

function getInputFieldValueById(id){
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}


// Shared function for Text field

function getTextFieldValueById(id){
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}


// Toggle button function

function showSelectById(id){
  document.getElementById('donate-section').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');
  // show the section with the provided parameter
  document.getElementById(id).classList.remove('hidden')
  

}
