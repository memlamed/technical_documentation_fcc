const express = require('express');
const PORT = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('public'))

app.get('/',(req,res,next)=>{
    res.render('index');
});

app.listen(PORT, ()=>console.log(`The server is running on PORT ${PORT}`));