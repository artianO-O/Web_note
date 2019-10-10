//导入http内置模块
const http = require('http')
//这个核心模块，能够帮我们解析url地址，从而拿到 pathname query
const urlModule = require('url')

//创建一个http服务器
const server = http.createServer()
//监听http服务器的request请求
server.on('request',function(req,res){
    //const url = req.url
    const {pathname:url,query} = urlModule.parse(req.url,true)

    if(url == '/getscript'){
        //拼接一个合肥的js脚本，这里拼接的是一个方法的调用
        //var scriptStr = 'show()'

        var data ={
            name : 'xjj',
            age: 18,
            gender: '女孩子'
        }
        //callback中的字符串是客户端发送的方法名
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        //trd.end 发送给 客户端， 客户端去把这个字符串，当作JS代码去解析执行
        res.end(scriptStr)
    } else {
        res.end('404')
    }
})