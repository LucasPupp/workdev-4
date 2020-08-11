// usei o express para criar e configurar meu serv
const express = require("express")
const server = express()
const ideas = [
    {
      img: "img/ferramenta.png",
      title: "Cursos de programação",
      category: "Estudo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit",
      url: "https://rocketseat.com.br"
    },
    {
      img: "img/robot.png",
      title: "Robótica",
      category: "Estudo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit",
      url: "https://rocketseat.com.br"
    },
    {
      img: "img/nodes.png",
      title: "Nodes",
      category: "Estudo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit",
      url: "https://rocketseat.com.br"
    },
    {
      img: "img/monitor.png",
      title: "Exercicios",
      category: "Estudo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit",
      url: "https://rocketseat.com.br"
    },
    {
      img: "https://image.flaticon.com/icons/svg/3127/3127122.svg",
      title: "Noite em Casa",
      category: "Relaxamento",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit",
      url: "https://rocketseat.com.br"
    },
    {
      img: "https://image.flaticon.com/icons/svg/3127/3127132.svg",
      title: "Radar de Chuva",
      category: "Hmmm",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit",
      url: "https://rocketseat.com.br"
    },
]

//configurar arquivvos estáticos
server.use(express.static("public"))

//config do dunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
  express: server,
  noCache: true,
})

//criei uma rota barra -> /
// e capturo o pedido do cliente para responder 
server.get ("/", function(req, res){

  const reversedIdeas = [...ideas].reverse()

  let lastIdeas = []
  for (let idea of reversedIdeas){
      if (lastIdeas.length < 2){
        lastIdeas.push(idea)
      }
  }
  return res.render("index.html", { ideas: lastIdeas })
})



server.get ("/ideias", function(req, res){

  const reversedIdeas = [...ideas].reverse()
     return res.render("ideias.html", { ideas: reversedIdeas })
})






//ligando o servidor, no caso "3000"
server.listen(3000, ()=>{
  console.log('rodando....') 
})


 