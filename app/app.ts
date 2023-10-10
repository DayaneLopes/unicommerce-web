import { ProdutoController } from "./controllers/produto-controller.js";

const produtoController = new ProdutoController();
const form = document.querySelector(".form");

form.addEventListener('submit', event => {
    event.preventDefault();
    produtoController.adiciona();
});
