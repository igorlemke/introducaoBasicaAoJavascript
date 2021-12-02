const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({message: 'Hello Cypress Discovery'})
})

app.get('/avengers', function (req, res) {
    var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner','Scot Lang']
    return res.json({Data: avengers})
  })

  app.get('/cnh', function (req, res) {
    const idade = req.query.idade

    if (!idade) {
        return res.json({message: 'Idade é um campo obrigatório.'})
    }

    var idadenum = parseInt(idade)

    if (idadenum >= 18) {
        return res.json({message:'Ok, você pode tirar sua CNH.'})
    }
    else  if (idadenum > 4) {
        return res.json({message:'Você é menor de idade, por enquanto sugiro andar de bike.'})
    }
    else {
        return res.json({message:'Melhor você tomar leite...'})
    }
  })


app.listen(3000)