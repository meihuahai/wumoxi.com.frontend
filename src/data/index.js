const ID_1_CONTENT = `## 序述

## 源数组

\`\`\`javascript
var arr = ["George", "John", "Thomas", "James", "Adrew", "Martin"];
\`\`\`

## 伪删除

> 什么是伪删除呢? 就是说将数组元素值设置为null;

\`\`\`javascript
arr[ arr.indexOf( 'Thomas' ) ] = null;
\`\`\`

> 删除后的数组是这个样子的:

\`\`\`javascript
["George", "John", null, "James", "Adrew", "Martin"]
\`\`\`

> 不过要注意, 这意味着数组Array也就是变量arr的长度保持不变

## 完全删除

> 是什么是完全删除呢? 这个问题你可能从字面上也能想得到就是真正的删除数组Array的元素值, 并且会改变数组的长度, 可以通过内置数组对象Array的splice方法来实现这个需求！说到splice这个方法就要说一说它的具体参数了：

\`\`\`javascript
Array.prototype.splice = function(start,deleteCount,items) {};
\`\`\`

> 上面是内置对象Array的splice方法原型定义, 中文意思呢是：\`剪接\`, 其参数的意义是：

- \`start\`: 起点索引值

- \`deleteCount\`: 要删除的元素个数

- \`items\`: 删除后替换/追加的元素

    - 参数不加时就表示删除元素, 并且还要结合 \`deleteCount\` 的参数值

    - 如果 \`deleteCount\` 为 \`1\`, \`items\` 参数位置给一个参数值, 则表示替换

    - 如果 \`deleteCount\` 为 \`1\`, \`items\` 参数位置给多于一个的参数值, 则表示替换及追加元素

> 通过splice方法删除上面 \`伪删除\` 留下的元素值 \`null\`


\`\`\`javascript
arr.splice( arr.indexOf( null ), 1 );
\`\`\`

> 删除后的数组是这个样子的:

\`\`\`javascript
["George", "John", "James", "Adrew", "Martin"]
\`\`\`

> 既然说到了splice方法就顺便再说一下它的其它功能, 如 \`替换元素\`, \`追加元素\` 等操作吧！

### splice函数 - 替换元素

> 现在数组结构是这样的：

\`\`\`javascript
["George", "John", "James", "Adrew", "Martin"]
\`\`\`

> 想要将数组元素 \`James\` 替换为 \`Tom\`

\`\`\`javascript
arr.splice( arr.indexOf( 'James' ), 1, 'Tom' );
\`\`\`

> 替换后的数组结构是这个样子的：

\`\`\`javascript
["George", "John", "Tom", "Adrew", "Martin"]
\`\`\`

### splice函数 - 替换并追加元素

> 现在当前数组结构是这样的：

\`\`\`javascript
["George", "John", "Tom", "Adrew", "Martin"]
\`\`\`

> 想要将数组元素 \`Tom\` 替换为 \`Judy\` 并追加 \`Linda\` 和 \`Alisa\`

\`\`\`javascript
arr.splice( arr.indexOf( 'Tom' ), 1, 'Judy', 'Linda', 'Alisa' );
\`\`\`

> 替换及追加后的数组结构是这个样子的：

\`\`\`javascript
["George", "John", "Judy", "Linda", "Alisa", "Adrew", "Martin"]
\`\`\`

### splice函数 - 追加元素

> 追加元素你可以选择任意位置这取决于你的具体需求, 关键是在于 \`start\` 的取值索引位置而已！当前数组结构如下所示：

\`\`\`javascript
["George", "John", "Judy", "Linda", "Alisa", "Adrew", "Martin"]
\`\`\`
> 比如说要在 \`Linda\` 和 \`Alisa\` 之间追加 \`Bill\` 和 \`Blake\`

\`\`\`javascript
arr.splice( arr.indexOf( 'Linda' ) + 1, 0, 'Bill', 'Blake' );
\`\`\`

> 追加后的数组结构是下面这个样子的：

\`\`\`javascript
["George", "John", "Judy", "Linda", "Bill", "Blake", "Alisa", "Adrew", "Martin"]
\`\`\`
- 起点位置 \`arr.indexOf( 'Linda' ) + 1\` 就是在数组元素 \`Linda\` 之后了

- 删除元素个数参数这里设置的是 \`0\` 这个是追加元素的关键, 也就是说不删除元素

- \`'Bill', 'Blake'\` 这个呢就是内置对象Array的splice方法的最后一个参数 \`items\` 它表示0个是和多个, 根据 \`deleteCount\` 参数值不同表示的含义也会不同, 这里 \`deleteCount\` 参数是 \`0\` 并且 \`items\` 又有两个值来表示这个参数, 所示说就是追加元素值 \`'Bill', 'Blake'\`


> 以上说的是删除数组中特定的元素, 那删除第一个元素和最后一个元素那实现在是太简单了, 这里简单提一下就是了

## 删除数组中第一个元素

\`\`\`javascript
arr.shift();
\`\`\`
> 删除后的数组是这个样子的:

\`\`\`javascript
["John", "Judy", "Linda", "Bill", "Blake", "Alisa", "Adrew", "Martin"]
\`\`\`

## 删除数组中最后一个元素

\`\`\`javascript
arr.pop();
\`\`\`

> 删除后的数组是这个样子的:

\`\`\`javascript
["John", "Judy", "Linda", "Bill", "Blake", "Alisa", "Adrew"]
\`\`\`

> 以上就是JavaScrip数组删除特定元素个人所总结的一些方法, 如果您还要其它的一些好的方法, 请您留言示下, 谢谢您的支持！

> 希望本文对你的工作和学习有所帮助

> 如果觉得还不错并且也长知识了, 怎么感谢我呢？ 妈呀! 点赞啊!

> Good Luck! from warnerwu at 2017.09.06 AM
`;
const ID_2_CONTENT = `
# jsonRPC简单使用

目录结构如下：

\`\`\`shell
rservice
├── rservice.go
├── client
│   └── client.go
└── server
    └── server.go

\`\`\`

## 定义RPC服务方法

\`\`\`go
// rservice.go
package rservice

import "errors"

// 定义rpc服务
type TestService struct {}

// 定义rpc服务参数结构类型
type Args struct {
\tA, B int
}

// 定义rpc服务方法
func (TestService) Div(args Args, result *float64) error {
\tif args.B == 0 {
\t\treturn errors.New("division by zero")
\t}
\t*result = float64(args.A) / float64(args.B)
\treturn nil
}
\`\`\`

上面定义了一个名为 \`TestService\` 的服务，这个服务有一个方法 \`Div\`，这个方法就是进行简单的业务处理也就是进行除法运算，并把运算结果写入到 \`result\` 变量内。

## 注册RPC服务

编写RPC服务端服务程序

\`\`\`go
// server/server.go
package main

import (
\t"log"
\t"net"
\t"net/rpc"
\t"net/rpc/jsonrpc"
\t"rservice"
)

func main() {
\t// 服务端注册rpc服务
\terr := rpc.Register(rservice.TestService{})
\tif err != nil {
\t\tpanic(err)
\t}

\t// 监听服务端口
\tlistener, err := net.Listen("tcp", ":8859")
\tif err != nil {
\t\tpanic(err)
\t}

\t// 接收连接并处理服务调用
\tfor {
\t\taccept, err := listener.Accept()
\t\tif err != nil {
\t\t\tlog.Printf("accept error: %s\\n", err)
\t\t\tcontinue
\t\t}
\t\tgo jsonrpc.ServeConn(accept)
\t}
}
\`\`\`

启动RPC服务端服务程序

\`\`\`shell
$ go run server/server.go
\`\`\`

## 调用RCP服务

### 使用telnet工具进行RPC服务调用(手动调用)

\`\`\`shell
$ telnet 127.0.0.1 8859
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
\`\`\`

输入调用参数

\`\`\`shell
{"method":"TestService.Div", "params":[{"A":15, "B":6}], "id": 12345}
\`\`\`

- method参数为要调用的RPC服务方法
- params参数为调用RPC服务方法需要传递的参数
- id参数为调用编号，调用结束后服务端会原样返回

----------------------------------------

返回调用结果

\`\`\`shell
{"id":12345,"result":2.5,"error":null}
\`\`\`

### 使用RPC客户端进行RPC服务调用(自动调用)

编写调用程序

\`\`\`go
// client/client.go
package main

import (
\t"fmt"
\t"net"
\t"net/rpc/jsonrpc"
\t"rservice"
)

func main() {
\t// 连接到RPC服务端
\tconn, err := net.Dial("tcp", ":8859")
\tif err != nil {
\t\tpanic(err)
\t}

\t// 创建RPC客户端
\tclient := jsonrpc.NewClient(conn)

\t// 声明RPC调用回复结果
\tvar reply float64

\t// 调用RPC服务
\terr = client.Call("TestService.Div", rservice.Args{A:20, B:9}, &reply)
\tif err != nil {
\t\tfmt.Printf("RPC call error: %s\\n", err)
\t} else {
\t\tfmt.Printf("RPC call result: %f\\n", reply)
\t}

\terr = client.Call("TestService.Div", rservice.Args{A:20, B:0}, &reply)
\tif err != nil {
\t\tfmt.Printf("RPC call error: %s\\n", err)
\t} else {
\t\tfmt.Printf("RPC call result: %f\\n", reply)
\t}
}
\`\`\`

返回调用结果

\`\`\`shell
RPC call result: 2.222222
RPC call error: division by zero
\`\`\`

## 示例代码

[jsonRPC-Sample-Use](/code/golang/rservice)

## 目录
[Back](../../README.md)
`

