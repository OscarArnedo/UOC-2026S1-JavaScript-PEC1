# PJP PEC 1

En esta PEC vamos a practicar la programación con JavaScript por medio de ejercicios concretos que evaluarán una o varias características del lenguaje.

## Competencias

En esta PEC se desarrollan las siguientes competencias del Máster:

* [CB10] Que los estudiantes posean las habilidades de aprendizaje que les permitan continuar estudiando de una manera que tendrá que ser en gran medida autodirigida o autónoma.
* [CG1] Analizar y sintetizar información técnica compleja.
* [CE3] Utilizar de manera adecuada los lenguajes de programación y las mejores herramientas de desarrollo para el análisis, el diseño y la implementación de lugares y aplicaciones web en función de las necesidades del proyecto.
* [CE8] Adaptarse a las tecnologías web y a los futuros entornos actualizando las competencias profesionales.

## Objetivos

Los objetivos concretos de esta PEC son:

* Aprender a utilizar JavaScript y sus características básicas.
* Contribuir a conocer a fondo el lenguaje JavaScript para poder usarlo en el desarrollo de aplicaciones Web.

## Entrega de la PEC

Una vez hayas realizado las actividades prácticas propuestas en este enunciado, la entrega se realizará enviando tus cambios al apartado del aula virtual de la UOC, comprimidos en un **archivo ZIP**.

## Puntuación

El hecho de trabajar con tests para verificar la funcionalidad del código te permitirá tener una idea de tu propia nota antes de la entrega.

La puntuación de los ejercicios prácticos se basa en dos criterios: **Funcionalidad** e **Implementación**. Se espera que los ejercicios funcionen correctamente (pasen los tests) y que la implementación (el código) tenga una calidad adecuada.

Algunos detalles a tener en cuenta:

- Se penalizará cualquier intento de _hardcodear_ los tests para forzar que pasen. Esta técnica consiste en cambiar la implementación para que devuelva únicamente el valor esperado por el test (cualquier otro test fallaría).
- Los tests automáticos están diseñados para detectar ejercicios erróneos o incompletos para casos concretos. El hecho de que un test pase no garantiza que el ejercicio esté realizado correctamente, es decir, que cubra todos los casos.
- Un ejercicio cuyos tests no pasan se puntuará con un 0 salvo que existan problemas con el test.
- Además de pasar los tests, el profesorado evaluará vuestro código en base a los siguientes criterios:
  - Legibilidad, sencillez y calidad del código.
  - Conocimientos de programación. Por ejemplo, no utilizar las estructuras de control adecuadas, como utilizar un bucle para construir una sentencia condicional o viceversa.
  - Capacidad de síntesis y reutilización de código.

## Requisitos mínimos

- Tener instalado Visual Studio Code (VSC), o cualquier otro IDE.
- Estudio de la introducción y repaso a JavaScript (Actividad 1 del Reto 1).

## Ejercicios prácticos (10 puntos)

Para realizar los ejercicios prácticos debes dirigirte a la siguiente ruta, dentro del repositorio: `src/pec1.js`.
En este fichero deberás implementar las funciones que te indicamos en los ejercicios que verás más abajo.

Por otro lado, los tests que te permitirán saber si la solución que propones para los ejercicios es incorrecta están en el fichero `src/pec1.test.js`.
**No debes editar nunca este fichero**.
Ten en cuenta que los tests son condiciones que deben cumplir las funciones que implementarás en los ejercicios, por lo que pueden servirte de ayuda para corregirlos.

### Preparando el entorno

```
npm install
```

A continuación, para lanzar los tests debes ejecutar el siguiente comando:

```
npm t
```

La instrucción anterior lanzará los tests cada vez que guardes el fichero `src/pec1.js`, que es precisamente donde implementarás los ejercicios de esta PEC.

