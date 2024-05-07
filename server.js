const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000 // || process.env.PORT 

app.use(cors())

const rappers = {
    '21 savage' : {
        'age' : 31,
        'birthName' : 'Shéyaa Bin Abraham-Joseph',
        'birthLocation' : 'London, England'
    },
    'chance the rapper' : {
        'age' : 31,
        'birthName' : 'Chancelor Johnathan Bennett',
        'birthLocation' : 'Chicago, Illinois'
    },
    'kendrick lamar' : {
        'age' : 36,
        'birthName' : 'Kendrick Lamar Duckworth',
        'birthLocation' : 'Compton, California'
    },
    'drake' : {
        'age' : 37,
        'birthName' : 'Aubrey Drake Graham',
        'birthLocation' : 'Toronto, Ontario'
    },
    'unknown' : {
        'age' : 0,
        'birthName' : 'unknown',
        'birthLocation' : 'unknown'
    }  
}

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/index.html') 
})

app.get('/api/:name', (req,res)=> {
    const rapperName = req.params.name.toLowerCase()
    if (rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on ${PORT}! Betta go catch it`)
})

