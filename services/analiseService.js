angular.module('analiseService', [])

.service('analiseService', [function(){
  var id_painel = '';
  var painel_cidade = '';
  var painel_ano = '';
  var painel_subcultura = '';
  var prolabore = '';

  this.setId_painel = function(id){
    id_painel = id;
  }
  this.getId_painel = function() {
    return id_painel;
  }

  this.setPainel_cidade = function(cidade){
    painel_cidade = cidade;
  }
  this.getPainel_cidade = function() {
    return painel_cidade;
  }

  this.setPainel_ano = function(ano){
    painel_ano = ano;
  }
  this.getPainel_ano = function() {
    return painel_ano;
  }

  this.setPainel_subcultura = function(subcultura){
    painel_subcultura = subcultura;
  }
  this.getPainel_subcultura = function() {
    return painel_subcultura;
  }

  this.setProlabore = function(valor){
    prolabore = valor;
  }
  this.getProlabore = function() {
    return prolabore;
  }

}])
