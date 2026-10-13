import {
  stretchString, // Ex 1
  isPalindrome, // Ex 2
  countInRange, // Ex 3
  getDigits, // Ex 4
  transformText, // Ex 5
  isArmstrong, // Ex 6
  convertTemperature, // Ex 7
  longestIncreasingRun, // Ex 8
  createBankAccount, // Ex 9
  isHappy // Ex 10
} from "./pec1";

// Ex 1 -------------------------------------------------------------------
describe('stretchString', () => {
  test("'' returns ''", () => {
    expect(stretchString('')).toBe('');
  });

  test("'a' returns 'a'", () => {
    expect(stretchString('a')).toBe('a');
  });

  test("'ab' returns 'abb'", () => {
    expect(stretchString('ab')).toBe('abb');
  });

  test("'abc' returns 'abbccc'", () => {
    expect(stretchString('abc')).toBe('abbccc');
  });

  test("'hola' returns 'hoolllaaaa'", () => {
    expect(stretchString('hola')).toBe('hoolllaaaa');
  });

  test("'UOC' returns 'UOOCCC'", () => {
    expect(stretchString('UOC')).toBe('UOOCCC');
  });

  test("'2026' returns '2002226666'", () => {
    expect(stretchString('2026')).toBe('2002226666');
  });

  test("'aaa' returns 'aaaaaa'", () => {
    expect(stretchString('aaa')).toBe('aaaaaa');
  });

  test("'a b' returns 'a  bbb'", () => {
    expect(stretchString('a b')).toBe('a  bbb');
  });

  test("'!?' returns '!??'", () => {
    expect(stretchString('!?')).toBe('!??');
  });

  test("result length is the sum 1 + 2 + ... + n", () => {
    expect(stretchString('JavaScript')).toHaveLength(55);
  });
});

// Ex 2 -------------------------------------------------------------------
describe('isPalindrome', () => {
  test("'' is a palindrome", () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('single characters are palindromes', () => {
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('Z')).toBe(true);
  });

  test('should return true for simple palindromes', () => {
    expect(isPalindrome('ana')).toBe(true);
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('reconocer')).toBe(true);
    expect(isPalindrome('abba')).toBe(true);
  });

  test('should return false for non-palindromes', () => {
    expect(isPalindrome('hola')).toBe(false);
    expect(isPalindrome('ab')).toBe(false);
    expect(isPalindrome('javascript')).toBe(false);
  });

  test('should ignore uppercase and lowercase', () => {
    expect(isPalindrome('Ana')).toBe(true);
    expect(isPalindrome('RaDaR')).toBe(true);
    expect(isPalindrome('Abba')).toBe(true);
  });

  test('should ignore spaces', () => {
    expect(isPalindrome('race car')).toBe(true);
    expect(isPalindrome('a b a')).toBe(true);
    expect(isPalindrome('  ana ')).toBe(true);
  });

  test('should handle sentences ignoring spaces and case', () => {
    expect(isPalindrome('Anita lava la tina')).toBe(true);
    expect(isPalindrome('Never odd or even')).toBe(true);
    expect(isPalindrome('Step on no pets')).toBe(true);
  });

  test('should return false for sentences that are not palindromes', () => {
    expect(isPalindrome('Hola mundo')).toBe(false);
    expect(isPalindrome('Anita lava la ropa')).toBe(false);
  });

  test('should work with digits', () => {
    expect(isPalindrome('12321')).toBe(true);
    expect(isPalindrome('2002')).toBe(true);
    expect(isPalindrome('2026')).toBe(false);
  });
});

