import { Router } from 'express'
import cadastroController from './controllers/cadastro.controller'

const router = Router()

//cadastroControllers
router.get('/cadastro', cadastroController.index)
router.post('/cadastro', cadastroController.store)

export default router