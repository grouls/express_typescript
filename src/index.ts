import bodyParser                     from 'body-parser';
import express                        from 'express';
import { router }                     from './routes/loginRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen('1234', () => {
    console.log('Listening on port 1234')
});