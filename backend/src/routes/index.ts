import { Router } from 'express';
import { carrosGeral, login, modelosGeral } from '../controllers';

export const routes = Router();

routes.get('/carros', carrosGeral);
routes.get('/modelos', modelosGeral);
routes.post('/login', login);