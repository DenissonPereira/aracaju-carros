import { Router } from 'express';
import { carrosGeral } from '../controllers';

export const routes = Router();

routes.get('/carros', carrosGeral);