console.log('Task Manager App')
const connectToDB =require('./db/connect')
const tasks=require('./router/Tasks')
const express= require('express');
const app =express()
const notFound=require('./middelware/notFound')
const errorHandler=require('./middelware/errorHandler')

require('dotenv').config()
const port =3000;
//routes
app.use(express.json())
app.use(express.static("./public"))
app.use('/api/v1/tasks',tasks)
app.use(notFound);
app.use(errorHandler);

const start = async () => {
    try {
        await connectToDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on ${port}...`))
    } catch (error) {
        console.log(error)
        
    }
}
start()




