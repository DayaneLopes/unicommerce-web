import { Produto } from "./produto.js";

export class Produtos {

    private produtos: Produto[] = [];

    public add(novo: Produto): void {
        this.produtos.push(novo);
    }

    //Retorna uma lista somente para leitura
    //public lista(): ReadonlyArray<Produto>{
     //  return this.produtos
    //}

    public lista(): Array<Produto>{
        return this.produtos
     }

    public get(): readonly Produto[] {
        return this.produtos;
    }
    
}