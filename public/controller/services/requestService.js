angular.module('requestService', [])

.service('requestService', ['$http','$q', function($http, $q){


	this.findAllPainelBySubculturaId = function(idSubcultura){
		return $http.get('/navegacaoController/findAllPainelBySubculturaId/' + idSubcultura)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	
/*************************Usuário******************************/

	this.findAllUsuarios = function(){
		return $http.get('/usuarioController/findAllUsuario')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findAllPermissaoUsuario = function(){
		return $http.get('/usuarioController/findAllPermissaoUsuario')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.cadastrarUsuario = function(obj){
		return $http.post('/usuarioController/cadastrarUsuario', obj)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.editarUsuario = function(obj){
		return $http.post('/usuarioController/editarUsuario', obj)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.excluirUsuario = function(id_usuario){
		return $http.get('/usuarioController/excluirUsuario/' + id_usuario)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}




this.findAllTiposTrabalhos = function(){
	return $http.get('/tipoTrabalhoController/findAllTiposTrabalho')
	.then(function(response) {
		if (typeof response.data === 'object') {
			return response.data;
		} else {
			// invalid response
			return $q.reject(response.data);
		}
	}, function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
}




this.cadastrarEditarTipoTrabalho = function(obj){
	return $http.post('/tipoTrabalhoController/cadastrarEditarTipoTrabalho', obj)
	.then(function(response) {
		if (typeof response.data === 'object') {
			return response.data;
		} else {
			// invalid response
			return $q.reject(response.data);
		}
	}, function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
}





}])
