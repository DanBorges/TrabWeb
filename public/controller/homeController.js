angular.module('moduleHome', [])

.controller('homeController', function($scope, $http, requestService, userService, $location, navService) {
	
	$scope.acessarCultura = function(cultura_id){
		$.blockUI({ message:  navService.getloading() });
		navService.setId_cultura(cultura_id);
		// console.log(navService.getId_cultura());
		requestService.findAllSubculturaByCulturaId(cultura_id)
			.then(function(response) {
				navService.setListaSubcultura(response);
				$.unblockUI();
				$location.path('/subcultura');
			}, function(error) {
				// alert("Erro no servidor");
				$.unblockUI();
				console.log("erro de requisicao", error);
			}
		);
	};
	
})
