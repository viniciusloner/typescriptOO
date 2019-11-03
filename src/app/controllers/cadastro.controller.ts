import { Request, Response } from 'express'
import Cadastro from '../schema/cadastro.schema'

class CadastroController {
    public async index(req: Request, res: Response): Promise<Response> {
        try {
            const cadastro = await Cadastro.find()
            return res.status(200).send(cadastro)
        } catch (err) {
            return res.status(400).send(err)
        }
    }

    public async store(req: Request, res: Response): Promise<Response> {
        try {
            const cadastro = await Cadastro.create(req.body)

            return res.status(200).send(cadastro)
        } catch (err) {
            return res.status(400).send(err)
        }
    }
}

export default new CadastroController()