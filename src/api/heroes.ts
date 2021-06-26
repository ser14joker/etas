import { Router } from 'express';

const router = Router();

router.get('/heroes', (_request, response)=> {
    response.json({
        heroes: ['spiderman 🕷', 'superman 🦸', 'Batman 🦇']
    })
});

export default router;

