$(".input-partida").autocomplete({
    source: function(request, response) {
        const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios";


        $.getJSON(apiUrl, { nome: request.term }, function(cidades) {

            const cidadesFormatadas = cidades.map(function(cidade) {
                return { label: cidade.nome, value: cidade.nome };
            });


            response(cidadesFormatadas);
        });
    },
    minLength: 3
});
$(".input-saida").autocomplete({
    source: function(request, response) {
        const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios";


        $.getJSON(apiUrl, { nome: request.term }, function(cidades) {

            const cidadesFormatadas = cidades.map(function(cidade) {
                return { label: cidade.nome, value: cidade.nome };
            });


            response(cidadesFormatadas);
        });
    },
    minLength: 3
});