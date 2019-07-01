// 使用express创建服务器
const express=require('express')
// 引入FS模块
const fs =require('fs')
// 创建express实例对象
const app =express();
// 添加express服务器端口并监听
app.listen(3000,()=>{
console.log('http://127.0.0.1:3000')
})
// 设置模板引擎
// app.set('view engine','ejs')
// app.set('views','views')
// 添加静态资源的托管
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
// 添加路由配置,引入路由模块
app.get('/',(req,res)=>{
    fs.readFile(__dirname+'/views/admin/index.html',(err,data)=>{
        if(err){
            res.end('404')
    }else{
        res.end(data);
    }
    })
})
