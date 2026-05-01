const {time}=require('console')
const http=require('http')
let data=[];
let i=0;
let backup=[];
const server=http.createServer((req,res)=>{
    if(req.url=='/updateUser' && method=='get'){
        console.log(time)
        data[i++]="User"+i;
    }else if(req.url=='/saveLog' && method=='get'){
        console.log(data);
    }else if(req.url=='/backup' && method=='post'){
        backup=data
    }else if(req.url=='/clearLog' && method=='get'){
        data=[]
        i=0;
    }else if(req.url=='/serverInfo' && method=='get'){
       console.log({data})  
    }else{
        console.log("Server connected");
    }
}).listen(3000);