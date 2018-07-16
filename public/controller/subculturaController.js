angular.module('moduleSubcultura', [])

.controller('subculturaController', function($scope, $location, navService){
  $scope.loadingBar = false;
  $scope.cultura = '';
  $scope.subcultura = '';
  // var idCultura = navService.getId_cultura();
  $scope.nome_subcultura = navService.getNome_subcultura();
  // console.log(navService.getId_cultura());
    if (navService.getId_cultura() == '1') {
      $scope.cultura = 'Café';
    }
    if (navService.getId_cultura() == '2') {
      $scope.cultura = 'Frutas';
    }
    if (navService.getId_cultura() == '3') {
      $scope.cultura = 'Hortaliças';
    }
    
  $scope.subculturas = navService.getListaSubcultura();
  $scope.proximaPagina = function(id_subcultura, nome_subcultura){
    navService.setNome_subcultura(nome_subcultura);
    navService.setId_subcultura(id_subcultura);
    $location.path('/menuInicial');
  };

})
