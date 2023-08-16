<script>
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearEntry() {
    document.getElementById('display').value = '';
    document.getElementById('result').innerHTML = '';
  }

  function deleteLast() {
    const displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
  }

  function calculate() {
    try {
      const expression = document.getElementById('display').value;
      const result = eval(expression);
      document.getElementById('display').value = result;
      document.getElementById('result').innerHTML = `Result: ${result}`;
    } catch (error) {
      document.getElementById('result').innerHTML = 'Invalid Expression';
    }
  }

  function calculateSquareRoot() {
    // ... existing square root calculation logic ...
  }

  function calculateCube() {
    // ... existing cube calculation logic ...
  }

  function calculateSquare() {
    // ... existing square calculation logic ...
  }

  function calculateCubeRoot() {
    // ... existing cube root calculation logic ...
  }

  function calculateFactorial() {
    // ... existing factorial calculation logic ...
  }

  function calculateSin() {
    // ... existing sine calculation logic ...
  }

  function calculateCos() {
    // ... existing cosine calculation logic ...
  }

  function calculateTan() {
    // ... existing tangent calculation logic ...
  }

  function calculatePercentage() {
    try {
      const inputValue = parseFloat(document.getElementById('display').value);
      const result = inputValue / 100;
      document.getElementById('display').value = result;
      document.getElementById('result').innerHTML = `${inputValue}% = ${result}`;
    } catch (error) {
      document.getElementById('result').innerHTML = 'Invalid Input';
    }
  }
</script>
