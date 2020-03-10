<template>
    <div class="starter-page">
        <div class="section">
            <div class="container">
                <div class="col-md-9 ml-auto col-xl-9 mr-auto float-left left-content">
                    <div v-for="article in articles" :key="article.id" class="row left-row">
                        <div class="jumbotron jumbotron-border bgshadow" style="position: relative; width: 100%;">
                            <div class="badge badge-primary badge-custom ">{{ article.category }}</div>
                            <router-link :to="{name: 'info', params: {id: article.id}, query: {r: Math.ceil(Math.random()*100)}}">
                                <h3 class="reset-h3">{{ article.title }}</h3>
                            </router-link>
                            <span>
                                 <span v-for="label in article.labels" :key="label" class="badge badge-success">{{ label }}</span>
                            </span>
                            <div class="lead markdown">
                                {{ article.content }}
                            </div>
                            <hr>
                            <div class="lead">
                                <span class="pull-left">
                                    <span class="oi oi-timer">
                                        <b>{{ article.date }}</b>
                                    </span>
                                </span>
                                <span class="pull-right">
                                    <span class="fa fa-comment"> <b>{{ article.comment }}</b> </span>
                                    <span class="fa fa-eye"> <b>{{ article.view }}</b> </span>
                                    <span class="fa fa-thumbs-up"> <b>{{ article.like }}</b> </span>
                                </span>
                            </div>
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
    const MockArticles = [
        {id: 1, category: "Golang", date: "2019-10-22", labels: ["Golang", "Struct", "Interface"], comment: 12, view: 33, like: 55, title: "Golang结构体使用", content: "Laravel中使用Event事件可以将代码进行解耦、使用项目变的更加易于维护和扩展。可以通过创建一个事件和一个或多个监听者对一个事件进行监听，当事件触发的时候，所对应的监听者就会执行。这比我们以往写代码处理一个响应时要方便的太多了，比如以往注册一个用户时你可能也许会将注册成功发送邮件通知的代码逻辑放入到一个方法中进行处理，那样的话代码显得非常的臃肿，也不利于后期维护和扩展，例如你们产品的注册成功邮件通知模板文件有相应的调整，那你也得去调整注册方法吧，那在laravel中使用Event事件加Notification通知会让这件事件变量非常优雅和便于后期维护和扩展。"},
        {id: 2, category: "VUE", date: "2000-10-22", labels: ["Golang", "Struct", "Interface"], comment: 12, view: 33, like: 55, title: "Golang结构体使用", content: "Laravel中使用Event事件可以将代码进行解耦、使用项目变的更加易于维护和扩展。可以通过创建一个事件和一个或多个监听者对一个事件进行监听，当事件触发的时候，所对应的监听者就会执行。这比我们以往写代码处理一个响应时要方便的太多了，比如以往注册一个用户时你可能也许会将注册成功发送邮件通知的代码逻辑放入到一个方法中进行处理，那样的话代码显得非常的臃肿，也不利于后期维护和扩展，例如你们产品的注册成功邮件通知模板文件有相应的调整，那你也得去调整注册方法吧，那在laravel中使用Event事件加Notification通知会让这件事件变量非常优雅和便于后期维护和扩展。"},
        {id: 3, category: "shell", date: "2020-10-22",labels: ["Golang", "Struct", "Interface"], comment: 12, view: 33, like: 55, title: "Golang结构体使用", content: "Laravel中使用Event事件可以将代码进行解耦、使用项目变的更加易于维护和扩展。可以通过创建一个事件和一个或多个监听者对一个事件进行监听，当事件触发的时候，所对应的监听者就会执行。这比我们以往写代码处理一个响应时要方便的太多了，比如以往注册一个用户时你可能也许会将注册成功发送邮件通知的代码逻辑放入到一个方法中进行处理，那样的话代码显得非常的臃肿，也不利于后期维护和扩展，例如你们产品的注册成功邮件通知模板文件有相应的调整，那你也得去调整注册方法吧，那在laravel中使用Event事件加Notification通知会让这件事件变量非常优雅和便于后期维护和扩展。"},
        {id: 4, category: "docker", date: "2012-09-12",labels: ["Golang", "Struct", "Interface"], comment: 12, view: 33, like: 55, title: "Golang结构体使用", content: "Laravel中使用Event事件可以将代码进行解耦、使用项目变的更加易于维护和扩展。可以通过创建一个事件和一个或多个监听者对一个事件进行监听，当事件触发的时候，所对应的监听者就会执行。这比我们以往写代码处理一个响应时要方便的太多了，比如以往注册一个用户时你可能也许会将注册成功发送邮件通知的代码逻辑放入到一个方法中进行处理，那样的话代码显得非常的臃肿，也不利于后期维护和扩展，例如你们产品的注册成功邮件通知模板文件有相应的调整，那你也得去调整注册方法吧，那在laravel中使用Event事件加Notification通知会让这件事件变量非常优雅和便于后期维护和扩展。"}
    ];
    export default {
        name: 'index',
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
                articles: MockArticles,
            }
        }
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
