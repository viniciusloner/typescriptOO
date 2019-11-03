import mongoose from '../../database/index'

interface CadastroInterface extends mongoose.Document {
    cnpj?: string,
    ie?: string,
    nomeFantasia?: string,
    razaoSocial?: string
}

const CadastroSchema = new mongoose.Schema({
    cnpj: String,
    ie: String,
    nomeFantasia: String,
    razaoSocial: String
}, {
    timestamps: true
})

export default mongoose.model<CadastroInterface>('Cadastro', CadastroSchema)