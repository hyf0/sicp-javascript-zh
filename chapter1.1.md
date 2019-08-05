> 来源：[The Elements of Programming](https://www.comp.nus.edu.sg/~cs1101s/sicp/chapters/2)

> 译者：[塔希](https://github.com/iheyunfei/)

> 协议：[CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/)

# 1.1 编程的基本元素

一种强大的编程语言不仅仅是操控电脑完成一些任务的手段，同样也表现的犹如一种框架，我们在其中组织存在于自身大脑中关于计算过程的想法。因此，当我们描述一门编程语言时，我们应该特别关注语言提供给我们的 **如何组合简单从而形成复杂** 的手段。任何一门强大的语言都提供了三种机制来帮助做到这点：

- **基本表达式**，代表一门编程语言所关心的最简单的元素
- **组合的手段**，通过这些手段，我们可以于简单的元素之上构建复合的元素，以及
- **抽象的手段**——通过这些手段，我们可以对复合元素命名，并且以单元为个体来操控复合元素。

编程时，我们与这两种元素打交道——函数和数据（稍后，我们会发现它们之间的的区别并没有那么明显）。通俗的讲，数据是一种需要被我们操控、处理的“东西”，函数则是一系列规则（对于如何操控、处理数据）的描述。因此，任何强力的编程语言都要有能力表述基本的数据和函数，并且，拥有对函数和数据进行组合和抽象的手段。

本章中，为了可以专注于构建函数的规则，我们仅仅处理简单的数值型数据<sup id="1-1a1">[[1]](#1-1b1)</sup>。随后的章节中，我们会认识到这些规则适用于复合的数据。

<div id="1-1b1">

[[1]](#1-1a1) The characterization of numbers as simple data is a barefaced bluff. In fact, the treatment of numbers is one of the trickiest and most confusing aspects of any programming language. Some typical issues involved are these: How large a number can we represent? How many decimal places of accuracy can we represent? Above and beyond these questions, of course, lies a collection of issues concerning roundoff and truncation errors—the entire science of numerical analysis. Since our focus in this book is on large-scale program design rather than on numerical techniques, we are going to ignore these problems. The numerical examples in this chapter will exhibit the usual roundoff behavior that one observes when using arithmetic operations that preserve a limited number of decimal places of accuracy in noninteger operations.

</div>

## 1.1.1 表达式

当想要使用JavaScript开始编程时，一种简单的方式是通过与内建于浏览器(也就是你正在浏览本页面使用的)的JavaScript解释器进行互动。JavaScript programs are called statements. 我们已经编写好了一些语句，显示在下方的可以通过鼠标点击深色区域内。通过点击深色区域的JavaScript语句，一个可以对JavaScript语句进行求值的解释器会显示出来，并且可以展示求值后的结果。顺便一提，实现这些功能的程序同样由JavaScript编写；我们称呼这个鼠标点击程序为Script。<sub>(译者注：鉴于兼容性的原因，请通过点击区域下方的 **Click here to run** 来访问对应的JavaScript程序)</sub>

有一种JavaScript语句类型称为表达式语句，由一个表达式尾随一个分号组成。一个简单的表达式可以是个数字(更精确的说，这个表达式是由一个数学型符号构成，其代表着一个以10为基数的数值。)如果你要求Script程序显示这个表达式的求值结果

```js
486;
```
[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FAFgHAbA3MxA)

通过点击 Click here to run，浏览器会创建一个新的标签页，新的标签页中包含着对应的JavaScript语句和对语句进行求值的选项。赶快点击 Click here to run，然后看看会发生什么吧！

代表着数字的表达式可以通过运算符(如 + 或 * )组合，形成一个复合表达式，其表示把这些数字应用到相应的的基本函数上。

例如，通过点击 Click here to run，求值下列的任何表达式语句<sup id="1-1-1a1">[[1]](#1-1-1b1)</sup>:

```js
137 + 349;
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FARgzA7ABA1FYBYCcBuYwg)

```js
1000 - 334;
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FARgDBAEC0kMxwCwG5jCA)

```js
5* 99;
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FAVgBAVGCc0NzGEA)

```js
10 / 5;
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FARgDABA9BCsDcxhA)

```js
2.7 + 10;
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FAJgdA7ABA1FCMAGA3MYQ)

上述包含着其他表达式的表达式被称为组合式。一个有着 *运算符(operator)* 在中间，*运算对象(operand)* 在两边形状的组合式被称为 *运算符组合式(operator combinations)*。一个运算符组合式的求值结果取决于运算符对应的函数，以及应用于函数的被称为*参数(arguments)*的运算对象。

上述关于将运算符放置于运算对象中间位置的约定被称为 *中缀(infix)* 记法。它与读者在上学时熟悉的常规数学记法一样。和数学一样，运算符组合式可以 *嵌套(nested)* 的，也就是说，运算符组合式接受的参数同样也可以是运算符组合式。


```js
(3 * 5) + (10 - 6)
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FACgzABAVBCsCUEDUEQEYAMEC0EBs8A3MMEA)

按照惯例，括号被用来包裹运算符组合式来避免歧义。JavaScript同样遵守这个约定，当省略括号时，乘法和除法之间的绑定——优先级，高于加法和减法。

```js
3 * 5 + 10 / 2;
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FAZgBAVGCsYNRgIwAYwHowCYDcxhA)

等价于

```js
(3 * 5) + (10 / 2)
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FACgzABAVBCsCUEDUEQEYAMED0EBM8A3MMEA)


我们称这种情况为 * 和 / 有着比 + 和 - 更高的优先级。对于按序出现的加法和减法的序列，其阅读顺序由左到右。对于按序出现的乘法和除法的序列也是一样。因此，

```js
3 / 5 * 2 - 4 + 3;
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FAZgBA9GCsYFRgExgLRgCxgNRhAbmGCA)

等价于

```js
(((3 / 5) * 2) - 4) + 3;
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FACjGYAIHpIVgJSQFSQExILSQCxINSTgDcwwQA)


