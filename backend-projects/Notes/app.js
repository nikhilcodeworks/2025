const express = require('express');
const app = express();
const path = require('path');
const fs=  require('fs')
const PORT = 3000;
app.set('view engine' ,'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    fs.readdir('./notes',(err,files)=>{
        if (err) return res.sendStatus(500).send(err);
        res.render('index' ,{files:files});
    });
});

app.get('/read/:file',(req,res)=>{
    const filename= req.params.file
    fs.readFile(`./notes/${filename}`, 'utf-8', (err,data)=>{
        if (err) return res.sendStatus(500).send(err);
        res.render(`read`, {data:data,filename:filename});

    })
   

})
app.get('/edit/:file',(req,res)=>{
    const filename= req.params.file
    fs.readFile(`./notes/${filename}`, 'utf-8', (err,data)=>{
        if (err) return res.sendStatus(500).send(err);
        res.render(`edit`, {data:data,filename:req.params.file.slice(0,-4)});
    });
});

app.get('/create',(req,res)=>{
    res.render('create');
})
app.post('/created',(req,res)=>{
    fs.writeFile(`./notes/${req.body.title}.txt`, req.body.content ,"utf-8"  ,(err)=>{
        if (err) return res.sendStatus(500).send(err);
        res.redirect('/');
    })
})

app.get('/deleted/:file',(req,res)=>{
    fs.unlink(`./notes/${req.params.file}` ,(err)=>{
        if (err) return res.sendStatus(500).send(err);
        res.redirect('/');
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on port no. ${PORT}`);
});