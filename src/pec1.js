// Ex 1 (0.5 pt) -------------------------------------------------------------------
export function stretchString(str) {
  let res = "";

  for(let i = 0; i < str.length; i++){
    for(let j = 0; j<=i; j++){
      res += str[i];
    }
  }

  return res;
}

// EX 2 (1.0 pt) -------------------------------------------------------------------
export function isPalindrome(text) {
  const lowerCaseText = text.toLowerCase().replace(/\s+/g, ''); //Text en minuscules i sense espais
  const reversedText = lowerCaseText.split('').reverse().join('');

  return lowerCaseText === reversedText;
}

// EX 3 (0.5 pt) -------------------------------------------------------------------
export function countInRange(arr, min, max) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= min && arr[i] <= max) {
        count++;
    }
  }
  
  return count;
}

// EX 4 (1.0 pt) -------------------------------------------------------------------
export function getDigits(num) {
  //Math.abs elimina el negatiu, despres convertim a array i despres parsejem a numeros
  return Math.abs(num).toString().split('').map(Number);
}

// EX 5 (0.5 pt) -------------------------------------------------------------------
export function transformText(text, mode) {
  switch(mode){
    case "upper":
      return text.toUpperCase();
    case "lower":
      return text.toLowerCase();
    case "reverse":
      return text.split('').reverse().join('');
    default:
      return text;
  }
}

// EX 6 (1.0 pt) -------------------------------------------------------------------
export function isArmstrong(num) {
  if (num < 0) {
      return false;
  }

  const strNum = num.toString();
  const numDigits = strNum.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
      let digit = Number(strNum[i]);
      sum += Math.pow(digit, numDigits);
  }

  return sum === num;
}

// EX 7 (1.0 pt) -------------------------------------------------------------------
export function convertTemperature(value, from, to) {
  // Your code here
}

// EX 8 (1.5 pt) -------------------------------------------------------------------
export function longestIncreasingRun(nums) {
  // Your code here
}

// EX 9 (1.0 pt) -------------------------------------------------------------------
export function createBankAccount(owner, balance) {
  // Your code here
}

// EX 10 (2.0 pt) ------------------------------------------------------------------
export function isHappy(num) {
  // Your code here
}
