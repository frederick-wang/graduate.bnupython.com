---
prev: ./ex3_beginners_village_part3
---

# EX4: 新手村（终）

洛谷作业地址：[https://www.luogu.com.cn/training/383975](https://www.luogu.com.cn/training/383975)

## 目录

- 前言
- 题目列表
- 注意事项
- 提示
  - 0. T380423 予沛约会
  - 1. T380424 予沛骑单车
  - 2. T380434 予沛兑换独角兽
  - 3. T323912 予沛赶路
  - 4. T380437 精灵分宝石
  - 5. T380452 小精灵摘金苹果（升级版）
  - 6. T380428 予沛逛集市
  - 7. T281068 予沛买龙血
  - 8. T323848 予沛与月亮女神
  - 9. T380451 勇者与宝藏
  - 10. T323914 勇者攀登魔法塔
  - 11. T380455 魔法咒文排序挑战
  - 12. T380459 远古魔法组合
  - 13. T281044 予沛驯服独角兽
  - 14. T380439 勇者大破迷宫杀机
- Python 3.8 官方文档相关章节

## 前言

> It's harder to read code than to write it.
>
> —— Joel Spolsky

在编程的世界中，**读代码比写代码困难。** 所以，尽量让自己能读懂你自己写的代码。听起来像一句废话，但做到这一点这并不容易——你**真的能读懂**你自己写的代码吗？

本次练习的部分题目来自历年 NOIP 普及组（也就是初中组）中的简单题——但不用担心，我们不需要用 C++ 来解决这些问题，在我们手中的工具是易用的 Python。

如果某些题目让你感到没有头绪，可以看看「提示」章节，也许会找到一些灵感。

## 题目列表

| 序号 | 题目 |
| :----------: | :----------: |
| 0 | [T380423 予沛约会](https://www.luogu.com.cn/problem/T380423) |
| 1 | [T380424 予沛骑单车](https://www.luogu.com.cn/problem/T380424) |
| 2 | [T380434 予沛兑换独角兽](https://www.luogu.com.cn/problem/T380434) |
| 3 | [T323912 予沛赶路](https://www.luogu.com.cn/problem/T323912) |
| 4 | [T380437 精灵分宝石](https://www.luogu.com.cn/problem/T380437) |
| 5 | [T380452 小精灵摘金苹果（升级版）](https://www.luogu.com.cn/problem/T380452) |
| 6 | [T380428 予沛逛集市](https://www.luogu.com.cn/problem/T380428) |
| 7 | [T281068 予沛买龙血](https://www.luogu.com.cn/problem/T281068) |
| 8 | [T323848 予沛与月亮女神](https://www.luogu.com.cn/problem/T323848) |
| 9 | [T380451 勇者与宝藏](https://www.luogu.com.cn/problem/T380451) |
| 10 | [T323914 勇者攀登魔法塔](https://www.luogu.com.cn/problem/T323914) |
| 11 | [T380455 魔法咒文排序挑战](https://www.luogu.com.cn/problem/T380455) |
| 12 | [T380459 远古魔法组合](https://www.luogu.com.cn/problem/T380459) |
| 13 | [T281044 予沛驯服独角兽](https://www.luogu.com.cn/problem/T281044) |
| 14 | [T380439 勇者大破迷宫杀机](https://www.luogu.com.cn/problem/T380439) |

## 注意事项

- 提交答案时，一定要将语言设置为“Python 3”（默认是 C++）；
- 耐心读题，确保已经理解了题意、数据类型、输入输出要求后再作答；
- 计算机没有玄学，如果 `WA (Wrong Answer)` 了，仔细分析原因，思考为什么出错，带着理由修改代码，而不是盲目修改代码；
- 建议不要打印多余的空格和空行。

## 提示

### 0. T380423 予沛约会

简单的判断。

### 1. T380424 予沛骑单车

小学数学应用题。

### 2. T380434 予沛兑换独角兽

注意，黑曜石和白水晶之间的连接词是“或”。

### 3. T323912 予沛赶路

细心即可。

### 4. T380437 精灵分宝石

不要想复杂。

### 5. T380452 小精灵摘金苹果（升级版）

同样不要想复杂。在对问题求解时，可以总是做出在当前看来是最好的选择——如果选择的方法得当，那么局部最优就是全局最优。

### 6. T380428 予沛逛集市

简单的循环。

### 7. T281068 予沛买龙血

每次选单价最小的。

### 8. T323848 予沛与月亮女神

如果不知道怎么递推，斐波那契数列其实还有一个数学家证明过的通项公式：

$$
F_n=\dfrac{\left(\frac{1+\sqrt{5}}{2}\right)^n-\left(\frac{1-\sqrt{5}}{2}\right)^n}{\sqrt{5}}
$$

但逃课是不好的，所以还是要学会递推。

### 9. T380451 勇者与宝藏

这是一道小白同学很容易写出来，但稍微懂一些算法基础的同学反而很容易想复杂的题目。

让我们再回顾一下这句话：

> Simplicity is prerequisite for reliability.
>
> —— Edsger W. Dijkstra

在编程的世界中，**简单是可靠的前提。**

### 10. T323914 勇者攀登魔法塔

如果你写 [T323848 予沛与月亮女神](https://www.luogu.com.cn/problem/T323848) 时逃课了，但这道题八成会把你卡住。

可以考虑：上到第 $N$ 级楼梯的走法数，与是否和之前上到第 $1, 2, \dots, N - 1$ 级楼梯的走法数有关？

如果有关，和哪些有关？

### 11. T380455 魔法咒文排序挑战

传说中的高中数学知识点：全排列。

在编程中，全排列同样是经典的递归问题。我们会将这种编程思想称之为「深度优先搜索」。

Python 已经提供了快速计算排列的内置方法，可以利用 `itertools` 库中的 `permutations` 函数。

### 12. T380459 远古魔法组合

传说中的高中数学知识点：组合。

在编程中，组合同样是经典的递归问题，它和全排列很相似哦。

Python 已经提供了快速计算组合的内置方法，可以利用 `itertools` 库中的 `combinations` 函数。

### 13. T281044 予沛驯服独角兽

如果你用深度优先搜索发现超时了，也许可以考虑加个「缓存」。我们将这种方法称之为「记忆化搜索」。

实际上，「记忆化搜索」和我们常听到的一个高大上的名词「动态规划」是一回事。

### 14. T380439 勇者大破迷宫杀机

有深度优先搜索，自然就有广度优先搜索。

如果你用广度优先搜索时发现一直超时，可能是因为用 `list` 做队列太慢了，可以考虑用 `collections` 库中的 `deque` 来加速，它的速度很快。

## Python 3.8 官方文档相关章节

官方文档中的一些内容可能对初学者而言过于晦涩，难以理解，所以也**不必强迫自己一开始就理解其中的全部内容**——等用到时回头再看，自然就会有所感悟。

1. [Python 教程](https://docs.python.org/zh-cn/3.8/tutorial/index.html)
1. [input()](https://docs.python.org/zh-cn/3.8/library/functions.html#input)
1. [print()](https://docs.python.org/zh-cn/3.8/library/functions.html#print)
1. [数字类型 --- int, float, complex](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#numeric-types-int-float-complex)
1. [文本序列类型 --- str](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#text-sequence-type-str)
1. [序列类型 --- list, tuple, range](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#sequence-types-list-tuple-range)
1. [映射类型 --- dict](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#mapping-types-dict)
1. [集合类型 --- set](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#set-types-set-frozenset)
1. [列表推导式](https://docs.python.org/zh-cn/3.8/tutorial/datastructures.html#list-comprehensions)
1. [序列解包](https://docs.python.org/zh-cn/3.8/tutorial/datastructures.html#tuples-and-sequences)
1. [math --- 数学函数](https://docs.python.org/zh-cn/3.8/library/math.html)
1. [格式化字符串字面值 (f-string)](https://docs.python.org/zh-cn/3.8/reference/lexical_analysis.html#formatted-string-literals)
1. [格式规格迷你语言](https://docs.python.org/zh-cn/3.8/library/string.html#format-specification-mini-language)
1. [chr() - 内置函数](https://docs.python.org/zh-cn/3.8/library/functions.html#chr)
1. [ord() - 内置函数](https://docs.python.org/zh-cn/3.8/library/functions.html#ord)
