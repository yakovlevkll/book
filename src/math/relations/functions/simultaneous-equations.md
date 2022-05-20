# Системы уравнений

## Идея

Рано или поздно при рассмотрении функций возникает задача нахождения общих точек для двух или нескольких функций, так называемых точек пересечения.

Какую информацию нам это даёт? Например, если мы возьмём в качестве функций зависимость положения двух объектов от времени, то точка пересечения таких функций даст нам информацию о времени и месте, где эти объекты встретятся.

<!-- Для нахождения точек пересечения двух функций, их достаточно приравнять друг другу, или, если быть точнее, необходимо решить систему уравнений, составленных из этих функций.

Допустим, у нас есть две функции

$$
\left\{
\begin{matrix}
f_1(x) = 3x + 2 \\
f_2(x) = -x + 8
\end{matrix}
\right.
$$

Тогда $x$-координата точки пересечения может быть найдена как решение следующего уравнения

$$3x + 2 = -x + 8$$
$$4x = 6$$
$$x = 1.5$$

<GraphDesmos link="ig2cbesife" /> -->

<!-- ## Решение уравнений

В функциональном анализе важным частным случаем является нахождения точек пересечения с осью $X$. Данная задача также называется решением (или нахождением корней) уравнения, соответствующего функции.

Чтобы найти $x$-координату точки пересечения с осью $X$ для функции

$$f(x) = 3x + 2$$

достаточно приравнять её правую часть к нулю и решить получившееся уравнение

$$3x + 2 = 0$$

Две линии могут пересечься либо в одной точке, либо в бесконечном количестве точек (если прямые совпадают). Второй случай нам не слишком интересен, поэтому мы будем считать, что в общем случае у линейной функции есть только один корень. -->

## Решение

Для начала рассмотрим 2 базовых метода решения систем уравнений. Основной принцип -- найти одну переменную, а затем подставить найденное значение в любое из уравнений и найти вторую переменную.

### Метод сложения/вычитания

Предположим, у нас есть система из двух уравнений

$$
\left\{
\begin{alignedat}{2}
   2&x + &&y = 10 \\
   &x + &2&y = 11
\end{alignedat}
\right.
$$

Попытаемся добиться одинаковых коэффициентов перед какой-либо из переменных. Чтобы не возиться с дробями, сделаем одинаковые коэффициенты перед $x$, умножив второе уравнение на 2.

$$
\left\{
\begin{array}{l}
2x + y = 10 \\
x + 2y = 11 \quad (* 2)
\end{array}
\right.
$$

$$
\left\{
\begin{array}{c}
2x + y = 10 \\
2x + 4y = 22
\end{array}
\right.
$$

Теперь само решение. Мы можем не только умножать или делить уравнения на какое-либо число, но и прибавлять одно уравнение к другому или вычитать одно уравнение из другого. В нашем случае коэффициенты перед $x$ имеют одинаковый знак, поэтому вычтем верхнее уравнение из нижнего.

$$2x + 4y - (2x + y) = 22 - 10$$

Если бы коэффициенты перед $x$ имели разный знак, то для избавления от $x$ уравнения пришлось бы сложить.

$$2x + 4y - 2x - y = 12$$

$$3y = 12$$

$$y = 4$$

Что произошло, если бы мы изменили порядок -- вычли бы из верхнего нижнее, а не наоборот? Ничего бы не изменилось

$$2x + y - (2x + 4y) = 10 - 22$$

$$2x + y - 2x - 4y = 10 - 22$$

$$-3y = -12$$

$$y = 4$$

Переходим ко второй части -- подставим найденное значение в любое из уравнений. Например, в первое

$$2x + y = 10$$

$$2x + 4 = 10$$

$$2x = 6$$

$$x = 3$$

Получили решение системы уравнений

$$
\left\{
\begin{array}{c}
x = 3 \\
y = 4
\end{array}
\right.
$$

Вот как это выглядит на координатной плоскости

<GraphDesmos link="ny16rgp6pz" />

Как видим, именно точка пересечения двух графиков является решением данной системы уравнений.

### Метод подстановки

Данный метод хорошо показывает себя в ситуациях, когда одно из уравнений изначально записано в подготовленном виде. Например, как второе уравнение в системе ниже

$$
\left\{
\begin{array}{c}
a - 20 = (15 + b) * 6 \\
a = (15 - b) * 10
\end{array}
\right.
$$

Остается только подставить значение $a$ в первое уравнение

$$(15 - b) * 10 - 20 = (15 + b) * 6$$

Мы получили обычное линейное уравнение

$$150 - 10b - 20 = 90 + 6b$$

$$130 - 90 = 16b$$

$$2b = 5$$

$$b = 2.5$$

Теперь подставим найденное значение в любое уравнение. В данном случае удобнее это сделать в подготовленное уравнение для $a$

$$a = (15 - b) * 10$$

$$a = (15 - 2.5) * 10$$

$$a = 125$$

Вот как решение выглядит на координатной плоскости. $a$ и $b$ заменены на $x$ и $y$

<GraphDesmos link="oq5wghuxfo" />

### Графический метод

При построении графиков могла возникнуть вполне оправданная идея -- а почему бы не решать системы уравнений сразу с помощью графиков функций? Это имеет место быть. Как мы увидим позже, данный метод хорошо показывает себя в случае с очень сложными функциями, когда не совсем понятно, как подступиться к решению.

Но у данного метода есть свои крупные недостатки.

1. Точность. Полученный результат напрямую зависит от того, насколько точны наши приборы для построения. Опережая вопрос "а как же компьютеры?" -- компьютеры тоже обладают своим разрешением. То есть компьютер, несмотря на свою мощь, не может вычислить всё с бесконечной точностью.
2. Область построения. При решении графическим способом существует большая вероятность того, что точка пересечения не попадёт в область нашего построения. Поэтому данный метод нужно использовать с аккуратностью, принимая во внимание то, как ведет себя та или иная функция в той области, где мы её не строим.

::: example

Хуан ответил на 50 вопросов теста. Известно, что за правильный ответ отвечающий получает 2 балла, за неправильный -- теряет 1 балл. Результат Хуана -- 91. На сколько вопросов Хуан дал неправильный ответ?

Самое сложное в таких задачах -- определиться с выбором переменных. Чутье к подходящему выбору приходит со временем.

Для начала выделим важную информацию:

- всего 50 вопросов
- +2 балла за правильный, -1 за неправильный
- 91 балл в результате

Известные величины измеряются в штуках (количество вопросов) и баллах (итоговый результат). Составим выражение для каждого высказывания, обозначив количество правильных ответов за $x$, а неправильных -- за $y$

$$
\left\{
\begin{array}{c}
x + y = 50 \\
2x - y = 91
\end{array}
\right.
$$

С первым уравнением всё понятно -- сумма правильных и неправильных ответов даёт общее количество вопросов теста. Но почему во втором уравнении появляются 2 и минус перед $y$?

Дело в том, что 91 измеряется в баллах. Значит, левая часть уравнения должна также измеряться в баллах. Чтобы превратить количество вопросов в количество баллов, нужно умножить количество вопросов на количество баллов за каждый вопрос. Для $x$ это +2, а для $y$ это -1.

Полученная система уравнений решается любым из упомянутых выше способов. Но удобнее в данной ситуации будет сложить уравнения, так как перед $y$ стоят одинаковые коэффициенты, но с противоположными знаками.

:::

::: task

1. У Марты 15 купюр в кошельке. В сумме -- 150 евро. Известно, что в кошельке присутствуют только купюры по 5 и по 20 евро. Сколько купюр каждого типа в кошельке?

2. В отеле есть 23 комнаты. В данный момент все комнаты полностью заселены и в отеле проживает 49 человек. Известно, что в отеле есть номера только для 2 и для 3 человек. Сколько 2-местных номеров в отеле?

3. Моника сделала 15 бросков и заработала команде 43 очка. Известно, что она делала броски только по 1 или 3 очка. Сколько 3-очковых выбросила Моника?

4. В фермерском хозяйстве папы Джо 300 литров молока разлили в 120 бутылок объемом по 5 и 2 литра. Сколько бутылок каждого вида было использовано?

5. Решить системы уравнений

   a.

   $$
   \left\{
   \begin{matrix}
   3u + v = 8 \\
   7u - 2v = 23
   \end{matrix}
   \right.
   $$

   b.

   $$
   \left\{
   \begin{matrix}
   8x + 20y = 3 \\
   2x + 5y = 16
   \end{matrix}
   \right.
   $$

   c.

   $$
   \left\{
   \begin{matrix}
   2x + 3y = 7 \\
   3x + 6y = 15
   \end{matrix}
   \right.
   $$

   d.

   $$
   \left\{
   \begin{matrix}
   3a + 5b = -4 \\
   5a - 2b = -17
   \end{matrix}
   \right.
   $$

:::