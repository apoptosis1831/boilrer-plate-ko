const express = require('express') // express 모듈 가져온다
const app = express() // 새로운 express app을 만든다
const port = 5000 // 백서버 포트 번호

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kjh:abcd1234@movieappproject.jrw7u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/',(req,res)=>res.send('안녕!')) // 루트 디렉터리에 오면 hello world 출력 

app.listen(port, ()=>console.log(`Example app listening on port ${port}!`)) // app이 port에 listen을 하면 console.log 출력