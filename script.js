const numbers = document.querySelectorAll('.numbers span');
const submitButton = document.querySelector('.btn');
const messageElement = document.querySelector('#message');


numbers.forEach(number => {
  number.addEventListener('click', event => {
    // Remove the 'selected' class from all the numbers
    numbers.forEach(number => {
      number.classList.remove('selected');
    });
    // Add the 'selected' class to the clicked number
    event.target.classList.add('selected');
  });
});

submitButton.addEventListener('click', event => {
    document.querySelector('.container1').style.opacity = 1;
    document.querySelector('.container').classList.add('hidden');
  });


submitButton.addEventListener('click', event => {
    let selectedNumber;
    numbers.forEach(number => {
      if (number.classList.contains('selected')) {
        selectedNumber = number.textContent;
      }
    });
    if (selectedNumber) {
        messageElement.innerHTML = `You have selected ${selectedNumber} out of 5!`;
    }
  });