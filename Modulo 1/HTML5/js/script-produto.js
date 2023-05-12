let decrementar = document.querySelector(".bi-cart-dash-fill");
let incrementar = document.querySelector(".bi-cart-plus-fill");
let textoProduto = document.querySelector(".numero-produto");
let quantidadeProduto = parseInt(textoProduto.textContent);

incrementar.addEventListener("click", function() {
    quantidadeProduto++;
    textoProduto.innerHTML = quantidadeProduto;
});

decrementar.addEventListener("click", function() {
    if (quantidadeProduto <= 1) {
        alert("A quantidade de produto não pode ser menor que 1.")
    } else {
        quantidadeProduto--;
        textoProduto.innerHTML = quantidadeProduto;
    }
})


console.log(decrementar);
console.log(incrementar);
console.log(quantidadeProduto);