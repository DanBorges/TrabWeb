angular.module('moduleMenuInicial', [])

.controller('menuInicialController', function($scope, $http, $timeout, $location, navService) {
  $scope.loadingBar = false;
  $scope.cultura = '';
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
  $scope.irPaginaContacao = function(){
    $location.path('/exibir-cotacoes');
  };
  $scope.irPaginaAnalise = function(){
    $location.path('/analise');
  };

})
