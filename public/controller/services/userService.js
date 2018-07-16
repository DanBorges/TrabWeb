angular.module('userService',[])

.factory('userService', function() {

	var usuarioService = {};
	var _id = 0;
	var _nome = '';
//	var _email = '';
	var _permissao = 0;

	usuarioService.setId = function(id) {
		_id = id;
	}

	usuarioService.getId = function() {
		return _id;
	}

	usuarioService.setNome = function(nome) {
		_nome = nome;
	}

	usuarioService.getNome = function() {
		return _nome;
	}

//	usuarioService.setEmail = function(email) {
//		_email = email;
//	}
//
//	usuarioService.getEmail = function() {
//		return _email;
//	}

	usuarioService.setPermissao = function(permissao) {
		_permissao = permissao;
	}
	usuarioService.getPermissao = function() {
		return _permissao;
	}

	usuarioService.getUsuario = function() {

		var usuario = {};
		usuario.id = _id;
		usuario.nome = _nome;
//		usuario.email = _email;
		usuario.permissao = _permissao;

		return usuario;
	}

	usuarioService.clearUsuario = function () {

		usuarioService = {};
		_id = 0;
		_nome = '';
//		_email = '';
		_tipoPermissao = 0;
	}

	return usuarioService;

})
