> 来源：[The Elements of Programming](https://www.comp.nus.edu.sg/~cs1101s/sicp/chapters/2)

> 译者：[塔希](https://iheyunfei.github.io/blog/)

> 协议：[CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/)

---

# 1 使用函数构建抽象

> The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made. —— John Locke An Essay Concerning Human Understanding (1690)

我们即将开始学习 **计算过程（computational process）** 这个概念。**计算过程** 是一种栖息于电脑中、抽象的存在。经过发展，**过程** 可以操控另一种被称为 **数据（data）** 同样也是抽象的事物。**程序（Program）** 是一种含有许多规则的形式，指引着 **过程** 的进化、发展。人们创建 **程序** 来指导、控制各种 **过程**。而实际上，我们则使用咒语从计算机中变出小精灵。

对 **计算过程** 的描述正如巫师如何描述小精灵一样。小精灵并非由物质组成的实体，它们无法被看见和触摸。但是，它们却又是切切实实存在的。它们能聪明地完成任务、回答问题，通过在在银行存钱或者控制工厂里机器人的手臂对世界产生影响。我们用来“变出” **过程** 的 **程序** 就如同巫师们用来召唤小精灵的咒语一样。**程序** 是由神秘、晦涩的 **编程语言（programming languages）** 中各种符号般的表达式精心构建的，而 **编程语言** 则是一种工具，被用来描述我们想要 **过程** 完成什么样任务。（译者注：编程语言可与被看作是连接程序与过程之间的纽带）

在一台正常工作的电脑里，一个 **计算过程**  会精确且准确地的执行 **程序**。因此，就像巫师的学徒一样，新手程序员必须学习，以图理解和预测他们通过咒语使用的各种“魔法”的结果。**程序** 中存在的即使很微小的的错误[^1]都可能导致复杂且无法预料的后果。

幸运的是，学习编程要比学习魔法安全得多，因为我们要面对的“小精灵”被一种安全的方式保存着。不过，现实世界中的编程依然要求谨慎、专业和智慧。举个例子，一个小小的程序错误可能导致使用计算机辅助操控的飞机发生坠机、水坝崩坏以及工业机器人的自毁。

编程大师们掌握着高超的构建程序的能力，所以他们才能合理地确信程序产生地结果——过程，能够正确地完成其被安排的任务。编程大师们能够 **“预视”** 到系统的行为，知道该怎么组织程序的结构来避免意料之外的错误造成的毁灭后果，并且明白当错误出现时该怎么 **定位、解决** [^2]它们。设计良好的计算系统被设计时是模块化的，就像一个设计优良的汽车或核反应堆，所以每一部分都可以独立地被构建、替换和除错。


^1：英文中称为 bugs 或 glitches

^2：定位、解决程序中错误的行为在英文中称为 debug

## 使用JavaScript编程

我们需要合适的语言来描述 **过程**，为了达成这个目的，我们将会使用编程语言JavaScript。就如我们每天会用自然语言（英语，法语，日语）来表达我们日常的想法，用数学符号来描述数量的概念，我们的 **过程** 将会被用JavaScript描述。JavaScript产生于1990年早期，通过内嵌于网页内部作为脚本[^3]（scripts），用来控制网页浏览器的行为。这门语言由Brendan Eich设计出，开始被称为Mocha，后改为LiveScript，最终命名为JavaScript。这个名字“JavaScript”是属于Sun Microsystems公司的一个商标。

尽管JavaScript作为一门语言诞生时的目的是为了控制网页浏览器，但JavaScript依然是一个 **通用** 编程语言。一个JavaScript **解释器（interpreter）** 就是一部用来执行 **过程** 的机器，因为是 **JavaScript** 解释器，所以只能用于执行JavaScript描述的过程。第一个JavaScript解释器是由Eich在Netscape Communications公司期间实现的，用在Netscape Navigator网页浏览器上。JavaScript的主要 **[语言特性](http://www.yinwang.org/blog-cn/2017/07/06/master-pl)** 继承自Scheme和Self编程语言。Scheme是Lisp的一个方言，并且被当作原版SICP书籍的编程语言。从Scheme里，JavaScript继承了其大部分的函数式设计原则，例如静态作用域、一等函数公民和动态类型，结果就是本书中的程序可以很直接、简单地从原书中的Scheme翻译成JavaScript。

JavaScript仅仅与Java在表面上有相似之处[^4]，最大的关联点就是名字中都带个Java而已。JavaScript和Java都沿用了C语言的 **程序块（block structure）** 结构。与Java和C这种 **编译** 成底层语言后再执行的过程相比，JavaScript常常是被浏览器内建的解释器 **解释** 执行[^5]。在Netscape Navigator浏览器出现后，其他网页浏览器也开始提供内嵌的JavaScript解释器，包括微软的Internet Explorer浏览器（微软称其为JScript而非JavaScript）。JavaScript因为可以控制浏览器的行为而普及后，广受大众欢迎，进而引起了对JavaScript进行标准化的工作，最终产生了一个标准化的语言标准，被称为 **ECMAScript** [^6]。第一版的ECMAScript(ECMA 1997)标准由Guy Lewis Steele Jr. 主导制定于1997年6月。本书使用的是第六版[^7]，由Allen Wirfs-Brock主导制定，在2015年6月的ECMA大会上被接受。

网页可以执行内嵌其中的JavaScript程序已经成为互联网的共识，这促使了网页浏览器的开发者去实现JavaScript解释器。随着JavaScript程序变得越来越复杂，解释器的效率也变得越来越高，其中使用了一些精巧、复杂的技巧，例如 **[即时编译（JIT）](https://zh.wikipedia.org/wiki/%E5%8D%B3%E6%99%82%E7%B7%A8%E8%AD%AF)** 技术。大部分的JavaScript程序内嵌于网页，被浏览器解释执行，但是JavaScript也被用于编写苹果电脑桌面仪表板的小控件，以及控制一些软件的行为，比如Adobe Reader、Adobe Flash和一些通用的远程桌面设备。

不管怎样,对于一个在线教学编程书籍来说，可以被浏览器解释执行的能力使JavaScript成为了一门理想的编程语言。对JavaScript来说，通过在网页上点击执行JavaScript程序是非常自然的一件事——毕竟这就是JavaScript被设计出来的目的。从根本上来说，JavaScript拥有的 **语言特性** 使其成为了一个完美的工具，非常适合被用来学习、理解 **程序结构** 和 **数据结构** 的概念。同时也是一个完美的媒介，将程序结构和数据结构与支持它们的JavaScript语言特性联系起来。JavaScript的 **静态作用域**、**一等函数公民** 语言特性提供了一种简单、直接的途径来理解、应用抽象机制，**动态类型** 则使得程序使用的数据不再需要提前声明其类型。除了以上所有的考量之外，还有一点——使用JavaScript编程是很有趣的。

^3：[脚本语言](https://zh.wikipedia.org/wiki/%E8%84%9A%E6%9C%AC%E8%AF%AD%E8%A8%80)（英语：Scripting language）是为了缩短传统的“编写、编译、链接、运行”（edit-compile-link-run）过程而创建的计算机编程语言。

^4：读者可以参照雷锋和雷峰塔的关系

^5：现在编译型和解释型语言之间的界限越来越模糊，JavaScript现在也会被编译执行，而Java则是先编译然后再解释执行。

^6：读者可以认为JavaScript是ECMAScript的一种实际实现。

^7：常被称为 ECMAScript 6 或者 ECMAScript 2015


## 1.1 编程的要素


一门强力的编程语言拥有多种方法来控制电脑完成任务。同时，一门编程语言也表现的犹如一种框架，我们在其中组织自身大脑中关于过程的想法。因此，当我们谈论一门编程语言时，我们应该特别关注语言提供给我们的 **如何组合简单从而形成复杂** 的手段。任何一门强力的语言都有三种机制来帮助做到这点：

- **原始表达式**——代表一门编程语言中最简单、基础的存在，
- **组合的手段**——通过这些手段，我们可以把简单的元素组合成复合的元素，以及
- **抽象的手段**——通过这些手段，我们可以对复合元素命名，并且以单元的形式操控复合元素。

编程时，我们与 **函数** 和 **数据** 这两种元素打交道（稍后，我们会发现它们之间的的区别并没有那么明显）。通俗的讲，**数据** 是一种需要被我们操控、处理的“东西”，**函数** 则是一系列规则（对于如何操控、处理数据）的描述。因此，任何强力的编程语言都要有能力表述基础的数据和函数，并且，拥有对函数和数据进行组合和抽象的手段。

本章中，为了可以专心于构建函数的规则，我们仅仅处理简单的数值型数据[^1]。随后的章节中，我们会认识到这些规则同样使得我们可以构建函数来处理复合的数据。

^1：数值型数据其实并不简单，如何处理数值是计算机常见的难题之一。[详见](https://www.comp.nus.edu.sg/~cs1101s/sicp/chapters/2#footnote-1)

### 1.1.1 表达式

