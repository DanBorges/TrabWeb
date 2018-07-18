angular.module('moduleTrabalho', [])

.controller('trabalhoController', function($scope, requestService, $timeout, md5,){
  $(document).ready(function() {
     $('.modal').modal();
   });
//   $scope.tiposTrabalhosList = [];
//   $scope.tipoTrabalhoObj = {
//		   id: '',
//		   tipo_trabalho: ''
//   };
   
//   findAllTiposTrabalhos();
   
//	function findAllTiposTrabalhos() {
//		requestService.findAllTiposTrabalhos()
//	    	.then(function(response) {
//				console.log(response);
//				$.unblockUI();
//				  $scope.tiposTrabalhosList = response;
//	    	}, function(error) {
//				$.unblockUI();
//	       		console.log("erro de requisicao", error);
//			}
//		);
//	};
//	
	
 
})