我们称 +, -, * 和 / 为左结合运算符。

原则上，对JavaScript的解释器的求值能力来讲，表达式的嵌套深度是没有限制的。但对于我们人类来说，我们甚至可以被一些相对简单的嵌套表达式搞迷糊，例如

```js
3 * 2 * (4 + (3 - 5)) + 10 * (27 / 6);
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FAZgBAVGBMlgFAFjAageAtGArASl6mAIwAMc80A7GAPRgBsuA3MMEA)

解释器则能很容易的求值出57。不过，我们可以通过以下这种方式书写表达式，帮助我们

```js
3 * 2 * (4 + (3 - 5)) 
+ 
10 * (27 / 6);
```

[Click here to run](https://sourceacademy.nus.edu.sg/playground#chap=1&prgrm=FAZgBAVGBMlgFAFjAageAtGArASl2MGsAIwAMc80A7GAPRgBsuA3MMEA)


从视觉上将表达式的主要组成部分分开。

解释器的运算过程运行在一个基本的循环中：解释器得到来自浏览器的语句，对语句进行求值，打印求值的结果。这种运算模式通常被表达成解释器运行在一个 *读入-求值-打印 循环 read-eval-print loop* 中。要特别注意的是，完全显式的打印任何语句的值是不必要的。

<div id="1-1-1b1">

[[1]](#1-1-1a1) 注意分号 **;** 使得JavaScript解释器将此表达式当作一个语句，因此被认为是一个完整的程序。但是，JavaScript本身并没有严格的要求任何时候都要带上分号，有时候可以忽略。但在本书中，我们绝不会把分号当作可选的，并且会指出哪些语句带了分号，哪些没有带。

</div>

## 1.1.2 命名和环境(Environment)

对于一门编程语言来说，相当关键的一方面就是其提供的使用名字来指代一个计算对象的手段，而我们所接触的第一个这种手段就是*常量 constants*。我们称这种命名标识了一个常量，其值是一个对象。

在JavaScript中，我们使用 *常量声明 constant declarations* 语句，键入

```js
const size = 2;
```

使得解释器将值 **2** 与名字 **size** 关联起来。这个常量声明的作用就是创造关联，而非计算出一个表达式语句特定的值。JavaScript的规范要求对 *常量声明* 语句的求值结果为 *undefined*

一旦名字 **size** 与 数字 **2** 关联起来，我们可以通过名字 **size** 来指代值 **2**

```js
size
```

or

```js
5 * size;
```

当然，在名字 **size** 可以被用在表达式之前，JavaScript解释器必须先执行 **size** 的常量声明。对于本书来说，为了简洁性，需要被事先执行的声明语句被刻意忽略了。不过，为了查看求值后的结果，你可以点击 Click here to run。在浏览器新打开的标签页中的程序会包含所有需要的语句。因此，作为点击下方的结果

```js
5 * size;
```

一个包含着所有需要语句的新标签页会被打开，其内容如下所示

```js
const size = 2;
5 * size;
```

注意到，JavaScript语句可以按序放置成一个序列。解释器会按序求值序列，然后将这个序列的最后一部分当作这个序列的值。

这里有些更进一步的关于 **const** 的使用示例

```js
const pi = 3.14159;
```

```js
const radius = 10;
```

```js
pi * radius * radius;
```

```js
const circumference = 2 * pi * radius;
```

```js
circumference;
```

常量声明是我们语言中最简单的抽象手段，它允许我们能使用简单的名字来指代复合运算结果，例如上方的 circumference。通常，计算对象可能有着非常复杂的结构，当我们想要使用这种计算对象时，如果每次都要记住和重复它们的细节，这会对我们造成的极度的不便。实际上，构建复杂的程序也就是逐步地构建复合的、渐增复杂度的计算对象。我们的解释器使得这种逐步构建程序的方式变得容易，因为通过连续地与程序进行交互，我们可以渐进的构建起名字-对象之间的联系。

需要明确的一点——在名字和值之间创建联系，在稍晚的时候使用它们意味着解释器需要某种记忆机制来保持追踪 名字-值 间的配对。这种记忆机制被称为环境(更准确的讲是全局环境，因为我们即将看到一个计算过程可能包含着大量不同的环境)。<sup id="1-1-2a1">[[1]](#1-1-2b1)</sup>

<small id="1-1-2b1">

[[1]](#1-1-2a1) 第三章会说明，对于理解解释器如何工作和如何实现解释器，环境的概念是至关重要的。

</small>

<div id="title1-1-3">

## 1.1.3 Evaluating Operator Combinations</div>

One of our goals in this chapter is to isolate issues about process descriptions. As a case in point, let us consider that, in evaluating operator combinations, the interpreter proceeds as follows.

- To evaluate an operator combination, do the following:
    1. Evaluate the operand expressions of the combination.
    2. Apply the function that is denoted by the operator to the arguments that are the values of the operands.

Even this simple rule illustrates some important points about processes in general. First, observe that the first step dictates that in order to accomplish the evaluation process for an operator expression we must first perform the evaluation process on each operand of the operator combination. Thus, the evaluation rule is recursive in nature; that is, it includes, as one of its steps, the need to invoke the rule itself.
Notice how succinctly the idea of recursion can be used to express what, in the case of a deeply nested combination, would otherwise be viewed as a rather complicated process. For example, evaluating

```js
(2 + 4 * 6) * (3 + 12);
```

requires that the evaluation rule be applied to four different combinations. We can obtain a picture of this process by representing the combination in the form of a tree, as shown in Figure 1.1. Each combination is represented by a node with branches corresponding to the operator and the operands of the operator combination stemming from it. The terminal nodes (that is, nodes with no branches stemming from them) represent either operators or numbers. Viewing evaluation in terms of the tree, we can imagine that the values of the operands percolate upward, starting from the terminal nodes and then combining at higher and higher levels. In general, we shall see that recursion is a very powerful technique for dealing with hierarchical, treelike objects. In fact, the "percolate values upward" form of the evaluation rule is an example of a general kind of process known as *tree accumulation*.

<div align="center">

![Tree representation, showing the value of each subexpression.](./images/ch1_1_3-1.png)

<p>Figure1.1 Tree representation, showing the value of each subexpression.</p>

</div>

Next, observe that the repeated application of the first step brings us to the point where we need to evaluate, not operator combinations, but primitive expressions such as numerals or names. We take care of the primitive cases by stipulating that

- the values of numerals are the numbers that they name,
- the values of names are the objects associated with those names in the environment.

Notice the role of the environment in determining the meaning of the names in expressions. In JavaScript, it is meaningless to speak of the value of an expression such as **x + 1** without specifying any information about the environment that would provide a meaning for the name x. As we shall see in chapter 3, the general notion of the environment as providing a context in which evaluation takes place will play an important role in our understanding of program execution.

Notice that the evaluation rule given above does not handle constant declarations. For instance, evaluating **const x = 3**; does not apply the = operator to two arguments, one of which is the value of the name x and the other of which is 3, since the purpose of the constant declaration is precisely to associate x with a value. (That is, the part **x = 3** in the constant declaration **const x = 3**; is not an operator combination.)

The string "const" in the constant declaration is rendered in bold letters to indicate that it is a *keyword* in JavaScript. Keywords are reserved words that carry a particular meaning, and thus cannot be used as names. A keyword or a combination of keywords instructs the JavaScript interpreter to treat the respective statement in a special way. Each such syntactic form has its own evaluation rule. The various kinds of statements (each with its associated evaluation rule) constitute the syntax of the programming language.

## 1.1.4 Functions

We have identified in JavaScript some of the elements that must appear in any powerful programming language:

- Numbers and arithmetic operations are primitive data and functions.
- Nesting of combinations provides a means of combining operations.
- Constant declarations that associate names with values provide a limited means of abstraction.

Now we will learn about *function declarations*, a much more powerful abstraction technique by which a compound operation can be given a name and then referred to as a unit.

We begin by examining how to express the idea of "squaring". We might say, "To square something, take it times itself." This is expressed in our language as square

```js
function square(x) {
    return x * x;
}
```

We can understand this in the following way:

```js
function square(    x   ) { return x    *     x; }
//  ^       ^       ^         ^    ^    ^     ^
// To    square something,  take   it times itself.
```
We have here a *compound function*, which has been given the name **square**. The function represents the operation of multiplying something by itself. The thing to be multiplied is given a local name, **x**, which plays the same role that a pronoun plays in natural language. Evaluating the declaration creates this compound function and associates it with the name square.<sup id="1-1-4a1">[[1]](#1-1-4b1)<sup>

Our simplest form of a function declaration is

> function *name*( *parameters* ) { return *expression*; }

The *name* is a symbol to be associated with the function in the environment.<sup id="1-1-4a2">[[2]](#1-1-4b1)</sup> The *parameters* are the names used within the body of the function to refer to the corresponding arguments of the function. The *expression* after the keyword **return** is the *return* expression that will yield the value of the function application when the *parameters* are replaced by the arguments to which the function is applied.<sup id="1-1-4a3">[[3]](#1-1-4b1)</sup> The parameters are grouped within parentheses and separated by commas, just as they would be in an actual call to the function being declared.

Having declared the square function, we can now use it in a *function application expressio*n, which we turn into a statement using a semicolon:

```js
square(21);
```

The name square is the function expression of the application, and 21 is the argument expression.

```js
square(2 + 5);
```

Here, the argument expression is itself a compound expression, the operator expression 2 + 5.

```js
square(square(3));
```

Of course application expressions can also serve as argument expressions.

We can also use square as a building block in declaring other functions. For example, x^2+y^2 can be expressed as

```js
square(x) + square(y);
```

We can easily declare a function sum_of_squares that, given any two numbers as arguments, produces the sum of their squares:

```js
function sum_of_squares(x,y) {
    return square(x) + square(y);
}
```

Now we can use sum_of_squares as a building block in constructing further functions:


```js
function f(a) {
    return sum_of_squares(a + 1, a * 2);
}
```

The application of functions such as **sum_of_squares(3,4)** is—after operator combination—the second kind of combination of expressions into larger expressions that we encounter. In addition to compound functions, JavaScript provides a number of primitive functions that are built into the interpreter. An example is the function **math_log** that computes the natural logarithm of its argument.<sup id="1-1-4a4">[[4]](#1-1-4b1)</sup> Evaluating the application expression **math_log(1)** results in the number 0. Primitive functions are used in exactly the same way as compound functions. Indeed, one could not tell by looking at the definition of **sum_of_squares** given above whether **square** was built into the interpreter, like **math_log**, or defined as a compound function.


<small id="1-1-4b1">

[[1]](#1-1-4a1) Observe that there are two different operations being combined here: we are creating the function, and we are giving it the name square. It is possible, indeed important, to be able to separate these two notions—to create functions without naming them, and to give names to functions that have already been created. We will see how to do this in section 1.3.2.
<br>

[[2]](#1-1-4a2) Throughout this book, we will describe the general syntax of programs by using italic symbols—e.g., name—to denote the slots in the expression to be filled in when such an expression is actually used.
<br>

[[3]](#1-1-4a3) We shall see in the next section that the body of the function can be a sequence of statements. In this case, the interpreter evaluates each statement in the sequence in turn until a return statement determines the value of the function application.
<br>

[[4]](#1-1-4a4) The Source language used in this adaptation introduces names math_* for all functions and constants in JavaScript's Math library.
</small>

## 1.1.5 The Substitution Model for Function Application

To evaluate an application combination, the interpreter follows a similar process as for operator combinations, which we described in section [1.1.3](#title1-1-3). That is, the interpreter evaluates the elements of the combination and applies the function (which is the value of the function expression) to the arguments (which are the values of the argument expressions of the application combination).

In more detail, the interpreter proceeds as follows when evaluating application combinations:

- To evaluate an application combination of the form
- > *function-expression* ( *argument-expressions* )
- do the following:
    1. Evaluate the function expression of the application combination, resulting in the function to be applied.
    2. Evaluate the argument expressions of the combination.
    3. Apply the function to the arguments:
        - If the function is primitive, we simply apply the corresponding mathematical function to the arguments.
        - If the function is compound, we evaluate the return expression of the function with each parameter replaced by the corresponding argument.

To illustrate this process, let's evaluate the application combination

```js
f(5);
```

Evaluating the name f results in the function declared in section 1.1.4. Evaluating the argument expression 5 yields the argument value 5. Now, we retrieve the return expression of f:

```js
sum_of_squares(a + 1, a * 2)
```

in which we replace the parameter a by the argument 5:

```js
sum_of_squares(5 + 1, 5 * 2)
```

Thus the problem reduces to the evaluation of an application combination with two arguments and a function expression **sum_of_squares**. Evaluating this combination involves three subproblems. We must evaluate the function expression to get the function to be applied, and we must evaluate the argument expressions to get the arguments. Now **5 + 1** produces **6** and **5 * 2** produces **10**, so we must apply the **sum_of_squares** function to **6** and **10**. These values are substituted for the parameters **x** and **y** in the return expression of **sum_of_squares**, reducing the expression to

```js
square(6) + square(10)
```
If we use the declaration of square once, this reduces to

```js
(6 * 6) + square(10)
```

which reduces by multiplication to

```js
36 + square(10)
```

A second application of square yields

```js
36 + (10 * 10)
```

which reduces by multiplication to

```js
36 + 100
```

and finally by addition to

```js
136
```

The process we have just described is called the substitution model for function application. It can be taken as a model that determines the "meaning" of function application, insofar as the functions in this chapter are concerned. However, there are two points that should be stressed:

- The purpose of the substitution is to help us think about function application, not to provide a description of how the interpreter really works. Typical interpreters do not evaluate function applications by manipulating the text of a function to substitute values for the parameters. In practice, the substitution is accomplished by using a local environment for the parameters. We will discuss this more fully in chapters 3 and 4 when we examine the implementation of an interpreter in detail.
- Over the course of this book, we will present a sequence of increasingly elaborate models of how interpreters work, culminating with a complete implementation of an interpreter and compiler in chapter 5. The substitution model is only the first of these models—a way to get started thinking formally about the evaluation process. In general, when modeling phenomena in science and engineering, we begin with simplified, incomplete models. As we examine things in greater detail, these simple models become inadequate and must be replaced by more refined models. The substitution model is no exception. In particular, when we address in chapter 3 the use of functions with mutable data, we will see that the substitution model breaks down and must be replaced by a more complicated model of function application.<sup id="1-1-5a1">[[1]](#1-1-5b1)</sup>

### Applicative order versus normal order

According to the description of evaluation given above, the interpreter first evaluates the function and argument expressions and then applies the resulting function to the resulting arguments. This is not the only way to perform evaluation. An alternative evaluation model would not evaluate the operands until their values were needed. Instead it would first substitute argument expressions for parameters until it obtained an expression involving only operators, and would then perform the evaluation. If we used this method, the evaluation of

```js
f(5)
```

```js
sum_of_squares(5 + 1, 5 * 2)
square(5 + 1)  +  square(5 * 2)
(5 + 1) * (5 + 1) + square(5 * 2)
(5 + 1) * (5 + 1) + (5 * 2) * (5 * 2)
```

followed by the reductions

```js
6 * (5 + 1) + (5 * 2) * (5 * 2)
6 * 6 + (5 * 2) * (5 * 2)
36 + (5 * 2) * (5 * 2)
36 + 10 * (5 * 2)
36 + 10 * 10
36 + 100
136
```

This gives the same answer as our previous evaluation model, but the process is different. In particular, the evaluations of **5 + 1** and **5 * 2** are each performed twice here, corresponding to the reduction of the expression

```js
x * x
```

with x replaced respectively by **5 + 1** and **5 * 2**.

This alternative fully expand and then reduce evaluation method is known as normal-order evaluation, in contrast to the evaluate the arguments and then apply method that the interpreter actually uses, which is called *applicative-order evaluation*. It can be shown that, for function applications that can be modeled using substitution (including all the functions in the first two chapters of this book) and that yield legitimate values, normal-order and applicative-order evaluation produce the same value. (See exercise 1.5 for an instance of an "illegitimate" value where normal-order and applicative-order evaluation do not give the same result.)

JavaScript uses applicative-order evaluation, partly because of the additional efficiency obtained from avoiding multiple evaluations of expressions such as those illustrated with above and, more significantly, because normal-order evaluation becomes much more complicated to deal with when we leave the realm of procedures that can be modeled by substitution. On the other hand, normal-order evaluation can be an extremely valuable tool, and we will investigate some of its implications in chapters 3 and 4.<sup id="1-1-5a2">[[2]](#1-1-5b1)</sup>

<div id="1-1-5b1">

[[1]](#1-1-5a1) Despite the simplicity of the substitution idea, it turns out to be surprisingly complicated to give a rigorous mathematical definition of the substitution process. The problem arises from the possibility of confusion between the names used for the parameters of a function and the (possibly identical) names used in the expressions to which the function may be applied. Indeed, there is a long history of erroneous definitions of substitution in the literature of logic and programming semantics. See Stoy 1977 for a careful discussion of substitution.

[[2]](#1-1-5a2) In chapter 3 we will introduce stream processing, which is a way of handling apparently infinite data structures by incorporating a limited form of normal-order evaluation. In section 4.2 we will modify the JavaScript interpreter to produce a normal-order variant of JavaScript.

</div>

## 1.1.6 Conditional Expressions and Predicates

The expressive power of the class of functions that we can declare at this point is very limited, because we have no way to make tests and to perform different operations depending on the result of a test. For instance, we cannot declare a function that computes the absolute value of a number by testing whether the number is negative or not, and taking different actions in each case according to the rule

<div align="center">

![ABS function](./images/ch1_1_6-1.png)

</div>

This construct is a case analysis and can be expressed in JavaScript using a *conditional expression* as follows:

```js
function abs(x) {
    return x >= 0 ? x : -x;
}
```

The general form of a conditional expression is

> *predicate* ? *consequent-expression* : *alternative-expression*

Conditional expressions begin with a *predicate*—that is, an expression whose value is interpreted as either *true* or *false*, two distinguished boolean values in JavaScript.<sup id="1-1-6a1">[[1]](#1-1-6b1)</sup> Note that the primitive boolean expressions true and false trivially evaluate to the boolean values *true* and *false*, respectively. The *predicate* is followed by a question mark, the *consequent-expression*, a colon, and finally the *alternative-expression*.

To evaluate a conditional expression, the interpreter starts by evaluating the *predicate* part of the expression. If the predicate evaluates to true, the interpreter evaluates *consequent-expression*. Otherwise it evaluates *alternative-expression*.

The word predicate is used for functions that return true or false, as well as for expressions that evaluate to *true* or *false*. The absolute-value function abs makes use of the primitive predicate >=. This predicate takes two numbers as arguments and tests whether the first number is greater than or equal to the second number, returning *true* or *false* accordingly.

JavaScript provides a number of primitive predicates that work similar to >=, including >, <, <=, and ===. In addition to these primitive predicates, there are logical composition operations, which enable us to construct compound predicates. The three most frequently used are these:

- **expression<sub>1</sub>** && **expression<sub>2</sub>** The interpreter evaluates **expression<sub>1</sub>**. If it evaluates to false, the value of the whole expression is false, and **expression<sub>2</sub>** is not evaluated. If **expression<sub>1</sub>** evaluates to true, the value of the whole expression is the value of **expression<sub>2</sub>**.
- **expression<sub>1</sub>** || **expression<sub>2</sub>** The interpreter evaluates **expression<sub>1</sub>**. If it evaluates to true, the value of the whole expresssion is true, and **expression<sub>2</sub>** is not evaluated. If **expression<sub>1</sub>** evaluates to false, the value of the whole expression is the value of **expression<sub>2</sub>**.
- **! expression** The value of the *expression* is *true* when expression evaluates to *false*, and *false* otherwise.

Notice that && and || are not evaluated like arithmetic operators such as +, because their right-hand expression is not always evaluated. The operator !, on the other hand, follows the evaluation rule of section 1.1.3. It is a unary operator, which means that it takes only one argument, whereas the arithmetic operators encountered so far are binary, taking two arguments. The operator ! precedes its argument; we call it a prefix operator. Another prefix operator is the unary "minus" operator, an example of which is the expression -x of the function abs in the beginning of this section.

As an example of how these predicates are used, the condition that a number x be in the range 5<x<10 may be expressed as

```js
x > 5 && x < 10
```

Note that the binary operator && has lower precedence than the comparison operators > and <.

As another example, we can declare a predicate to test whether one number is not equal to another number.

```js
function not_equal(x, y) {
    return x > y || x < y;
}
```

or alternatively as

```
function not_equal(x, y) {
    return !(x >= y && x <= y);
}
```

Note that the operator !== when applied to two numbers, behaves the same as not_equal.

## Exercise

### Exercise1.1

Below is a sequence of statements. Before you click on a statement, predict what the result of its evaluation will be.

```js
10;
```

```js
5 + 3 + 4;
```

```js
9 - 1;
```

```js
6 / 2;
```

```js
2 * 4 + (4 - 6);
```

```js
const a = 3;
```

```js
const b = a + 1;
```

```js
a + b + a * b;
```

```js
a === b;
```


```js
b > a && b < a * b 
   ? b : a;
