# Признаки делимости

Признак делимости -- это алгоритм, позволяющий без использования деления определить, делится ли без остатка одно число на другое.

## Простые

**Признак делимости на 10**. На 10 делится любое число, которое заканчивается на ноль.

**Признак делимости на 5**. На 5 делится любое число, которое заканчивается на 5 или на ноль.

**Признак делимости на 2**. На два делится любое чётное число. Четными являются все числа, которые заканчиваются на 2, 4, 6, 8 и 0.

**Признак делимости на 4**. На 4 делится число, у которого последние две цифры образуют число, которое делится на 4.

**Признак делимости на 8**. На 8 делится число, у которого последние три цифры образуют число, которое делится на 8.

::: todo
Почему это работает?
:::

## Немного магии

Настало время для небольшой магии.

**Признак делимости на 3**. На 3 делится число, у которого сумма цифр делится на 3.

12345 делится на 3. Почему? Потому что сумма его цифр делится на 3

$$\dfrac{1 + 2 + 3 + 4 + 5}{3} = \dfrac{15}{3} => \dfrac{1+5}{3} = 2$$

**Признак делимости на 9**. На 9 делится число, у которого сумма цифр делится на 9.

Принцип идентичен проверка делимости на 3. К примеру, для числа 76201

$$\dfrac{7 + 6 + 3 + 0 + 1}{9} = \dfrac{17}{9} => \dfrac{1 + 7}{9} = \dfrac{8}{9}$$

Целым образом 8 не делится на 9, поэтому 76201 тоже не делится на 9.

Можно отметить для себя, что нули никак не влияют на данный признак.

::: todo
Почему это работает?
:::

## Сложные

**Признак делимости на 7**.
Form the alternating sum of blocks of three from right to left.[4][6]
1,369,851: 851 _ 369 + 1 = 483 = 7 _ 69

Subtract 2 times the last digit from the rest. (Works because 21 is divisible by 7.) 483: 48 _ (3 _ 2) = 42 = 7 \* 6.

Or, add 5 times the last digit to the rest. (Works because 49 is divisible by 7.) 483: 48 + (3 _ 5) = 63 = 7 _ 9.

Or, add 3 times the first digit to the next. (This works because 10a + b _ 7a = 3a + b _ last number has the same remainder)
483: 4*3 + 8 = 20 remainder 6, 6*3 + 3 = 21.

Or, add the last two digits to twice the rest. (Works because 98 is divisible by 7.) 483,595: 95 + (2 _ 4835) = 9765: 65 + (2 _ 97) = 259: 59 + (2 \* 2) = 63.

Multiply each digit (from right to left) by the digit in the corresponding position in this pattern (from left to right): 1, 3, 2, -1, -3, -2 (repeating for digits beyond the hundred-thousands place). Then sum the results. 483,595: (4 _ (-2)) + (8 _ (-3)) + (3 _ (-1)) + (5 _ 2) + (9 _ 3) + (5 _ 1) = 7.

## Комбинированные

**Признак делимости на 6**. На 6 делится число, которое делится на 2 и на 3. То есть четное число, сумма цифр которого делится на 3.

::: task

1. Проверить делимость на 9 для следующих чисел

   - 261
   - 319
   - 7704
   - 4637

2. Проверить делимость на 6 для следующих чисел:\par

   - 775
   - 4356
   - 5478154
   - 124923

3. Проверить делимость на 4 для следующих чисел:\par

   - 722
   - 870
   - 23564492
   - 143345548

4. Проверить делимость на 8 для следующих чисел:\par

   - 6760
   - 568
   - 7352
   - 3306

5. Придумать 3 четырехзначных числа, которые одновременно делятся на 6, 8 и 10.

6. Придумать 3 трёхзначных числа, которые бы делились на 4, но не делились бы на 8. Возможно ли обратное? Почему?

7. Сформулировать признак делимости на 12.

:::

The product of all prime numbers less than 20 is closest to which of the following powers of 10? _Do not use a calculator or column method for multiplication._

- 10<sup>9</sup>
- 10<sup>8</sup>
- 10<sup>7</sup>
- 10<sup>6</sup>
- 10<sup>5</sup>

What digit will be the last in that product?

## Pandigital number

В качестве практики решим следующую задачу: найдём такое десятизначное число, первые $n$ цифр которого образуют число, которое делится на $n$.

1. 0 и 5. Из признаков делимости на 10 понятно, что число должно
   заканчиваться на 0. Тогда на пятом месте будет цифра 5 (признак
   делимости на 5).

   $$\_\ \_\ \_\ \_\ 5\ \_\ \_\ \_\ \_\ 0$$

2. Признаки делимости на 2, 4, 6, 8. Во всех этих признаках
   присутствует условие, что число должно быть чётным.

   $$
   \begin{matrix}
   2 \\
   4 \\
   \end{matrix} \\
   \begin{matrix}
   6 \\
   8 \\
   \end{matrix} \\
   \end{pmatrix}\ \_\ \begin{pmatrix}
   \begin{matrix}
   2 \\
   4 \\
   \end{matrix} \\
   \begin{matrix}
   6 \\
   8 \\
   \end{matrix} \\
   \end{pmatrix}\ 5\ \begin{pmatrix}
   \begin{matrix}
   2 \\
   4 \\
   \end{matrix} \\
   \begin{matrix}
   6 \\
   8 \\
   \end{matrix} \\
   \end{pmatrix}\ \_\ \begin{pmatrix}
   \begin{matrix}
   2 \\
   4 \\
   \end{matrix} \\
   \begin{matrix}
   6 \\
   8 \\
   \end{matrix} \\
   \end{pmatrix}\ \_\ 0
   $$

   Как можно заметить, рядом не будут стоять пара чётных чисел.