La primera vez que ejecutes `npm t` y se lancen los tests, fallarán todos, ya que no hay ningún ejercicio implementado. Conforme vayas trabajando en los ejercicios y guardes el fichero, puede que algún test lance algún error. Revisa el mensaje de error que se imprime para conocer su formato y entender cómo se notifican los errores.

Si tienes algún problema con los tests, no dudes en preguntar en el foro "Dudas PEC 1 | Dubtes PAC 1" del aula.

### Ejercicio 1 (0.5 puntos)

#### Descripción

Debes implementar la función `stretchString` que genera un string en el que cada carácter del string original se repite tantas veces como indica su posición (empezando a contar desde 1).

Por ejemplo, si el input es `"abc"`, la función debe:

1. Repetir el primer carácter 1 vez: `"a"`
2. Repetir el segundo carácter 2 veces: `"bb"`
3. Repetir el tercer carácter 3 veces: `"ccc"`
4. No quedan más caracteres: termina el proceso

Resultado final: `"abbccc"`

#### Parámetros de entrada

- `str` (string): Cadena de texto de entrada. Puede estar vacía.

#### Retorno

- String, con el resultado de la concatenación.

#### Ejemplos

```javascript
stretchString(''); // ""
stretchString('abc'); // "abbccc"
stretchString('UOC'); // "UOOCCC"
```

### Ejercicio 2 (1.0 punto)

#### Descripción

Debes implementar la función `isPalindrome` que determina si un texto es un palíndromo. Un palíndromo es un texto que se lee igual de izquierda a derecha que de derecha a izquierda.

#### Comportamiento

- La función debe ignorar la diferencia entre mayúsculas y minúsculas.
- La función debe ignorar los espacios.
- Un string vacío se considera palíndromo.
- Puedes suponer que los textos no contendrán tildes ni signos de puntuación.

#### Parámetros de entrada

- `text` (string): Texto a evaluar.

#### Retorno

- Booleano (`true` o `false`).

#### Ejemplos

```javascript
isPalindrome('radar'); // true
isPalindrome('Anita lava la tina'); // true
isPalindrome('hola'); // false
```

### Ejercicio 3 (0.5 puntos)

#### Descripción

Debes implementar la función `countInRange` que cuenta cuántos elementos de un array se encuentran dentro de un rango de valores, ambos extremos incluidos.

#### Comportamiento

- La función debe contar únicamente los elementos que sean mayores o iguales que `min` y menores o iguales que `max`.
- Si no hay elementos dentro del rango, la función debe retornar 0.
- Si el array está vacío, la función debe retornar 0.

#### Parámetros de entrada

- `arr` (array de números): Array que contiene los elementos a evaluar.
- `min` (número): Límite inferior del rango (incluido).
- `max` (número): Límite superior del rango (incluido).

#### Retorno

- Número, con la cantidad de elementos que están dentro del rango.

#### Ejemplos

```javascript
countInRange([1, 2, 3, 4, 5], 2, 4); // 3
countInRange([5, 5, 5, 5], 5, 5); // 4
countInRange([], 0, 100); // 0
```

### Ejercicio 4 (1.0 punto)

#### Descripción

Debes implementar la función `getDigits` que retorna un array con los dígitos de un número entero, en el mismo orden en el que aparecen en el número.

#### Comportamiento

- La función debe retornar un array con los dígitos del número, ordenados de izquierda a derecha.
- Los elementos del array deben ser de tipo número (no strings).
- Si el número es negativo, se ignora el signo.
- El número 0 tiene un único dígito: `[0]`.

#### Parámetros de entrada

- `num` (número entero): El número del cual se quieren obtener los dígitos.

#### Retorno

- Array de números enteros.

#### Ejemplos

```javascript
getDigits(2026); // [2, 0, 2, 6]
getDigits(-507); // [5, 0, 7]
getDigits(0); // [0]
```

### Ejercicio 5 (0.5 puntos)

#### Descripción

Debes implementar la función `transformText` que transforma un string según el modo indicado.

#### Comportamiento