```


```js
a === 4 ? 6 : b === 4 ? 6 + 7 + a : 25;
```


```js
2 + (b > a ? b : a);
```


```js
(a > b
 ? a
 : a < b
   ? b
   : -1)
*
(a + 1);
```

Note that the statement

```js
a === 4 ? 6 : b === 4 ? 6 + 7 + a : 25;
```

consists of two conditional expressions, where the second one forms the alternative of the first one. If you want to make that clear, you can indent the lines like this:

```js
a === 4
? 6
: b === 4 
  ? 6 + 7 + a
  : 25;
```

<details>

<summary>
点击查看答案
</summary>

无

</details>

### Exercise1.2

Translate the following expression into JavaScript

```
5+4+(2−(3−(6+4/5)))
————————————————————
    3(6−2)(2−7)
```

<details>

<summary>
点击查看答案
</summary>

```js
(5 + 4 + (2 - (3 - (6 + 4 / 5)))) 
/
(3 * (6 - 2) * (2 - 7));
```

</details>

### Exercise1.3

Declare a function that takes three numbers as arguments and returns the sum of the squares of the two larger numbers.

<details>

<summary>
点击查看答案
</summary>

```js
function f(x, y, z) {
   return square(x) + square(y) + square(z) -
          // subtract the square of the smallest
          square(x > y ? (y > z ? z : y) : (x > z ? z : x));
}
```

</details>

### Exercise1.4

Observe that our model of evaluation allows for application combinations whose function expressions are compound expressions. Use this observation to describe the behavior of the following function:

```js
function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
}
```

Note that in the conditional expression, we cannot directly use the operators + and - instead of the names plus and minus because in infix notation, only operator symbols are allowed in the middle, not compound expressions.<sup id="1-1-6a2">[[2]](#1-1-6b1)</sup>

<details>

<summary>
点击查看答案
</summary>

According to section 1.1.5, evaluation of a application expression proceeds as follows:

- Evaluate the function expression of the application combination, resulting in the function to be applied.
- Evaluate the argument expressions of the combination.
- Evaluate the return expression of the function with each parameter replaced by the corresponding argument.

Thus the evaluation of the application expression a_plus_abs_b(5, -4) (1) evaluates a_plus_abs_b, resulting in the function given above, and (2) the arguments are already values. So we need to evaluate (3) the return expression of the function, with the parameters replaced by the arguments, thus: (-4 >= 0 ? plus : minus)(5, -4). With the same rules, we need to (1) evaluate the function expression, which in this case is the conditional expression -4 >= 0 ? plus : minus. Since the predicate evaluates to false, the function expression evaluates to minus. The arguments, again (2) are already values. Thus we end up evaluating (3) the body of minus with the parameters a and b replaced by 5 and -4, respectively, resulting in 5 - (-4), which will finally evaluate to 9.

</details>

### Exercise1.5

Ben Bitdiddle has invented a test to determine whether the interpreter he is faced with is using applicative-order evaluation or normal-order evaluation. He declares the following two functions :

```js
function p() {
    return p();
}

