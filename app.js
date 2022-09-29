const express = require('express')
const app = express()
const port = 3000
const produtoRota = require('./rotas/produto_rotas')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/produtos', produtoRota)

app.listen(port, () => {
    console.log(`API executando na porta ${port}`) //COLOCAR COM CRASE QUANDO HOUVER UMA VARIAVEL
})







/*const produtoRota = require('./rotas/produto_rotas')

// VAI FAZER A CONVERSAO DO DADOS QUE VEM BODY PARA CONVERTER EM JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/produtos', produtoRota)
*/
//******** INICIA O SERVIDOR NA PORTA DECLARADA  >  NO INICIO DO ARQUIVO FOI DEFINIDO A PORTA 3000 ************