3. Проанализируем подробнее признаки делимости на 4 и 8.

   Числа, делящиеся на 4 (слева) и 8 (справа). $n$ -– любое четное число,
   $\dot{n}$ -– нечетное.

   4 8 12 16 20

   ***

   24 28 32 36 40
   44 48 52 56 60
   64 68 72 76 80
   84 88 92 96 100

   $n$08 $n$16 $n$24 $n$32 $n$40

   ***

   $n$48 $n$56 $n$64 $n$72 $n$80
   $n$88 $n$96 $\dot{n}$04 $\dot{n}$12 $\dot{n}$20
   $\dot{n}$28 $\dot{n}$36 $\dot{n}$44 $\dot{n}$52 $\dot{n}$60
   $\dot{n}$68 $\dot{n}$76 $\dot{n}$84 $\dot{n}$92 $n$00

   Из огромного количества нас интересуют только числа без нулей, пятерок, состоящие из четной+нечетной цифры. Видно, что все числа с первой нечетной цифрой в таблице для 8 нам не подходят. Причина –- либо два соседних чётных числа в конце, либо два нечетных в начале.

   Все подходящие цифры заканчиваются на 2 или 6. Значит, на 4 и 8 местах будут именно они. Тогда на 2 и 6 месте –- 4 или 8.

   $$
   4 \\
   8 \\
   \end{pmatrix}\ \\\\\\\_\ \begin{pmatrix}
   2 \\
   6 \\
   \end{pmatrix}\ 5\ \begin{pmatrix}
   4 \\
   8 \\
   \end{pmatrix}\ \\\\\\\_\ \begin{pmatrix}
   2 \\
   6 \\
   \end{pmatrix}\ \\\\\\\_\ 0\ \\\\\\\
   $$

4. Признаки делимости на 3, 6, 9. Наличие этих признаков вместе
   означает, что первые, вторые и третьи три цифры должны делиться на
   три. Можно сразу отметить, что с четвертой по шестую цифры будут
   либо 258, либо 654 (сумма равна 15).

   $$
   4 \\
   8 \\
   \end{pmatrix}\ \_\ \begin{pmatrix}
   2 \\
   6 \\
   \end{pmatrix}\ 5\ \begin{pmatrix}
   8 \\
   4 \\
   \end{pmatrix}\ \_\ \begin{pmatrix}
   6 \\
   2 \\
   \end{pmatrix}\ \_\ 0\ \
   $$

5. Двинемся дальше и рассмотрим все уникальные комбинации, которые
   можно получить на первых трех местах из цифр 1, 3, 7, 9.

   $$1 + 9 = 10$$

   $$3 + 7 = 10$$

   $$3 + 9 = 12$$

   $$7 + 9 = 16$$

   Если на втором месте стоит 4, то для признака на 3 нам подходит только
   комбинация 1 и 7. Если стоит 8, то комбинации 1 и 3, 1 и 9, 3 и 7, 7 и 9.

6. Проверим сначала четвёрку (не забываем пункт 4):

   $$147258, 147654, 741258, 741654$$

   На данном этапе всё работает. Подключим признак делимости на 7. Можем
   составить числа с 3 или 9 на конце, 1 и 7 уже использованы.

   $$14725832, 14725896, 14765432, 14765496$$

   $$74125832, 74125896, 74165432, 74165496$$

   Но на этом не остановимся, а сразу вспомним про возможные числа для
   признака на 8. Учитывая, что на седьмом месте стоит 3 или 9, то на
   восьмом должна стоять либо 2, либо 6 соответственно. Остаются

   $$14725896, 14765432, 74125896, 74165432$$

   В данной ситуации не будем мучаться с признаком на 7, а просто поделим оставшиеся числа

   $$1472589-:7 =$$

   $$1476543-:7 =$$

   $$7412589-:7 =$$

   $$7416543-:7 =$$

   Удовлетворяющий результат не получен. Значит, наше предположение о 4 на втором месте было неверным. Хоть это не положительный результат, он дает нам определенность по всем четным цифрам в числе и не только

   $$
   3 \\
   7 \\
   \end{pmatrix}\ 2\ \_\ 0
   $$

7. Вспомним пункт 4. Возможные комбинации с девятым местом

   $$\_\ 8\ \_\ 6543270$$

   $$\_\ 8\ \_\ 6547230$$

   $$\_\ 8\ \_\ 6547290$$

   $$\_8\_6543 -> \_8\_654 - 2 \_ 3 -> \_8\_64 - 2 \_ 8 -> \_8\_48$$

   $$\_8\_6547 -> \_8\_654 - 2 \_ 7 -> \_8\_64$$