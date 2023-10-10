import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";

export class ProdutoController {

    private inputNome : HTMLInputElement;
    private inputPreco : HTMLInputElement;
    private inputDescricao : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputCategoria : HTMLInputElement;

    private produtos: Produtos = new Produtos();

    constructor() {
        this.inputNome = document.querySelector('#nome');
        this.inputPreco = document.querySelector('#preco');
        this.inputDescricao = document.querySelector('#descricao');
        this.inputQuantidade = document.querySelector('#quantidadeEstoque');
        this.inputCategoria = document.querySelector('#categoria');
    }

    adiciona(): void {

        const produto = this.criaProduto();
        this.produtos.add(produto);
        
        console.log(this.produtos.lista());
        this.limparFormulario();
    }

    criaProduto(): Produto {

        const nome: string = this.inputNome.value;
        const preco: number = parseFloat(this.inputPreco.value);
        const descricao: string = this.inputDescricao.value;
        const quantidade: number = parseInt(this.inputQuantidade.value);
        const categoria: string =  this.inputCategoria.value;

        return new Produto(nome, preco, descricao, quantidade, categoria);

    }

    limparFormulario(): void {
        // limpar todos os campos do formulário
        this.inputNome.value = '';
        this.inputPreco.value = '';
        this.inputDescricao.value = '';
        this.inputQuantidade.value = '';
        this.inputCategoria.value = '';
        this.inputNome.focus();
    }

}