var express = require('express')
var cors = require('cors')
var app = express()
 
 
var axios = require('axios')



app.use(cors())

app.get('/getdadosempresasite/', async function (req, res, next) {

    var data = JSON.stringify({
        "identificadorurl": "alopizza"
      });
      
    var config = {
    method: 'post',
    url: 'http://200.10.135.208:8080/evento/getdadosempresasite',
    headers: { 
        'Content-Type': 'application/json'
        },
        data : data
    };
    
    const dadosEmpresa = []
  
    const a = await axios(config)
    .then(function (response) { 
        dadosEmpresa.pop()
        dadosEmpresa.push(response.data)
    })
    

  res.json(dadosEmpresa) 
 // res.json(dadosEmpresa)
})

app.get('/getdadostable/', async function (req, res, next) {

  

    var data = JSON.stringify({
        "databasecliente": "BancoDadosAloPizza.fdb",
        "typetable": 1
      });
      
      var config = {
        method: 'post',
        url: 'https://easypedidos.sytes.net:8082/getdadostable',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      

      const dadosProdutos = [] 

     const a = await axios(config)
    .then(function (response) { 
      dadosProdutos.pop()
      dadosProdutos.push(response.data)
    }) 

    res.json(dadosProdutos)
  })

app.listen(4042, function () {
  console.log('CORS-enabled web server listening on port 4042')
})