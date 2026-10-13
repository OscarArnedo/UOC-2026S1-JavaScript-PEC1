# PJP PAC 1

En aquesta PAC practicarem la programació amb JavaScript mitjançant exercicis concrets que avaluaran una o diverses característiques del llenguatge.

## Competències

En aquesta PAC es desenvolupen les següents competències del Màster:

* [CB10] Que els estudiants posseeixin les habilitats d'aprenentatge que els permetin continuar estudiant d'una manera que haurà de ser en gran mesura autodirigida o autònoma.
* [CG1] Analitzar i sintetitzar informació tècnica complexa.
* [CE3] Utilitzar de manera adequada els llenguatges de programació i les millors eines de desenvolupament per a l'anàlisi, el disseny i la implementació de llocs i aplicacions web en funció de les necessitats del projecte.
* [CE8] Adaptar-se a les tecnologies web i als futurs entorns actualitzant les competències professionals.

## Objectius

Els objectius concrets d'aquesta PAC són:

* Aprendre a utilitzar JavaScript i les seves característiques bàsiques.
* Contribuir a conèixer a fons el llenguatge JavaScript per poder utilitzar-lo en el desenvolupament d'aplicacions Web.

## Lliurament de la PAC

Un cop hagis realitzat les activitats pràctiques proposades en aquest enunciat, el lliurament es farà enviant els teus canvis a l'apartat de l'aula virtual de la UOC, comprimits en un **arxiu ZIP**.

## Puntuació

El fet de treballar amb tests per verificar la funcionalitat del codi et permetrà tenir una idea de la teva pròpia nota abans del lliurament.

La puntuació dels exercicis pràctics es basa en dos criteris: **Funcionalitat** i **Implementació**. S'espera que els exercicis funcionin correctament (passin els tests) i que la implementació (el codi) tingui una qualitat adequada.

Alguns detalls a tenir en compte:

- Es penalitzarà qualsevol intent de _hardcodejar_ els tests per forçar que passin. Aquesta tècnica consisteix a canviar la implementació perquè retorni únicament el valor esperat pel test (qualsevol altre test fallaria).
- Els tests automàtics estan dissenyats per detectar exercicis erronis o incomplets per a casos concrets. El fet que un test passi no garanteix que l'exercici estigui realitzat correctament, és a dir, que cobreixi tots els casos.
- Un exercici els tests del qual no passen es puntuarà amb un 0 llevat que existeixin problemes amb el test.
- A més de passar els tests, el professorat avaluarà el vostre codi en base als següents criteris:
  - Llegibilitat, senzillesa i qualitat del codi.
  - Coneixements de programació. Per exemple, no utilitzar les estructures de control adequades, com utilitzar un bucle per construir una sentència condicional o viceversa.
  - Capacitat de síntesi i reutilització de codi.

## Requisits mínims

- Tenir instal·lat Visual Studio Code (VSC), o qualsevol altre IDE.
- Estudi de la introducció i repàs a JavaScript (Activitat 1 del Repte 1).

## Exercicis pràctics (10 punts)

Per realitzar els exercicis pràctics has de dirigir-te a la següent ruta, dins del repositori: `src/pec1.js`.
En aquest fitxer hauràs d'implementar les funcions que t'indiquem en els exercicis que veuràs més avall.

D'altra banda, els tests que et permetran saber si la solució que proposes per als exercicis és incorrecta estan al fitxer `src/pec1.test.js`.
**No has d'editar mai aquest fitxer**.
Tingues en compte que els tests són condicions que han de complir les funcions que implementaràs en els exercicis, per la qual cosa et poden servir d'ajuda per corregir-los.

### Preparant l'entorn

```
npm install
```

A continuació, per llançar els tests has d'executar la següent comanda:

```
npm t
```

La instrucció anterior llançarà els tests cada vegada que guardis el fitxer `src/pec1.js`, que és precisament on implementaràs els exercicis d'aquesta PAC.

