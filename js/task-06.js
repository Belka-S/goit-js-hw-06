// Write a script that, when focus on input is lost (blur event),
// checks its contents for the correct number of entered characters.
// The number of characters in the input is specified in its data-length attribute.
// If the number of characters entered is correct, the input's border turns green,
// or red with a wrong number. To add styles, use the valid and invalid CSS classes,
// which you can find in the task source files.

// -----------------------------------------------------------------------------

const validInput = document.querySelector(
 'input#validation-input'
);

function paintBorder() {
 validInput.value.length !==
 Number(validInput.dataset.length)
  ? validInput.classList.add('invalid')
  : validInput.classList.add('valid');
}

validInput.addEventListener('focus', () =>
 validInput.removeAttribute('class')
);

validInput.addEventListener('blur', () => {
 validInput.value.length > 0
  ? paintBorder()
  : validInput.removeAttribute('class');
});