// Ex 3 -------------------------------------------------------------------
describe('countInRange', () => {
  test('of [1, 2, 3, 4, 5] between 2 and 4 is 3', () => {
    expect(countInRange([1, 2, 3, 4, 5], 2, 4)).toBe(3);
  });

  test('of [1, 2, 3, 4, 5] between 0 and 10 is 5', () => {
    expect(countInRange([1, 2, 3, 4, 5], 0, 10)).toBe(5);
  });

  test('of [1, 2, 3, 4, 5] between 6 and 10 is 0', () => {
    expect(countInRange([1, 2, 3, 4, 5], 6, 10)).toBe(0);
  });

  test('of [-5, -1, 0, 1, 5] between -1 and 1 is 3', () => {
    expect(countInRange([-5, -1, 0, 1, 5], -1, 1)).toBe(3);
  });

  test('of [10, 20, 30, 40, 50] between 15 and 45 is 3', () => {
    expect(countInRange([10, 20, 30, 40, 50], 15, 45)).toBe(3);
  });

  test('of [5, 5, 5, 5] between 5 and 5 is 4', () => {
    expect(countInRange([5, 5, 5, 5], 5, 5)).toBe(4);
  });

  test('of [1.5, 2.5, 3.5] between 2 and 3 is 1', () => {
    expect(countInRange([1.5, 2.5, 3.5], 2, 3)).toBe(1);
  });

  test('of [1, 2, 3] between 3 and 1 is 0', () => {
    expect(countInRange([1, 2, 3], 3, 1)).toBe(0);
  });

  test('of [] between 0 and 100 is 0', () => {
    expect(countInRange([], 0, 100)).toBe(0);
  });
});

// Ex 4 -------------------------------------------------------------------
describe('getDigits', () => {
  test('of 0 is [0]', () => {
    expect(getDigits(0)).toEqual([0]);
  });

  test('of single-digit numbers', () => {
    expect(getDigits(1)).toEqual([1]);
    expect(getDigits(7)).toEqual([7]);
    expect(getDigits(9)).toEqual([9]);
  });

  test('of 42 is [4, 2]', () => {
    expect(getDigits(42)).toEqual([4, 2]);
  });

  test('of 1234 is [1, 2, 3, 4]', () => {
    expect(getDigits(1234)).toEqual([1, 2, 3, 4]);
  });

  test('of 2026 is [2, 0, 2, 6]', () => {
    expect(getDigits(2026)).toEqual([2, 0, 2, 6]);
  });

  test('of numbers with zeros', () => {
    expect(getDigits(10)).toEqual([1, 0]);
    expect(getDigits(1000)).toEqual([1, 0, 0, 0]);
    expect(getDigits(90807)).toEqual([9, 0, 8, 0, 7]);
  });

  test('of numbers with repeated digits', () => {
    expect(getDigits(111)).toEqual([1, 1, 1]);
    expect(getDigits(5555)).toEqual([5, 5, 5, 5]);
  });

  test('of negative numbers ignores the sign', () => {
    expect(getDigits(-7)).toEqual([7]);
    expect(getDigits(-507)).toEqual([5, 0, 7]);
  });

  test('of large numbers', () => {
    expect(getDigits(9876543210)).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    expect(getDigits(123456789)).toHaveLength(9);
  });

  test('returns numbers, not strings', () => {
    getDigits(3719).forEach(digit => {
      expect(typeof digit).toBe('number');
    });
  });
});