La primera vegada que executis `npm t` i es llancin els tests, fallaran tots, ja que no hi ha cap exercici implementat. A mesura que vagis treballant en els exercicis i guardis el fitxer, pot ser que algun test llanci algun error. Revisa el missatge d'error que s'imprimeix per conèixer el seu format i entendre com es notifiquen els errors.

Si tens algun problema amb els tests, no dubtis a preguntar al fòrum "Dudas PEC 1 | Dubtes PAC 1" de l'aula.

### Exercici 1 (0.5 punts)

#### Descripció

Has d'implementar la funció `stretchString` que genera un string en el qual cada caràcter del string original es repeteix tantes vegades com indica la seva posició (començant a comptar des de l'1).

Per exemple, si l'input és `"abc"`, la funció ha de:

1. Repetir el primer caràcter 1 vegada: `"a"`
2. Repetir el segon caràcter 2 vegades: `"bb"`
3. Repetir el tercer caràcter 3 vegades: `"ccc"`
4. No queden més caràcters: acaba el procés

Resultat final: `"abbccc"`

#### Paràmetres d'entrada

- `str` (string): Cadena de text d'entrada. Pot ser buida.

#### Retorn

- String, amb el resultat de la concatenació.

#### Exemples

```javascript
stretchString(''); // ""
stretchString('abc'); // "abbccc"
stretchString('UOC'); // "UOOCCC"
```

### Exercici 2 (1.0 punt)

#### Descripció

Has d'implementar la funció `isPalindrome` que determina si un text és un palíndrom. Un palíndrom és un text que es llegeix igual d'esquerra a dreta que de dreta a esquerra.

#### Comportament

- La funció ha d'ignorar la diferència entre majúscules i minúscules.
- La funció ha d'ignorar els espais.
- Un string buit es considera palíndrom.
- Pots suposar que els textos no contindran accents ni signes de puntuació.

#### Paràmetres d'entrada

- `text` (string): Text a avaluar.

#### Retorn

- Booleà (`true` o `false`).

#### Exemples

```javascript
isPalindrome('radar'); // true
isPalindrome('Anita lava la tina'); // true
isPalindrome('hola'); // false
```

### Exercici 3 (0.5 punts)

#### Descripció

Has d'implementar la funció `countInRange` que compta quants elements d'un array es troben dins d'un rang de valors, amb tots dos extrems inclosos.

#### Comportament

- La funció ha de comptar únicament els elements que siguin més grans o iguals que `min` i més petits o iguals que `max`.
- Si no hi ha elements dins del rang, la funció ha de retornar 0.
- Si l'array és buit, la funció ha de retornar 0.

#### Paràmetres d'entrada

- `arr` (array de nombres): Array que conté els elements a avaluar.
- `min` (nombre): Límit inferior del rang (inclòs).
- `max` (nombre): Límit superior del rang (inclòs).

#### Retorn

- Nombre, amb la quantitat d'elements que són dins del rang.

#### Exemples

```javascript
countInRange([1, 2, 3, 4, 5], 2, 4); // 3
countInRange([5, 5, 5, 5], 5, 5); // 4
countInRange([], 0, 100); // 0
```

### Exercici 4 (1.0 punt)

#### Descripció

Has d'implementar la funció `getDigits` que retorna un array amb els dígits d'un nombre enter, en el mateix ordre en què apareixen en el nombre.

#### Comportament

- La funció ha de retornar un array amb els dígits del nombre, ordenats d'esquerra a dreta.
- Els elements de l'array han de ser de tipus nombre (no strings).
- Si el nombre és negatiu, s'ignora el signe.
- El nombre 0 té un únic dígit: `[0]`.

#### Paràmetres d'entrada

- `num` (nombre enter): El nombre del qual es volen obtenir els dígits.

#### Retorn

- Array de nombres enters.

#### Exemples

```javascript
getDigits(2026); // [2, 0, 2, 6]
getDigits(-507); // [5, 0, 7]
getDigits(0); // [0]
```

### Exercici 5 (0.5 punts)

#### Descripció

Has d'implementar la funció `transformText` que transforma un string segons el mode indicat.

#### Comportament

