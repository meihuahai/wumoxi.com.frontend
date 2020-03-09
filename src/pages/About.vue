<template>
    <div class="info-page">
        <div class="section">
            <div class="container">
                <div class="col-md-9 ml-auto col-xl-9 mr-auto float-left left-content">
                    <div class="row left-row">
                        <div class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
                            <div class="badge badge-primary badge-custom ">Golang</div>
                            <h3 class="reset-h3">Golang结构体使用</h3>
                            <div class="lead">
                                <span class="pull-left">
                                    <span class="oi oi-timer">
                                        <b>2000-20-22</b>
                                    </span>
                                </span>
                                <span class="pull-right">
                                    <span class="fa fa-comment"> <b>0</b> </span>
                                    <span class="fa fa-eye"> <b>0</b> </span>
                                    <span class="fa fa-thumbs-up"> <b>0</b> </span>
                                </span>
                            </div>
                            <div class="clearfix"></div>


                            <a href="http://www.baidu.com">

                            </a>
                            <span>
                                 <span class="badge badge-success">Golang</span>
                            </span>
                            <div>
                                <vue-markdown :source="article"></vue-markdown>
                            </div>
                            <hr>

                        </div>
                    </div>

                </div>
                <div class="col-md-3 ml-auto col-xl-3 mr-auto float-right right-content">
                    <div class="row">
                        <div class="card bgshadow">
                            <div class="card-header">
                                目录
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Golang结构体使用</li>
                                <li class="list-group-item">t事件可以将代码进行解</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                                <li class="list-group-item">Golang结构体使用</li>
                                <li class="list-group-item">t事件可以将代码进行解</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                                <li class="list-group-item">Golang结构体使用</li>
                                <li class="list-group-item">t事件可以将代码进行解</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                                <li class="list-group-item">Golang结构体使用</li>
                                <li class="list-group-item">t事件可以将代码进行解</li>
                                <li class="list-group-item">Vestibulum at eros</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import VueMarkdown from 'vue-markdown'
    const article = `
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
    export default {
        name: 'starter',
        data() {
            return {
                source: new Date().toLocaleTimeString(),
                anchorAttrs: {
                    target: '_blank',
                    rel: 'noopener noreferrer nofollow'
                },
                tableData: [{
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                article: article
            }
        },
        components: {
            VueMarkdown
        },
    };
</script>
<style>
    .starter-page {
        min-height: calc(100vh - 95px);
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: rgba(255, 255, 255, 0.3) 0 1px 0, rgba(0, 0, 0, 0.3) 0 -1px 0;
        box-shadow: 0 0 3px rgba(55, 55, 55, 0.7);
    }
    .box-card-table {
        background: rgba(255, 255, 255, 0.0);
    }

</style>
