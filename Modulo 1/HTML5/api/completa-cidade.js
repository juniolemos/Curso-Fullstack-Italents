$(document).ready(function() {
    $("#input-partida, #input-saida").autocomplete({
      source: function(request, response) {
        const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios";
        const cacheKey = request.term.toLowerCase();
  
        // Verificar se os dados estão armazenados em cache
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
          const cidadesFormatadas = JSON.parse(cachedData);
          response(cidadesFormatadas);
          return;
        }
  
        $.getJSON(apiUrl, { nome: request.term }, function(cidades) {
          const filtro = request.term.toLowerCase();
          const cidadesFiltradas = cidades.filter(function(cidade) {
            return cidade.nome.toLowerCase().startsWith(filtro);
          });
  
          const cidadesFormatadas = cidadesFiltradas.map(function(cidade) {
            return { label: cidade.nome, value: cidade.nome };
          });
  
          // Armazenar os dados em cache
          localStorage.setItem(cacheKey, JSON.stringify(cidadesFormatadas));
  
          response(cidadesFormatadas);
        });
      },
      minLength: 3
    });
  });
  