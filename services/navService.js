angular.module('navService', [])

.service('navService', [function(){
  var id_cultura = '';
  var id_subcultura = '';
  var lista_subcultura = [];
  var nome_subcultura = '';
  var tipo_cotacao = '';

  var loading = "<div class='preloader-wrapper big active' style='margin-top:50px'>" +
                  "<div class='spinner-layer spinner-green-only'>" +
                    "<div class='circle-clipper left'>" +
                      "<div class='circle'></div>"+
                    "</div><div class='gap-patch'>"+
                      "<div class='circle'></div>" +
                    "</div><div class='circle-clipper right'>"+
                      "<div class='circle'></div>"+
                    "</div>" +
                  "</div>" +
                "</div>"+
                "<h4 class='teal-text text-lighten-1'>CARREGANDO...</h4>";

  this.getloading = function(){
    return loading;
  }

  this.setId_subcultura = function(id){
    id_subcultura = id;
  }
  this.getId_subcultura = function() {
    return id_subcultura;
  }
  this.setListaSubcultura = function(lista) {
   lista_subcultura = lista;
  }
  this.getListaSubcultura = function(){
    return lista_subcultura;
  }

  this.setId_cultura = function(id) {
    this.id_cultura = id
  }

  this.getId_cultura =function() {
    return this.id_cultura;
  }

  this.getNome_subcultura = function() {
    return nome_subcultura;
  }
  this.setNome_subcultura = function(subcultura) {
   nome_subcultura = subcultura;
  }
  
  this.setTipo_cotacao = function(tipo){
	  tipo_cotacao = tipo;
  }
  this.getTipo_cotacao = function() {
    return tipo_cotacao;
  }

}])
