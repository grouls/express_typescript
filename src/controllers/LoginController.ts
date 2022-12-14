import { Request, Response }                                        from 'express';
import { bodyValidator, controller, get, post }                     from './decorators';

@controller('/auth')
class LoginController {
    @get('/login')
	getLogin(req: Request, res: Response): void {
		res.send(`
            <form method='POST'>
                <div>
                    <label>Email</label>
                    <input name='email'/>
                </div>
                <div>
                    <label>Password</label>
                    <input name='password' type='password'/>
                </div>
                <button>Submit</button>
            </form>
        `);
	}
    
    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response): void {
        const { email, password } = req.body;
    
        if( email && password && email === 'gary@admin.com' && password === 'letmein!') {
            req.session = { loggedIn: true };
            res.redirect('/');
        } else {
            res.send('Invalid email or password.');
        }
    }

    @get('/logout')
    login(req: Request, res: Response): void {
        req.session = { loggedIn: undefined };
        res.redirect('/');
    }
}
