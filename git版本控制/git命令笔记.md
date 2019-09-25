# git版本控制
参考文献：[廖雪峰git教程](https://www.liaoxuefeng.com/wiki/896043488029600)

## 初始化git仓库
通过` git init `命令把这个目录变成Git可以管理的仓库：
```
$ git init
Initialized empty Git repository in /Users/michael/learngit/.git/
```

## 查看当前状态
通过` git status `查看git中文件的状态
```
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   LICENSE
	modified:   readme.txt
```


## 第一步：把文件添加到本地仓库
通过` $ git add '指定文件' `命令
```
$ git add readme.txt
```
` $ git add . `命令,将当前目录下的所有文件添加到本地仓库中
```
$ git add .
```

## 第二步，把文件提交到仓库
用命令` git commit -m "自定义版本修改信息"`
```
$ git commit -m "wrote a readme file"
[master (root-commit) eaadf4e] wrote a readme file
 1 file changed, 2 insertions(+)
 create mode 100644 readme.txt
```
简单解释一下git commit命令，-m后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。

## 版本的回退
如果你有几个版本提交到本地仓库中
+ 版本1：wrote a readme file
```
Git is a version control system.
Git is free software.
```

+ 版本2：add distributed
```
Git is a distributed version control system.
Git is free software.
```

+ 版本3：append GPL
```
Git is a distributed version control system.
Git is free software distributed under the GPL.
```

### 查看历史纪录
使用` git log `命令查看历史
```
$ git log
commit 1094adb7b9b3807259d8cb349e7df1d4d6477073 (HEAD -> master)
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Fri May 18 21:06:15 2018 +0800

    append GPL

commit e475afc93c209a690c39c13a46716e8fa000c366
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Fri May 18 21:03:36 2018 +0800

    add distributed

commit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Fri May 18 20:59:18 2018 +0800

    wrote a readme file
```
友情提示:你看到的一大串类似` 1094adb... `的是commit id（版本号）

### 回退到上一个版本
在Git中，用` HEAD`表示当前版本，上一个版本就是` HEAD^`，上上一个版本就是` HEAD^^`，当然往上100个版本写100个^比较容易数不过来，所以写成` HEAD~100`。
我们要把当前版本append GPL回退到上一个版本add distributed，就可以使用` git reset`命令：
```
$ git reset --hard HEAD^
HEAD is now at e475afc add distributed
```

### git命令历史纪录
忘记commit id怎么办？没关系，Git提供了一个命令` git reflog`用来记录你的每一次命令
```
$ git reflog
e475afc HEAD@{1}: reset: moving to HEAD^
1094adb (HEAD -> master) HEAD@{2}: commit: append GPL
e475afc HEAD@{3}: commit: add distributed
eaadf4e HEAD@{4}: commit (initial): wrote a readme file
```

### 回退到指定版本
通过命令` git reset --hard commit id`回退到commit id的版本中
```
$ git reset --hard 1094a
HEAD is now at 83b0afe append GPL
```
```
┌────┐
│HEAD│
└────┘
   │
   │    ○ append GPL
   │    │
   └──> ○ add distributed
        │
        ○ wrote a readme file
```
改为指向 append GPL
```
┌────┐
│HEAD│
└────┘
   │
   └──> ○ append GPL
        │
        ○ add distributed
        │
        ○ wrote a readme file
```

## 远程仓库github&&码云
### 第1步：创建SSH Key
在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有` id_rsa`和` id_rsa.pub`这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：
```
$ ssh-keygen -t rsa -C "youremail@example.com"
```
### 第2步：登陆GitHub
打开“Account settings”，“SSH Keys”页面：

然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴` id_rsa.pub`文件的内容：

### 随时随地，进行远程推送
GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，
一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。

## 本地仓库上传远程仓库
首先，登陆GitHub，然后，在右上角找到“Create a new repo”按钮，创建一个新的仓库：
![img](https://www.liaoxuefeng.com/files/attachments/919021631860000/0)

在Repository name填入learngit，其他保持默认设置，点击“Create repository”按钮，就成功地创建了一个新的Git仓库：

![img](https://www.liaoxuefeng.com/files/attachments/919021652277920/0)

目前，在GitHub上的这个learngit仓库还是空的，GitHub告诉我们，可以从这个仓库克隆出新的仓库，也可以把一个已有的本地仓库与之关联，然后，把本地仓库的内容推送到GitHub仓库

### 关联远程仓库
创建完空的github仓库后，github会提醒你，使用如下的俩个命令进行提交
+ 要关联一个远程库，使用命令`git remote add origin git@server-name:path/repo-name.git `
+ 关联后，使用命令` git push -u origin master`第一次推送master分支的所有内容；
此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改