- Si `mode` és `'upper'`, converteix el string a majúscules.
- Si `mode` és `'lower'`, converteix el string a minúscules.
- Si `mode` és `'reverse'`, inverteix l'ordre dels caràcters del string.
- Si `mode` té qualsevol altre valor o aquest no es proporciona, retorna el string original sense canvis.

#### Paràmetres d'entrada

- `text` (string): Text a transformar.
- `mode` (string): Transformació a aplicar. Pot ser `'upper'`, `'lower'` o `'reverse'`.

#### Retorn

- String resultant, després d'aplicar la transformació.

#### Exemples

```javascript
transformText('hola', 'upper'); // "HOLA"
transformText('JavaScript', 'lower'); // "javascript"
transformText('hola', 'reverse'); // "aloh"
```

### Exercici 6 (1.0 punt)

#### Descripció

Has d'implementar la funció `isArmstrong` que determina si un nombre és un **nombre d'Armstrong** (també anomenat nombre narcisista). Un nombre d'Armstrong és aquell que és igual a la suma dels seus dígits elevats, cadascun, al nombre total de dígits.

Per exemple, 153 és un nombre d'Armstrong perquè té 3 dígits i 1³ + 5³ + 3³ = 1 + 125 + 27 = 153.

#### Comportament

- La funció ha de retornar `true` si el nombre és d'Armstrong.
- La funció ha de retornar `false` si el nombre no és d'Armstrong o és negatiu.
- Tots els nombres d'un sol dígit (inclòs el 0) són nombres d'Armstrong.

#### Paràmetres d'entrada

- `num` (nombre enter): El nombre a avaluar.

#### Retorn

- Booleà (`true` o `false`).

#### Exemples

```javascript
isArmstrong(153); // true (1³ + 5³ + 3³ = 153)
isArmstrong(1634); // true (1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634)
isArmstrong(154); // false (1³ + 5³ + 4³ = 190 ≠ 154)
isArmstrong(-153); // false
```

### Exercici 7 (1.0 punt)

#### Descripció

Has d'implementar la funció `convertTemperature` que converteix una temperatura entre les escales Celsius (`'C'`), Fahrenheit (`'F'`) i Kelvin (`'K'`).

Les fórmules de conversió són les següents:

- De Celsius a Fahrenheit: `F = C * 9 / 5 + 32`
- De Fahrenheit a Celsius: `C = (F - 32) * 5 / 9`
- De Celsius a Kelvin: `K = C + 273.15`
- De Kelvin a Celsius: `C = K - 273.15`

#### Comportament

- Si totes dues unitats són vàlides (`'C'`, `'F'`, `'K'`), realitza la conversió corresponent.
- Si la unitat d'origen i la de destinació són la mateixa, retorna el mateix valor.
- Les unitats distingeixen entre majúscules i minúscules (`'c'` no és una unitat vàlida).
- Si alguna de les unitats no és vàlida, retorna el següent string: `'Error: Invalid unit'`.

#### Paràmetres d'entrada

- `value` (nombre): Temperatura a convertir.
- `from` (string): Unitat d'origen. Pot ser `'C'`, `'F'` o `'K'`.
- `to` (string): Unitat de destinació. Pot ser `'C'`, `'F'` o `'K'`.

#### Retorn

- Nombre amb la temperatura convertida, o string amb el corresponent missatge d'error.

#### Exemples

```javascript
convertTemperature(451, 'F', 'C'); // 232.77777777777777
convertTemperature(0, 'K', 'C'); // -273.15
convertTemperature(300, 'K', 'F'); // 80.33
convertTemperature(25, 'C', 'X'); // "Error: Invalid unit"
```

### Exercici 8 (1.5 punts)

#### Descripció

