import { Router } from 'express';

import heroes from './heroes';

const router: Router = Router();

router.get('/', (_request, response)=> {
    response.json({
        message: 'Welcome...🎟'
    })
})

router.use(heroes);

export default router;