function test(x, y) {
    return x === 0 ? 0 : y;
}
```

Then he evaluates the statement

```js
test(0, p());
```

What behavior will Ben observe with an interpreter that uses applicative-order evaluation? What behavior will he observe with an interpreter that uses normal-order evaluation? Explain your answer. (Assume that the evaluation rule for conditional expressions is the same whether the interpreter is using normal or applicative order: The predicate expression is evaluated first, and the result determines whether to evaluate the consequent or the alternative expression.)

<details>

<summary>
点击查看答案
</summary>

> In applicative-order evaluation of test(0, p()), we need to evaluate the argument expressions before we can evaluate the return expression of the function test. The evaluation of the argument expression p() will not terminate, however: It will keep evaluating application expressions of the form p(), and thus the evalution of test(0, p()) will not produce a legitimate value. In normal-order evaluation, on the other hand, the function application test(0, p()) would immediately evaluate the return expression of the function test, x === 0 ? 0 : y after replacing the parameter x with 0 and y with p(). The result of the replacing would be 0 === 0 ? 0 : p(). The evaluation of the predicate 0 === 0 results in true and thus the conditional expression evaluates to 0, without any need to evaluate p().

</details>

<div id="1-1-6b1">

[[1]](#1-1-6a1) In JavaScript, other values are automcatically converted into true and false according to conversion rules, but we choose not to make use of these conversion rules in this book.

[[2]](#1-1-6a2) For an expression of the form a (b > 0 ? + : -) b the JavaScript interpreter would not know the precedence of the operator between a and b, and therefore such expressions are not allowed.

</div>
