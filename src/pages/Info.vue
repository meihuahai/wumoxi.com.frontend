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
                                <vue-markdown :source="contents"></vue-markdown>
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
    const a = `
    # 沫汐小笔头开发日志

记录在学习或工作中使用过的相关技术，以防止岁月的冲击！

## Golang

### [Gin框架](markdown/golang/GolangGin.md)
### [HTTP标准库](markdown/golang/HTTPStandardLibrary.md)
### [HTTP服务器的性能分析](markdown/golang/HTTPServerPerformanceAnalysis.md)
### [HTML文档操作](https://www.flysnow.org/2018/01/20/golang-goquery-examples-selector.html)
### [分布式系统特点](markdown/golang/FeatruesOfDistributedSystem.md)
### [JsonRPC简单使用](markdown/golang/JSONRPCSampleUse.md)
### [URL去重方式](markdown/golang/URLDeduplication.md)
### [Golang注意点](markdown/golang/GolangNotice.md)
### [Golang算法](markdown/golang/GolangArithmetic.md)
### [Golang查看文档](markdown/golang/GolangCheckViewDocument.md)
### [Golang编程心得体会](markdown/golang/GolangProgramming.md)
### [Golang关于反射的使用案例](markdown/golang/GolangReflectCase.md)
### [Golang中int和int64是相同类型吗？](markdown/golang/GolangInt64.md)
### [Golang切割包含不定个数空格的字符串怎么处理？](markdown/golang/GolangStringsFields.md)

## 计算机基础

### [OSI模型](https://zh.wikipedia.org/wiki/OSI%E6%A8%A1%E5%9E%8B)
### [TCP/IP协议族](https://zh.wikipedia.org/wiki/TCP/IP%E5%8D%8F%E8%AE%AE%E6%97%8F)
### [原码, 反码, 补码](https://www.cnblogs.com/zhangziqiu/archive/2011/03/30/ComputerCode.html)

## 计算机科学术语

### [认证(authentication)和授权(authorization)的区别](https://blog.csdn.net/u011537073/article/details/72876139)

## Javascript&JQUERY&VUE

### [JSONP](markdown/frontend/jquery/Jsonp.md)
### [JavaScript使用正则处理服务端返回数据](markdown/frontend/javascript/JavascriptRegexpUsing.md)

## LINUX[¹](https://linuxtools-rst.readthedocs.io/zh_CN/latest/index.html)

### [CentOS7开机启动服务](markdown/Linux/CentOS7OpenStartService.md)
### [CentOS7设置SS服务开机启动](markdown/Linux/CentOS7SettingSSServiceOpenStart.md)
### [CentOS7安装Docker](https://docs.docker.com/install/linux/docker-ce/centos/)
### [CentOS7开放端口号](markdown/Linux/CentOS7OpenPorts.md)
### [CentOS7系统资源管理](markdown/Linux/CentOS7SystemResourceManagement.md)
### [CentOS7文件处理](markdown/Linux/CentOS7SystemFileProcess.md)
### [CentOS7用户管理](markdown/Linux/CentOS7UserManagement.md)
### [CentOS7查看端口占用](markdown/Linux/CentOS7ViewPortOccupancy.md)
### [CentOS7查看进程信息](markdown/Linux/CentOS7ViewProcessInformation.md)
### [CentOS7命令行翻越](markdown/Linux/CentOS7CommandLineRollover.md)
### [CentOS7之VIM快速替换所有](markdown/Linux/CentOS7VimReplaceAllMatchChar.md)
### [MATERIAL-UI](https://material-ui.com/zh/)
### [MATERIAL DESIGN](https://material.io/)

## Mac

### [Mac快捷键](https://support.apple.com/zh-cn/HT201236)
### [Mac检测远程服务端口是否可用](markdown/mac/CentOS7CheckRmoteServicePortAvailable.md)

## Git

### [Git关于标签的操作](markdown/git/GitTagOperations.md)

## Nginx

### [Nginx添加SSH证书](https://certbot.eff.org/)

## Docker

### [Docker开机启动容器](markdown/docker/DockerOpenStartContainerService.md)
### [Docker实时查看容器日志](markdown/docker/RealTimeCheckViewDockerContainerLog.md)
### [Docker数据卷Volumes](./markdown/docker/Docker数据卷Volumes.md)
### [Docker下安装ElasticSearch](markdown/docker/DockerInstallElasticsearch.md)
### [Docker下安装Kibana](markdown/docker/DockerInstallKibana.md)

## ElasticSearch

### [settings和mappings详解](https://www.cnblogs.com/zlslch/p/6474424.html)
### [索引库设置mappings具体字段类型，禁止自动根据数据格式识别它的类型](https://blog.csdn.net/wfs1994/article/details/80766935)

## PHP

### [Yii2接入PayPal支付](markdown/php/pay/yii2_join_up_paypal.md)
### [Laravel项目重新部署安装依赖](markdown/php/composer/LaravelProjectRearrangeInstallationDependencies.md)

## OSS

### [基于读写权限ACL的权限控制](https://help.aliyun.com/document_detail/100676.html?spm=a2c4g.11186623.2.18.4c314c071HLPZl)
### [RAM子账户授权OSS单个bucket中部分文件的访问权限](https://help.aliyun.com/knowledge_detail/39553.html?spm=a2c4g.11186623.4.6.7fdd4c074nVFcA)
`;
    const b = a + "```go\n" +
        "package main\n" +
        "\n" +
        "import \"github.com/gin-gonic/gin\"\n" +
        "\n" +
        "func main() {\n" +
        "    r := gin.Default()\n" +
        "    r.GET(\"/ping\", func(c *gin.Context) {\n" +
        "        c.JSON(200, gin.H{\n" +
        "            \"message\": \"pong\",\n" +
        "        })\n" +
        "    })\n" +
        "    r.Run() // listen and serve on 0.0.0.0:8080 (for windows \"localhost:8080\")\n" +
        "}\n" +
        "```";
    export default {
        name: 'starter',
        data() {
            return {
                tableData: [{
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                contents:b,
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