Has d'implementar la funció `longestIncreasingRun` que troba el tram **consecutiu** més llarg d'un array els elements del qual siguin estrictament creixents (cada element és més gran que l'anterior).

#### Comportament

- El tram ha d'estar format per elements contigus de l'array original, respectant el seu ordre.
- Dos elements iguals consecutius trenquen el tram creixent.
- Si hi ha diversos trams amb la mateixa longitud màxima, retorna el primer d'ells.
- Si l'array és buit, retorna un array buit.
- La funció no ha de modificar l'array original.

#### Paràmetres d'entrada

- `nums` (array de nombres): Array de nombres on buscar el tram.

#### Retorn

- Array de nombres, amb el tram creixent més llarg.

#### Exemples

```javascript
longestIncreasingRun([1, 2, 0, 3, 4, 5, 1]); // [0, 3, 4, 5]
longestIncreasingRun([3, 4, 1, 2]); // [3, 4] (empat: es retorna el primer)
longestIncreasingRun([1, 2, 2, 3]); // [1, 2]
longestIncreasingRun([5, 4, 3]); // [5]
longestIncreasingRun([]); // []
```

### Exercici 9 (1.0 punt)

#### Descripció

Has d'implementar la funció `createBankAccount` que crea un objecte compte bancari amb mètodes públics per consultar i modificar el seu saldo. El titular i el saldo no han de ser accessibles directament des de fora de l'objecte, sinó únicament a través dels seus mètodes.

L'objecte retornat ha de tenir els següents mètodes:

- `getOwner()`: Retorna el titular del compte.
- `getBalance()`: Retorna el saldo actual del compte.
- `deposit(amount)`: Suma `amount` al saldo només si `amount` és un nombre més gran que 0. Retorna `true` si s'ha realitzat l'operació i `false` en cas contrari.
- `withdraw(amount)`: Resta `amount` del saldo només si `amount` és un nombre més gran que 0 i no supera el saldo actual. Retorna `true` si s'ha realitzat l'operació i `false` en cas contrari.

#### Validacions

- Si `owner` no és un string, la funció ha de retornar `null`.
- Si `balance` no és un nombre o és negatiu, la funció ha de retornar `null`.

#### Paràmetres d'entrada

- `owner` (string): Titular del compte.
- `balance` (nombre): Saldo inicial del compte.

#### Retorn

- Objecte, amb els quatre mètodes esmentats anteriorment, o `null` si els paràmetres són invàlids.

#### Exemples

```javascript
const account = createBankAccount('Ada', 100);
account.getOwner(); // "Ada"
account.getBalance(); // 100

account.deposit(50); // true
account.getBalance(); // 150

account.withdraw(30); // true
account.getBalance(); // 120

account.withdraw(500); // false (saldo insuficient)
account.deposit('10'); // false (valor invàlid)
account.getBalance(); // 120 (no canvia)
```

### Exercici 10 (2.0 punts)

#### Descripció

Has d'implementar la funció `isHappy` que determina si un nombre és un **nombre feliç**. Per saber si un nombre és feliç se segueix el procés següent:

1. Se substitueix el nombre per la suma dels quadrats dels seus dígits.
2. Es repeteix el pas anterior amb el nou nombre.
3. Si en algun moment s'arriba a 1, el nombre és feliç.
4. Si el procés entra en un cicle que no inclou l'1 (és a dir, es repeteix un nombre que ja havia aparegut), el nombre no és feliç.

Per exemple, 2026 és un nombre feliç perquè 2² + 0² + 2² + 6² = 44 → 4² + 4² = 32 → 3² + 2² = 13 → 1² + 3² = 10 → 1² + 0² = 1.

En canvi, 4 no és un nombre feliç perquè 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4, i el procés es repeteix indefinidament sense arribar mai a 1.

#### Comportament

- La funció ha de retornar `true` si el nombre és feliç.
- La funció ha de retornar `false` si el nombre no és feliç o és menor que 1.

#### Paràmetres d'entrada

- `num` (nombre enter): El nombre a avaluar.

#### Retorn

- Booleà (`true` o `false`).

#### Exemples

```javascript
isHappy(1); // true
isHappy(7); // true (7 → 49 → 97 → 130 → 10 → 1)
isHappy(2026); // true (2026 → 44 → 32 → 13 → 10 → 1)
isHappy(4); // false (4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 → ...)
isHappy(0); // false
```
