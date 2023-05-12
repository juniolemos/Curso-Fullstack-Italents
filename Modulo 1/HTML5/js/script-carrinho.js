let modal = document.querySelectorAll(".retangulo-user");
let excluir = document.querySelectorAll(".bi-trash-fill");
let somar = document.querySelectorAll(".bi-cart-plus-fill");
for (let i = 0; i < excluir.length; i++) {
    // for(let i =0; i < modal.length; i++){
    excluir[i].addEventListener("click", function(event) {
        if (!event.target.classList.contains(".bi-trash-fill")) {
            modal[i].remove();
        }
    });
};
// };