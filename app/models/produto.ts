export class Produto {

    private _nome: string;
    private _preco: number;
    private _descricao: string;
    private _quantidadeEstoque: number;
    private _categoria: string;


    constructor(nome: string, preco :number, descricao: string, quantidadeEstoque: number, categoria: string){
        this._nome = nome;
        this._preco = preco;
        this._descricao = descricao;
        this._quantidadeEstoque = quantidadeEstoque;
        this._categoria = categoria;
    }
  
    get nome(): string {
        return this._nome;
    }
   
    get preco(): number {
        return this._preco;
    }

    get descricao(): string {
        return this._descricao;
    }

    get quantidadeEstoque(): number {
        return this._quantidadeEstoque;
    }

    get categoria(): string {
        return this._categoria;
    }

}