import express, { request } from "express"

const server = express()

server.use(express.static("public"))
server.set("view engine", "ejs")
server.set("views", "./views")

//routes 

function Routemaker(url, ejs){
server.get(url, (request, response) =>{
    response.render(ejs)
})
}

Routemaker('/', 'index')
Routemaker('/afbeelding', 'afbeelding')
Routemaker('/animatie', 'animatie')
Routemaker('/berichtgeving', 'berichtgeving')
Routemaker('/blokken', 'blokken')
Routemaker('/formulieren', 'formulieren')
Routemaker('/globals', 'globals')
Routemaker('/headings', 'headings')
Routemaker('/iconen', 'iconen')
Routemaker('/interactieve-componenten', 'interactieve-componenten')
Routemaker('/kleuren', 'kleuren')
Routemaker('/knoppen', 'knoppen')
Routemaker('/lijsten', 'lijsten')
Routemaker('/media', 'media')
Routemaker('/reclame', 'reclame')

//poortnummer instellen
server.set("port", 8800)

//start de server
server.listen(server.get("port"), () => {
  console.log(`Application started on http://localhost:${server.get("port")}`)
})