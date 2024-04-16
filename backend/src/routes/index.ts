import { Router } from 'express';
import { carrosGeral, modelosGeral } from '../controllers';

export const routes = Router();

routes.get('/carros', carrosGeral);
routes.get('/modelos', modelosGeral);