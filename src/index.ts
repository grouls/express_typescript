import bodyParser                     from 'body-parser';
import cookieSession                  from 'cookie-session';
import express                        from 'express';
import { router }                     from './routes/loginRoutes';

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['test']}));
app.use(router);

app.listen('1234', () => {
    console.log('Listening on port 1234');
});