// Ex 5 -------------------------------------------------------------------
describe('transformText', () => {
  describe('converting to uppercase', () => {
    test("'hola' is 'HOLA'", () => {
      expect(transformText('hola', 'upper')).toBe('HOLA');
    });

    test("'JavaScript' is 'JAVASCRIPT'", () => {
      expect(transformText('JavaScript', 'upper')).toBe('JAVASCRIPT');
    });

    test("'ABC' is 'ABC'", () => {
      expect(transformText('ABC', 'upper')).toBe('ABC');
    });

    test("'' is ''", () => {
      expect(transformText('', 'upper')).toBe('');
    });
  });

  describe('converting to lowercase', () => {
    test("'HOLA' is 'hola'", () => {
      expect(transformText('HOLA', 'lower')).toBe('hola');
    });

    test("'JavaScript' is 'javascript'", () => {
      expect(transformText('JavaScript', 'lower')).toBe('javascript');
    });

    test("'abc' is 'abc'", () => {
      expect(transformText('abc', 'lower')).toBe('abc');
    });

    test("'' is ''", () => {
      expect(transformText('', 'lower')).toBe('');
    });
  });

  describe('reversing', () => {
    test("'hola' is 'aloh'", () => {
      expect(transformText('hola', 'reverse')).toBe('aloh');
    });

    test("'JavaScript' is 'tpircSavaJ'", () => {
      expect(transformText('JavaScript', 'reverse')).toBe('tpircSavaJ');
    });

    test("'a' is 'a'", () => {
      expect(transformText('a', 'reverse')).toBe('a');
    });

    test("'' is ''", () => {
      expect(transformText('', 'reverse')).toBe('');
    });
  });

  describe('with invalid mode', () => {
    test("'hola' with 'capitalize' returns 'hola'", () => {
      expect(transformText('hola', 'capitalize')).toBe('hola');
    });

    test("'Test' without mode returns 'Test'", () => {
      expect(transformText('Test')).toBe('Test');
    });

    test("'abc' with 'UPPER' returns 'abc'", () => {
      expect(transformText('abc', 'UPPER')).toBe('abc');
    });
  });

  describe('special cases', () => {
    test("text with spaces 'hola mundo' in uppercase is 'HOLA MUNDO'", () => {
      expect(transformText('hola mundo', 'upper')).toBe('HOLA MUNDO');
    });

    test("text with spaces 'hola mundo' reversed is 'odnum aloh'", () => {
      expect(transformText('hola mundo', 'reverse')).toBe('odnum aloh');
    });

    test("text with numbers 'pec1' in uppercase is 'PEC1'", () => {
      expect(transformText('pec1', 'upper')).toBe('PEC1');
    });

    test("text with symbols '!@#' reversed is '#@!'", () => {
      expect(transformText('!@#', 'reverse')).toBe('#@!');
    });
  });
});

// Ex 6 -------------------------------------------------------------------
describe('isArmstrong', () => {
  test('should return false for negative numbers', () => {
    expect(isArmstrong(-1)).toBe(false);
    expect(isArmstrong(-153)).toBe(false);
  });

  test('should return true for all single-digit numbers', () => {
    expect(isArmstrong(0)).toBe(true);
    expect(isArmstrong(1)).toBe(true);
    expect(isArmstrong(5)).toBe(true);
    expect(isArmstrong(9)).toBe(true);
  });

  test('should return false for two-digit numbers', () => {
    expect(isArmstrong(10)).toBe(false);
    expect(isArmstrong(11)).toBe(false);
    expect(isArmstrong(55)).toBe(false);
    expect(isArmstrong(99)).toBe(false);
  });

  test('should return true for 153 (1^3 + 5^3 + 3^3)', () => {
    expect(isArmstrong(153)).toBe(true);
  });

  test('should return true for the other three-digit Armstrong numbers', () => {
    expect(isArmstrong(370)).toBe(true);
    expect(isArmstrong(371)).toBe(true);
    expect(isArmstrong(407)).toBe(true);
  });

  test('should return false for numbers close to Armstrong numbers', () => {
    expect(isArmstrong(152)).toBe(false);
    expect(isArmstrong(154)).toBe(false);
    expect(isArmstrong(372)).toBe(false);
    expect(isArmstrong(406)).toBe(false);
  });

  test('should return true for four-digit Armstrong numbers', () => {
    expect(isArmstrong(1634)).toBe(true);
    expect(isArmstrong(8208)).toBe(true);
    expect(isArmstrong(9474)).toBe(true);
  });

  test('should return false for other four-digit numbers', () => {
    expect(isArmstrong(1000)).toBe(false);
    expect(isArmstrong(2026)).toBe(false);
    expect(isArmstrong(9475)).toBe(false);
  });

  test('should return true for five-digit Armstrong numbers', () => {
    expect(isArmstrong(54748)).toBe(true);
    expect(isArmstrong(92727)).toBe(true);
    expect(isArmstrong(93084)).toBe(true);
  });

  test('should use the number of digits as exponent', () => {
    // 1^3 + 6^3 + 3^3 + 4^3 = 308, but 1^4 + 6^4 + 3^4 + 4^4 = 1634
    expect(isArmstrong(1634)).toBe(true);
    // 3^3 + 0^3 + 8^3 = 539, not 308
    expect(isArmstrong(308)).toBe(false);
  });
});

