import { Router } from 'express';
import { carrosGeral, login, marcasGeral, modelosGeral } from '../controllers';

export const routes = Router();

routes.get('/carros', carrosGeral);
routes.get('/modelos', modelosGeral);
routes.post('/login', login);
routes.get('/marcas', marcasGeral);