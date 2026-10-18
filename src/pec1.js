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
  const validUnits = ['C', 'F', 'K'];

  if (!validUnits.includes(from) || !validUnits.includes(to)) {
    return "Error: Invalid unit";
  }

  if (from === to) {
    return value;
  }

  const toCelsius = {
    'C': (v) => v,
    'F': (v) => (v - 32) * 5 / 9,
    'K': (v) => v - 273.15
  };

  const fromCelsius = {
    'C': (c) => c,
    'F': (c) => c * 9 / 5 + 32,
    'K': (c) => c + 273.15
  };

  const celsius = toCelsius[from](value);

  return fromCelsius[to](celsius);
}

// EX 8 (1.5 pt) -------------------------------------------------------------------
export function longestIncreasingRun(nums) {
  if (!nums || nums.length === 0) {
    return [];
  }

  let longest = [nums[0]]; // Inicialitzem amb el primer element
  let current = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      current.push(nums[i]);
    } else {
      if (current.length > longest.length) {
        longest = Array.from(current);
      }
      
      current = [nums[i]];
    }
  }

  return current.length > longest.length ? current : longest;
}

// EX 9 (1.0 pt) -------------------------------------------------------------------

class BankAccount {
  #owner;
  #balance;

  constructor(owner, balance) {
    this.#owner = owner;
    this.#balance = balance;
  }

  getOwner() {
    return this.#owner;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0 || Number.isNaN(amount)) {
      return false;
    }

    this.#balance += amount;
    return true;
  }

  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0 || Number.isNaN(amount) || amount > this.#balance) {
      return false;
    }
    
    this.#balance -= amount;
    return true;
  }
}

export function createBankAccount(owner, balance) {
  if (typeof owner !== 'string' || typeof balance !== 'number' || balance < 0 || Number.isNaN(balance)) {
    return null;
  }
  
  return new BankAccount(owner, balance);
}

// EX 10 (2.0 pt) ------------------------------------------------------------------
export function isHappy(num) {
  if (num < 1) {
    return false;
  }

  let seen = new Set();

  while (num !== 1 && !seen.has(num)) {
    seen.add(num);
    let sum = 0;
    let temp = num;
    
    while (temp > 0) {
      let digit = temp % 10;
      sum += digit * digit;
      temp = Math.floor(temp / 10);
    }

    num = sum;
  }

  return num === 1;
}
