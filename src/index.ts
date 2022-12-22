import './controllers/LoginController';
import './controllers/RootController';

import { AppRouter } from './AppRouter';
import bodyParser    from 'body-parser';
import cookieSession from 'cookie-session';
import express       from 'express';

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['test'] }));
app.use(AppRouter.getInstance());

app.listen('1234', () => {
	console.log('Listening on port 1234');
});