- Si `mode` es `'upper'`, convierte el string a mayúsculas.
- Si `mode` es `'lower'`, convierte el string a minúsculas.
- Si `mode` es `'reverse'`, invierte el orden de los caracteres del string.
- Si `mode` tiene cualquier otro valor o este no se proporciona, retorna el string original sin cambios.

#### Parámetros de entrada

- `text` (string): Texto a transformar.
- `mode` (string): Transformación a aplicar. Puede ser `'upper'`, `'lower'` o `'reverse'`.

#### Retorno

- String resultante, después de aplicar la transformación.

#### Ejemplos

```javascript
transformText('hola', 'upper'); // "HOLA"
transformText('JavaScript', 'lower'); // "javascript"
transformText('hola', 'reverse'); // "aloh"
```

### Ejercicio 6 (1.0 punto)

#### Descripción

Debes implementar la función `isArmstrong` que determina si un número es un **número de Armstrong** (también llamado número narcisista). Un número de Armstrong es aquel que es igual a la suma de sus dígitos elevados, cada uno, al número total de dígitos.

Por ejemplo, 153 es un número de Armstrong porque tiene 3 dígitos y 1³ + 5³ + 3³ = 1 + 125 + 27 = 153.

#### Comportamiento

- La función debe retornar `true` si el número es de Armstrong.
- La función debe retornar `false` si el número no es de Armstrong o es negativo.
- Todos los números de un solo dígito (incluido el 0) son números de Armstrong.

#### Parámetros de entrada

- `num` (número entero): El número a evaluar.

#### Retorno

- Booleano (`true` o `false`).

#### Ejemplos

```javascript
isArmstrong(153); // true (1³ + 5³ + 3³ = 153)
isArmstrong(1634); // true (1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634)
isArmstrong(154); // false (1³ + 5³ + 4³ = 190 ≠ 154)
isArmstrong(-153); // false
```

### Ejercicio 7 (1.0 punto)

#### Descripción

Debes implementar la función `convertTemperature` que convierte una temperatura entre las escalas Celsius (`'C'`), Fahrenheit (`'F'`) y Kelvin (`'K'`).

Las fórmulas de conversión son las siguientes:

- De Celsius a Fahrenheit: `F = C * 9 / 5 + 32`
- De Fahrenheit a Celsius: `C = (F - 32) * 5 / 9`
- De Celsius a Kelvin: `K = C + 273.15`
- De Kelvin a Celsius: `C = K - 273.15`

#### Comportamiento

- Si ambas unidades son válidas (`'C'`, `'F'`, `'K'`), realiza la conversión correspondiente.
- Si la unidad de origen y la de destino son la misma, retorna el mismo valor.
- Las unidades distinguen entre mayúsculas y minúsculas (`'c'` no es una unidad válida).
- Si alguna de las unidades no es válida, retorna el siguiente string: `'Error: Invalid unit'`.

#### Parámetros de entrada

- `value` (número): Temperatura a convertir.
- `from` (string): Unidad de origen. Puede ser `'C'`, `'F'` o `'K'`.
- `to` (string): Unidad de destino. Puede ser `'C'`, `'F'` o `'K'`.

#### Retorno

- Número con la temperatura convertida, o string con el correspondiente mensaje de error.

#### Ejemplos

```javascript
convertTemperature(451, 'F', 'C'); // 232.77777777777777
convertTemperature(0, 'K', 'C'); // -273.15
convertTemperature(300, 'K', 'F'); // 80.33
convertTemperature(25, 'C', 'X'); // "Error: Invalid unit"
```

### Ejercicio 8 (1.5 puntos)

#### Descripción

Debes implementar la función `longestIncreasingRun` que encuentra el tramo **consecutivo** más largo de un array cuyos elementos sean estrictamente crecientes (cada elemento es mayor que el anterior).

#### Comportamiento

