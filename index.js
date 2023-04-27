const inputEl = document.getElementById('input-number');
const btnEl = document.getElementById('btn');
const outputEl = document.getElementById('output');


btnEl.addEventListener('click',function fetchSolution(){
    const inputValue = parseInt(inputEl.value);

    if(isNaN(inputValue)){
        outputEl.textContent='';
        return;
    }

    // when negative number is typed
    if(inputValue<0){
        outputEl.textContent = 'Enter a positive number';
        return;
    }

    if (inputValue % 2 === 0) {
        outputEl.textContent = `The next 3 even numbers are: ${inputValue + 2}, ${inputValue + 4}, ${inputValue + 6}`;
      } else {
        outputEl.textContent = `The next 3 odd numbers are: ${inputValue + 2}, ${inputValue + 4}, ${inputValue + 6}`;
      }
    
});

fetchSolution();