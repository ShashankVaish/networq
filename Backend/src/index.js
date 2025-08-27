import express from 'express';
import { ServerConfig } from './config/index.js';
import apiRoutes from './routes/index.js';
import connection_mmongoose from './db/connection.db.js'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connection_mmongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');    
});
connection_mmongoose.connection.on('error', (err) => {  
    console.log('Mongoose connection error: ', err);    
}   
)


app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
