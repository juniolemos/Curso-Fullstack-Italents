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
///Retornando a home.html 
$(document).ready(function() {
    $("#voltar").click(function() {
      window.location.href = "home.html";
    });
  });
  
//excluindo itens carrinho ida
$(document).ready(function() {
    $("#diminuir").click(function() {
      var numeroProduto = parseInt($("#numero-produto").text());
      var valorProduto = parseFloat($("#valor-produto").text());
      var valorUnitario = valorProduto / numeroProduto;

      
      
      if (!isNaN(numeroProduto) && numeroProduto > 0) {
        $("#numero-produto").text(numeroProduto - 1);
        $("#valor-produto").text((valorUnitario * (numeroProduto - 1)).toFixed(2));
      }
    });
  });
//excluindo itens carrinho volta
  $(document).ready(function() {
    $("#diminuir2").click(function() {
      var numeroProduto2 = parseInt($("#numero-produto2").text());
      var valorProduto2 = parseFloat($("#valor-produto2").text());
      var valorUnitario2 = valorProduto2 / numeroProduto2;

      
      
      if (!isNaN(numeroProduto2) && numeroProduto2 > 0) {
        $("#numero-produto2").text(numeroProduto2 - 1);
        $("#valor-produto2").text((valorUnitario2 * (numeroProduto2 - 1)).toFixed(2));
      }
    });
  });

  //adicionar itens
  $(document).ready(function() {
    $("#somar").click(function() {
      var numeroProduto = parseInt($("#numero-produto").text());
      var valorProduto = parseFloat($("#valor-produto").text());
      var valorUnitario = valorProduto / numeroProduto;

      
      
      if (!isNaN(numeroProduto) && numeroProduto > 0) {
        $("#numero-produto").text(numeroProduto + 1);
        $("#valor-produto").text((valorUnitario * (numeroProduto +1)).toFixed(2));
      }
    });
  });

  $(document).ready(function() {
    $("#somar2").click(function() {
      var numeroProduto2 = parseInt($("#numero-produto2").text());
      var valorProduto2 = parseFloat($("#valor-produto2").text());
      var valorUnitario2 = valorProduto2 / numeroProduto2;

      
      
      if (!isNaN(numeroProduto2) && numeroProduto2 > 0) {
        $("#numero-produto2").text(numeroProduto2 + 1);
        $("#valor-produto2").text((valorUnitario2 * (numeroProduto2 +1)).toFixed(2));
      }
    });
  });
  //somar total
  $(document).ready(function() {
    $("#somar2").click(function() {
      var valorProduto = parseFloat($("#valor-produto").text().replace(",", "."));
      var valorProduto2 = parseFloat($("#valor-produto2").text().replace(",", "."));
    
      var totalGeral = valorProduto + valorProduto2;
  
      $("#total").text(totalGeral.toFixed(2).replace(".", ","));
    });
  });
  $(document).ready(function() {
    $("#somar").click(function() {
      var valorProduto = parseFloat($("#valor-produto").text().replace(",", "."));
      var valorProduto2 = parseFloat($("#valor-produto2").text().replace(",", "."));
    
      var totalGeral = valorProduto + valorProduto2;
  
      $("#total").text(totalGeral.toFixed(2).replace(".", ","));
    });
  });
//abater do total
  $(document).ready(function() {
    $("#diminuir").click(function() {
      var valorProduto = parseFloat($("#valor-produto").text().replace(",", "."));
      var valorProduto2 = parseFloat($("#valor-produto2").text().replace(",", "."));
    
      var totalGeral = valorProduto + valorProduto2;
  
      $("#total").text(totalGeral.toFixed(2).replace(".", ","));
    });
  });
  $(document).ready(function() {
    $("#diminuir2").click(function() {
      var valorProduto = parseFloat($("#valor-produto").text().replace(",", "."));
      var valorProduto2 = parseFloat($("#valor-produto2").text().replace(",", "."));
    
      var totalGeral = valorProduto + valorProduto2;
  
      $("#total").text(totalGeral.toFixed(2).replace(".", ","));
    });
  });

 // Limpar carrinho
 $(document).ready(function() {
    $("#excluir-cart").click(function() {
      $("#numero-produto2").text("0");
      $("#numero-produto").text("0");
      $("#valor-produto2").text("0,00");
      $("#valor-produto").text("0,00");
      $("#total").text("0,00");
      
      
      alert("Seu carrinho esta vazio, escolha o seu destino!");
    });
  });