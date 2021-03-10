const URL_BASE = 'http://localhost:8008/api/contatos';

export default class ContatosService
{
    static async salvarContato(contatoInfo)
    {
        // EXERCÍCIO 2
        const URLSearchParams =  { contato: JSON.stringify(contatoInfo) };
        let urlPost = `${URL_BASE}?${URLSearchParams}`; 
        const resposta = await fetch(urlPost, { method: 'POST' });
        const status = await resposta.json();
        return status;
    }


    static async getContatos()
    {
        // EXERCÍCIO 1
        const resposta = await fetch('http://localhost:8008/api/contatos');
        const contatos = await resposta.json();
        return contatos;
    }

    static async removerContato(posicao)
    {
        // EXERCÍCIO 3
    }
}