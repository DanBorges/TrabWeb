angular.module('painelService', [])

.service('painelService', [function(){
  var id_painel = '';

  var arrayNavTabelas = [' ', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled','disabled', 'disabled', 'false'];
  // var arrayNavTabelas = [' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ', 'false'];

  var areaLavouras = '';
  var finalizarPainel = false;
  var fl_iniciado = false;
  var fl_cadastrar = false;
  
  this.setFinalizarPainel = function(bool){
	  this.finalizarPainel = bool;
  }
  this.getFinalizarPainel = function() {
    return finalizarPainel;
  }
  this.setId_painel = function(id){
	  id_painel = id;
  }
  this.getId_painel = function() {
    return id_painel;
  }
  this.setFlIniciado = function(bool){
	  fl_iniciado = bool;
  }
  this.getFlIniciado = function() {
    return fl_iniciado;
  }
  this.setFlCadastrar = function(bool){
	  fl_cadastrar = bool;
  }
  this.getFlCadastrar = function() {
    return fl_cadastrar;
  }
  this.setId_revenda = function(id) {
	  this.revendaId = id;
  }
  this.getId_revenda = function() {
    return revendaId;
  }
  this.setAreaLavouras = function(area){
	  areaLavouras = area;
  }
  this.getAreaLavouras = function() {
    return areaLavouras;
  }
  this.getArrayNavTabelas = function(){
    return arrayNavTabelas;
  }
  this.resetArrayNavTabelas = function(){
    arrayNavTabelas = [' ', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled', 'disabled','disabled', ' ', 'false'];
  }
  this.setArrayNavTabelas = function(posicao){
    if(posicao == 9){
      arrayNavTabelas[posicao] = 'true'
    }else{
      arrayNavTabelas[posicao] =  ' ';
    }
  }

}])
