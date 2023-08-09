document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let expression = '';
  
    function appendToDisplay(value) {
      expression += value;
      updateDisplay();
    }
  
    function clearDisplay() {
      expression = '';
      updateDisplay();
    }
  
    function evaluate() {
      try {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
      } catch (error) {
        expression = 'Error';
        updateDisplay();
      }
    }
  
    function updateDisplay() {
      display.value = expression;
    }
  
    // Keyboard support
    function handleKeyboardInput(event) {
      const key = event.key;
      if (key === 'Enter') {
        evaluate();
      } else if (key === 'Backspace') {
        expression = expression.slice(0, -1);
        updateDisplay();
      } else if (!isNaN(key) || ['+', '-', '*', '/', '%', '.'].includes(key)) {
        appendToDisplay(key);
      } else if (key === 'C'||key === 'c' ){
        clearDisplay(key); 
      } else if (key >= 'A' && key <='B'|| key>='a' && key<='b' || key >= 'D' && key <='Z' || key >= 'd' && key <='z'){
        alert('only numbers allowed.');
      }
    }
  
    document.addEventListener('keydown', handleKeyboardInput);
  });
  