- El tramo debe estar formado por elementos contiguos del array original, respetando su orden.
- Dos elementos iguales consecutivos rompen el tramo creciente.
- Si hay varios tramos con la misma longitud máxima, retorna el primero de ellos.
- Si el array está vacío, retorna un array vacío.
- La función no debe modificar el array original.

#### Parámetros de entrada

- `nums` (array de números): Array de números donde buscar el tramo.

#### Retorno

- Array de números, con el tramo creciente más largo.

#### Ejemplos

```javascript
longestIncreasingRun([1, 2, 0, 3, 4, 5, 1]); // [0, 3, 4, 5]
longestIncreasingRun([3, 4, 1, 2]); // [3, 4] (empate: se retorna el primero)
longestIncreasingRun([1, 2, 2, 3]); // [1, 2]
longestIncreasingRun([5, 4, 3]); // [5]
longestIncreasingRun([]); // []
```

### Ejercicio 9 (1.0 punto)

#### Descripción

Debes implementar la función `createBankAccount` que crea un objeto cuenta bancaria con métodos públicos para consultar y modificar su saldo. El titular y el saldo no deben ser accesibles directamente desde fuera del objeto, sino únicamente a través de sus métodos.

El objeto retornado debe tener los siguientes métodos:

- `getOwner()`: Retorna el titular de la cuenta.
- `getBalance()`: Retorna el saldo actual de la cuenta.
- `deposit(amount)`: Suma `amount` al saldo solo si `amount` es un número mayor que 0. Retorna `true` si se ha realizado la operación y `false` en caso contrario.
- `withdraw(amount)`: Resta `amount` del saldo solo si `amount` es un número mayor que 0 y no supera el saldo actual. Retorna `true` si se ha realizado la operación y `false` en caso contrario.

#### Validaciones

- Si `owner` no es un string, la función debe retornar `null`.
- Si `balance` no es un número o es negativo, la función debe retornar `null`.

#### Parámetros de entrada

- `owner` (string): Titular de la cuenta.
- `balance` (número): Saldo inicial de la cuenta.

#### Retorno

- Objeto, con los cuatro métodos antes mencionados, o `null` si los parámetros son inválidos.

#### Ejemplos

```javascript
const account = createBankAccount('Ada', 100);
account.getOwner(); // "Ada"
account.getBalance(); // 100

account.deposit(50); // true
account.getBalance(); // 150

account.withdraw(30); // true
account.getBalance(); // 120

account.withdraw(500); // false (saldo insuficiente)
account.deposit('10'); // false (valor inválido)
account.getBalance(); // 120 (no cambia)
```

### Ejercicio 10 (2.0 puntos)

#### Descripción

Debes implementar la función `isHappy` que determina si un número es un **número feliz**. Para saber si un número es feliz se sigue el siguiente proceso:

1. Se sustituye el número por la suma de los cuadrados de sus dígitos.
2. Se repite el paso anterior con el nuevo número.
3. Si en algún momento se llega a 1, el número es feliz.
4. Si el proceso entra en un ciclo que no incluye el 1 (es decir, se repite un número que ya había aparecido), el número no es feliz.

Por ejemplo, 2026 es un número feliz porque 2² + 0² + 2² + 6² = 44 → 4² + 4² = 32 → 3² + 2² = 13 → 1² + 3² = 10 → 1² + 0² = 1.

En cambio, 4 no es un número feliz porque 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4, y el proceso se repite indefinidamente sin llegar nunca a 1.

#### Comportamiento

- La función debe retornar `true` si el número es feliz.
- La función debe retornar `false` si el número no es feliz o es menor que 1.

#### Parámetros de entrada

- `num` (número entero): El número a evaluar.

#### Retorno

- Booleano (`true` o `false`).

#### Ejemplos

```javascript
isHappy(1); // true
isHappy(7); // true (7 → 49 → 97 → 130 → 10 → 1)
isHappy(2026); // true (2026 → 44 → 32 → 13 → 10 → 1)
isHappy(4); // false (4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 → ...)
isHappy(0); // false
```