// Ex 7 -------------------------------------------------------------------
describe('convertTemperature', () => {
  describe('Celsius (C)', () => {
    test('to Fahrenheit: 0 is 32', () => {
      expect(convertTemperature(0, 'C', 'F')).toBeCloseTo(32, 5);
    });

    test('to Fahrenheit: 100 is 212', () => {
      expect(convertTemperature(100, 'C', 'F')).toBeCloseTo(212, 5);
    });

    test('to Fahrenheit: -40 is -40', () => {
      expect(convertTemperature(-40, 'C', 'F')).toBeCloseTo(-40, 5);
    });

    test('to Kelvin: 0 is 273.15', () => {
      expect(convertTemperature(0, 'C', 'K')).toBeCloseTo(273.15, 5);
    });

    test('to Kelvin: 36.6 is 309.75', () => {
      expect(convertTemperature(36.6, 'C', 'K')).toBeCloseTo(309.75, 5);
    });
  });

  describe('Fahrenheit (F)', () => {
    test('to Celsius: 32 is 0', () => {
      expect(convertTemperature(32, 'F', 'C')).toBeCloseTo(0, 5);
    });

    test('to Celsius: 212 is 100', () => {
      expect(convertTemperature(212, 'F', 'C')).toBeCloseTo(100, 5);
    });

    test('to Celsius: 50 is 10', () => {
      expect(convertTemperature(50, 'F', 'C')).toBeCloseTo(10, 5);
    });

    test('to Kelvin: 98.6 is 310.15', () => {
      expect(convertTemperature(98.6, 'F', 'K')).toBeCloseTo(310.15, 5);
    });
  });

  describe('Kelvin (K)', () => {
    test('to Celsius: 0 is -273.15', () => {
      expect(convertTemperature(0, 'K', 'C')).toBeCloseTo(-273.15, 5);
    });

    test('to Celsius: 373.15 is 100', () => {
      expect(convertTemperature(373.15, 'K', 'C')).toBeCloseTo(100, 5);
    });

    test('to Fahrenheit: 300 is 80.33', () => {
      expect(convertTemperature(300, 'K', 'F')).toBeCloseTo(80.33, 5);
    });

    test('to Fahrenheit: 0 is -459.67', () => {
      expect(convertTemperature(0, 'K', 'F')).toBeCloseTo(-459.67, 5);
    });
  });

  describe('Same unit', () => {
    test('returns the same value', () => {
      expect(convertTemperature(25, 'C', 'C')).toBeCloseTo(25, 5);
      expect(convertTemperature(77, 'F', 'F')).toBeCloseTo(77, 5);
      expect(convertTemperature(300, 'K', 'K')).toBeCloseTo(300, 5);
    });
  });

  describe('Invalid units', () => {
    test('invalid source unit', () => {
      expect(convertTemperature(25, 'X', 'C')).toBe('Error: Invalid unit');
    });

    test('invalid target unit', () => {
      expect(convertTemperature(25, 'C', 'Celsius')).toBe('Error: Invalid unit');
    });

    test('lowercase units are not valid', () => {
      expect(convertTemperature(25, 'c', 'f')).toBe('Error: Invalid unit');
    });

    test('empty unit', () => {
      expect(convertTemperature(25, '', 'K')).toBe('Error: Invalid unit');
    });

    test('undefined unit', () => {
      expect(convertTemperature(25, 'C', undefined)).toBe('Error: Invalid unit');
    });
  });
});


