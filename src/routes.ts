import { Router } from 'express';
import { usersController } from './controllers/usersController';

const routes = Router();
const users = new usersController();



routes.get('/users', users.listarUsuario)

routes.post('/users', users.criarUsuario)


//STATUS CODE - 
//200 OK
//201 CONSEGUE CRIAR UM DADOS
//404 NOT FOUND



//GET - LER OS DADOS

//POST - CRIAR OS DADOS

//PUT/PATH - EDITAR DADOS EXISTENTES

//DELETE - DELETAR OS DADOS

export { routes }