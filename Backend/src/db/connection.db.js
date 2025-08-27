import {mongoose} from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Successfully connected to the database');
}
).catch((error) => {
    console.error('Error connecting to the database', error);
});
export default mongoose;