// Ex 8 -------------------------------------------------------------------
describe('longestIncreasingRun', () => {
  test('returns the whole array if it is fully increasing', () => {
    expect(longestIncreasingRun([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('finds the longest run in the middle of the array', () => {
    expect(longestIncreasingRun([1, 2, 0, 3, 4, 5, 1])).toEqual([0, 3, 4, 5]);
  });

  test('finds the longest run at the end of the array', () => {
    expect(longestIncreasingRun([9, 1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('finds the longest run among several runs', () => {
    expect(longestIncreasingRun([1, 3, 2, 4, 6, 8, 0, 1])).toEqual([2, 4, 6, 8]);
  });

  test('returns the first element if the array is decreasing', () => {
    expect(longestIncreasingRun([5, 4, 3, 2, 1])).toEqual([5]);
  });

  test('returns the first run in case of a tie', () => {
    expect(longestIncreasingRun([3, 4, 1, 2])).toEqual([3, 4]);
    expect(longestIncreasingRun([1, 5, 9, 2, 6, 7])).toEqual([1, 5, 9]);
  });

  test('equal consecutive elements break the run', () => {
    expect(longestIncreasingRun([1, 2, 2, 3])).toEqual([1, 2]);
    expect(longestIncreasingRun([4, 4, 4])).toEqual([4]);
  });

  test('returns empty array with empty array', () => {
    expect(longestIncreasingRun([])).toEqual([]);
  });

  test('works with a single element', () => {
    expect(longestIncreasingRun([7])).toEqual([7]);
  });

  test('works with negative numbers', () => {
    expect(longestIncreasingRun([-3, -2, -1, -5, 0])).toEqual([-3, -2, -1]);
  });

  test('works with decimal numbers', () => {
    expect(longestIncreasingRun([1.1, 1.2, 1.15, 1.3, 1.4, 1.5])).toEqual([1.15, 1.3, 1.4, 1.5]);
  });

  test('works with large array', () => {
    const result = longestIncreasingRun([5, 6, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('does not modify the original array', () => {
    const nums = [3, 1, 2, 5, 4];
    expect(longestIncreasingRun(nums)).toEqual([1, 2, 5]);
    expect(nums).toEqual([3, 1, 2, 5, 4]);
  });
});

// Ex 9 -------------------------------------------------------------------
describe('createBankAccount', () => {
  test('should create an account with valid owner and balance', () => {
    const account = createBankAccount('Ada', 100);
    expect(account).not.toBeNull();
    expect(account.getOwner()).toBe('Ada');
    expect(account.getBalance()).toBe(100);
  });

  test('should allow an initial balance of 0', () => {
    const account = createBankAccount('Ada', 0);
    expect(account).not.toBeNull();
    expect(account.getBalance()).toBe(0);
  });

  test('should return null if the owner is not a string', () => {
    expect(createBankAccount(123, 100)).toBeNull();
    expect(createBankAccount(null, 100)).toBeNull();
    expect(createBankAccount(undefined, 100)).toBeNull();
    expect(createBankAccount([], 100)).toBeNull();
  });

  test('should return null if the balance is not a number', () => {
    expect(createBankAccount('Ada', '100')).toBeNull();
    expect(createBankAccount('Ada', null)).toBeNull();
    expect(createBankAccount('Ada', undefined)).toBeNull();
    expect(createBankAccount('Ada', [])).toBeNull();
  });

  test('should return null if the balance is negative', () => {
    expect(createBankAccount('Ada', -1)).toBeNull();
    expect(createBankAccount('Ada', -0.5)).toBeNull();
  });

  test('should allow depositing positive amounts', () => {
    const account = createBankAccount('Ada', 100);
    expect(account.deposit(50)).toBe(true);
    expect(account.getBalance()).toBe(150);
    expect(account.deposit(0.5)).toBe(true);
    expect(account.getBalance()).toBe(150.5);
  });

  test('should not deposit invalid amounts', () => {
    const account = createBankAccount('Ada', 100);
    expect(account.deposit(0)).toBe(false);
    expect(account.deposit(-20)).toBe(false);
    expect(account.deposit('50')).toBe(false);
    expect(account.deposit(null)).toBe(false);
    expect(account.getBalance()).toBe(100);
  });

  test('should allow withdrawing positive amounts', () => {
    const account = createBankAccount('Ada', 100);
    expect(account.withdraw(30)).toBe(true);
    expect(account.getBalance()).toBe(70);
  });

  test('should allow withdrawing the whole balance', () => {
    const account = createBankAccount('Ada', 100);
    expect(account.withdraw(100)).toBe(true);
    expect(account.getBalance()).toBe(0);
  });

  test('should not withdraw more than the balance', () => {
    const account = createBankAccount('Ada', 100);
    expect(account.withdraw(100.01)).toBe(false);
    expect(account.withdraw(500)).toBe(false);
    expect(account.getBalance()).toBe(100);
  });

  test('should not withdraw invalid amounts', () => {
    const account = createBankAccount('Ada', 100);
    expect(account.withdraw(0)).toBe(false);
    expect(account.withdraw(-20)).toBe(false);
    expect(account.withdraw('50')).toBe(false);
    expect(account.withdraw(undefined)).toBe(false);
    expect(account.getBalance()).toBe(100);
  });

  test('should not expose the balance directly', () => {
    const account = createBankAccount('Ada', 100);
    expect(account.balance).toBeUndefined();
    account.balance = 1000000;
    expect(account.getBalance()).toBe(100);
  });

  test('should create independent accounts', () => {
    const account1 = createBankAccount('Ada', 100);
    const account2 = createBankAccount('Alan', 200);

    account1.deposit(50);
    account2.withdraw(50);

    expect(account1.getBalance()).toBe(150);
    expect(account2.getBalance()).toBe(150);
    expect(account1.getOwner()).toBe('Ada');
    expect(account2.getOwner()).toBe('Alan');
  });

  test('should allow multiple consecutive operations', () => {
    const account = createBankAccount('Grace', 0);

    account.deposit(100);
    account.withdraw(30);
    account.withdraw(80);
    account.deposit(10);

    expect(account.getBalance()).toBe(80);
  });
});

// Ex 10 -------------------------------------------------------------------
describe('isHappy', () => {
  test('should return false for numbers less than 1', () => {
    expect(isHappy(0)).toBe(false);
    expect(isHappy(-1)).toBe(false);
    expect(isHappy(-7)).toBe(false);
  });

  test('should return true for 1', () => {
    expect(isHappy(1)).toBe(true);
  });

  test('should return true for 7, the only happy single-digit number besides 1', () => {
    expect(isHappy(7)).toBe(true);
  });

  test('should return false for the other single-digit numbers', () => {
    expect(isHappy(2)).toBe(false);
    expect(isHappy(3)).toBe(false);
    expect(isHappy(4)).toBe(false);
    expect(isHappy(5)).toBe(false);
    expect(isHappy(6)).toBe(false);
    expect(isHappy(8)).toBe(false);
    expect(isHappy(9)).toBe(false);
  });

  test('should return true for two-digit happy numbers', () => {
    expect(isHappy(10)).toBe(true);
    expect(isHappy(13)).toBe(true);
    expect(isHappy(19)).toBe(true);
    expect(isHappy(23)).toBe(true);
    expect(isHappy(28)).toBe(true);
    expect(isHappy(44)).toBe(true);
    expect(isHappy(68)).toBe(true);
    expect(isHappy(79)).toBe(true);
    expect(isHappy(97)).toBe(true);
  });

  test('should return false for two-digit unhappy numbers', () => {
    expect(isHappy(11)).toBe(false);
    expect(isHappy(12)).toBe(false);
    expect(isHappy(16)).toBe(false);
    expect(isHappy(20)).toBe(false);
    expect(isHappy(42)).toBe(false);
    expect(isHappy(89)).toBe(false);
    expect(isHappy(99)).toBe(false);
  });

  test('should return true for 100', () => {
    expect(isHappy(100)).toBe(true);
  });

  test('should return true for 2026 (4 + 0 + 4 + 36 = 44 -> 32 -> 13 -> 10 -> 1)', () => {
    expect(isHappy(2026)).toBe(true);
  });

  test('should return true for large happy numbers', () => {
    expect(isHappy(130)).toBe(true);
    expect(isHappy(139)).toBe(true);
    expect(isHappy(1000)).toBe(true);
    expect(isHappy(986543210)).toBe(true);
  });

  test('should return false for large unhappy numbers', () => {
    expect(isHappy(145)).toBe(false);
    expect(isHappy(999)).toBe(false);
    expect(isHappy(2025)).toBe(false);
  });

  test('should handle numbers that fall into the 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4 cycle', () => {
    [4, 16, 37, 58, 89, 145, 42, 20].forEach(num => {
      expect(isHappy(num)).toBe(false);
    });
  });
});
