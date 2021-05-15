---
layout: post
title: Hello World!
abstract: A testing article.
post_time: 2020/11/04
last_modified_time: 2021/05/15
tags:
  - Test
---
## H2

### H3

#### H4

##### H5

###### H6

行内代码 `int main(){}` 行内公式 $\gcd(a,b)$ 测试。

$$
\begin{aligned}
\sum_{k=1}^n k + 1 = n + \sum_{k=1}^n k \\
= n + \frac{n(n+1)}{2}
\end{aligned}
$$

>The sight of the stars makes me dream.

```c++
#include<iostream>
#include<cstdio>
#include<cmath>
#include<cstring>
#include<algorithm>
#include<ctime>
#include<cstdlib>
#include<queue>
#include<vector>
#include<map>
#include<set>
using namespace std;
typedef long long ll;

int main(){
	double t=0;
	for(ll i=1;;i++){
		if(i%2==1) t+=1.0f/i;
		else t-=1.0f/i;
		cout<<t<<","<<endl;
	}
	return 0;
}
```