const express = require('express');
const calc  = require('./util/calculadora');
const app = express()

app.get('/', (req,res)=>{

    res.send('Atv 3 - Calculadora')
})

app.get('/somar/:n1/:n2', (req, res)=>{
    let a = req.params.n1;
    let b = req.params.n2;
    let resultado = calc.somar(a, b);
    res.send(`${a} + ${b} = ${resultado}`);
});

app.get('/subtrair/:n1/:n2', (req, res)=>{
    let a = req.params.n1;
    let b = req.params.n2;
    let resultado = calc.subtrair(a,b);
    res.send(`${a} - ${b} = ${resultado}`)
});

app.get('/multiplicar/:n1/:n2', (req,res)=> {
    let a = req.params.n1;
    let b = req.params.n2;
    let resultado = calc.multiplicar(a,b);
    res.send(`${a} * ${b} = ${resultado}`);
});

app.get('/dividir/:n1/:n2', (req, res)=>{
    let a = req.params.n1;
    let b = req.params.n2;
    let resultado = calc.dividir(a,b);
    res.send(`${a} / ${b} = ${resultado}`);
});

const PORT = 8080;
app.listen(PORT, ()=> {
    console.log(`App rodando na porta: ${PORT}`);
});