const MockArticles = [
    {id: 1, category: "Golang", date: "2019-10-22", labels: ["Golang", "Struct", "Interface"], comment: 12, view: 33, like: 55, title: "来聊一聊JavaScrip数组删除特定元素", summary: "说到删除数组特定元素你可能不止一种方法可以实现, 下面且来看看我总结的这几种方法,可能会对你有所帮助！", content: ID_1_CONTENT},
    {id: 2, category: "VUE", date: "2000-10-22", labels: ["Golang", "Struct", "Interface"], comment: 12, view: 33, like: 55, title: "来聊一聊JavaScrip数组删除特定元素", summary: "说到删除数组特定元素你可能不止一种方法可以实现, 下面且来看看我总结的这几种方法,可能会对你有所帮助！", content: ID_1_CONTENT},
    {id: 3, category: "shell", date: "2020-10-22",labels: ["Golang", "Struct", "Interface"], comment: 12, view: 33, like: 55, title: "JSON-RPC简单使用", summary: "Laravel中使用Event事件可以将代码进行解耦、使用项目变的更加易于维护和扩展。可以通过创建一个事件和一个或多个监听者对一个事件进行监听，当事件触发的时候，所对应的监听者就会执行。这比我们以往写代码处理一个响应时要方便的太多了，比如以往注册一个用户时你可能也许会将注册成功发送邮件通知的代码逻辑放入到一个方法中进行处理，那样的话代码显得非常的臃肿，也不利于后期维护和扩展，例如你们产品的注册成功邮件通知模板文件有相应的调整，那你也得去调整注册方法吧，那在laravel中使用Event事件加Notification通知会让这件事件变量非常优雅和便于后期维护和扩展。", content: ID_2_CONTENT},
    {id: 4, category: "docker", date: "2012-09-12",labels: ["Golang", "Struct", "Interface"], comment: 12, view: 33, like: 55, title: "JSON-RPC简单使用", summary: "Laravel中使用Event事件可以将代码进行解耦、使用项目变的更加易于维护和扩展。可以通过创建一个事件和一个或多个监听者对一个事件进行监听，当事件触发的时候，所对应的监听者就会执行。这比我们以往写代码处理一个响应时要方便的太多了，比如以往注册一个用户时你可能也许会将注册成功发送邮件通知的代码逻辑放入到一个方法中进行处理，那样的话代码显得非常的臃肿，也不利于后期维护和扩展，例如你们产品的注册成功邮件通知模板文件有相应的调整，那你也得去调整注册方法吧，那在laravel中使用Event事件加Notification通知会让这件事件变量非常优雅和便于后期维护和扩展。", content: ID_2_CONTENT}
];
const MockLabels = [
    {id: 1, name: "Go"},
    {id: 2, name: "Interface"},
    {id: 3, name: "Struct"},
    {id: 4, name: "JSON"},
    {id: 5, name: "Config"},
    {id: 6, name: "Event"},
    {id: 7, name: "Channel"},
    {id: 8, name: "Buffered"},
    {id: 9, name: "Buffered"},
    {id: 10, name: "Const"},
];
const MockNews = [
    {id: 1, title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!"},
    {id: 2, title: "简单使用CentOS7防火墙及开放端口!"},
    {id: 3, title: "Mac下Charles打开时firefox提示「您的连接并不安全」解决方法！"},
    {id: 4, title: "JSONP跨域访问API接口深入理解"},
    {id: 5, title: "CentOS7编译安装Apache2"},
    {id: 6, title: "Mac下为命令定义别名, 让使用体验与你使用Linux一致"},
    {id: 7, title: "CentOS7配置网卡为静态IP，如果你还学不会那真的没有办法了！"},
    {id: 8, title: "来聊一聊JavaScrip数组删除特定元素"},
    {id: 9, title: "CentOS7.3编译安装php7.1"},
    {id: 10, title: "CentOS7.3编译安装Nginx1.10.1"},
];

const MockArchives = [
    {id: 2019, items: [{
            id:1,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        },{
            id:2,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        },{
            id:3,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        },{
            id:4,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        }]
    },{id: 2018, items: [{
            id:1,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        },{
            id:2,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        },{
            id:3,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        },{
            id:4,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        }]
    },{id: 2017, items: [{
            id:1,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        },{
            id:2,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        },{
            id:3,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        },{
            id:4,
            title:"被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data:'2019-03-02'
        }]
    },

];

const MockCategories = [
    {
        id: 1,
        name: '开发',
        items: [{
            id: 1,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 2,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 3,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 4,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 5,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }]
    },
    {
        id: 2,
        name: '其他',
        items: [{
            id: 1,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 2,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 3,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 4,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 5,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }]
    },
];

const MockCategoriesList = [
    {
        id: 1,
        name: '开发',
        items: [{
            id: 1,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 2,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 3,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 4,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 5,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 6,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 7,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 8,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 9,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }]
    },
    {
        id: 2,
        name: '其他',
        items: [{
            id: 1,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 2,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 3,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 4,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 5,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 6,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 7,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 8,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 9,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 10,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }, {
            id: 11,
            title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
            data: '2019-03-02'
        }]
    },
];

const MockCategoriesOne = {
    id: 1,
    name: '开发',
    items: [{
        id: 1,
        title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
        data: '2019-03-02'
    }, {
        id: 2,
        title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
        data: '2019-03-02'
    }, {
        id: 3,
        title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
        data: '2019-03-02'
    }, {
        id: 4,
        title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
        data: '2019-03-02'
    }, {
        id: 5,
        title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
        data: '2019-03-02'
    }, {
        id: 6,
        title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
        data: '2019-03-02'
    }, {
        id: 7,
        title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
        data: '2019-03-02'
    }, {
        id: 8,
        title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
        data: '2019-03-02'
    }, {
        id: 9,
        title: "被七牛云OSS对象存储测试域名回收后正确数据迁移姿势!",
        data: '2019-03-02'
    }]
};

export {
    MockArticles,
    MockLabels,
    MockNews,
    MockArchives,
    MockCategories,
    MockCategoriesList,
    MockCategoriesOne
};
