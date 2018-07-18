angular.module('moduleUsuarios', [])

.controller('usuariosController', function($scope, requestService, $timeout, md5){
  $(document).ready(function() {
     $('.modal').modal();
   });
   
   var $toastContent = $('<span>Confirmar exclusão</span>').add($('<a ng-click="excluirUsuario()" class="btn-flat toast-action red-text">Confirmar</a>'));
   var auxIDUser = -1;
   $scope.confirmarExclusao = function(id_usuario){
    $('#DeleteUserModal').modal('open');
     auxIDUser = id_usuario;
   };

   $scope.excluirUsuario = function() {
    requestService.excluirUsuario(auxIDUser)
      .then(function(response) {
        $.unblockUI();
        findAllUsuarios();
        $('#DeleteUserModal').modal('close');
        Materialize.toast('Excluido com sucesso!', 3000, 'rounded grey darken-3');
       }, function(error) {
        $.unblockUI();
        Materialize.toast('Ocorreu algum erro!', 3000, 'rounded orange darken-3');
        console.log("erro de requisicao", error);
       }
    );
  };
   
   $scope.usuario = {};
   $scope.permissao = {};
   $scope.usuariolist = [];
   
   findAllUsuarios();
   
   function findAllUsuarios() {
	  requestService.findAllUsuarios()
	    .then(function(response) {
        $.unblockUI();
	      $scope.usuariolist = response;
	    }, function(error) {
	      console.log("erro de requisicao", error);
      }
    );
   };
   
  function findAllPermissaoUsuario() {
    requestService.findAllPermissaoUsuario()
      .then(function(response) {
        $.unblockUI();
    	  $scope.listapermissaoUsuario = response;
      }, function(error) {
        $.unblockUI();
        console.log("erro de requisicao", error);
      }
    );
  };
  $scope.novoUsuarioForm;
  $scope.repetirSenha = '';
  
  $scope.usuarioObj = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    permissao: ''
  };

  $scope.cadastrarUsuario = function() {    
    if($scope.novoUsuarioForm.$valid && $scope.usuarioObj.permissao != undefined){
      if($scope.usuarioObj.confirmarSenha === $scope.usuarioObj.senha){
        var usuario = {
          nome: $scope.usuarioObj.nome,
          email: $scope.usuarioObj.email,
          senha: md5.createHash($scope.usuarioObj.senha),
          permissao: $scope.usuarioObj.permissao
        };
        requestService.cadastrarUsuario(usuario)
          .then(function(response) {
            $.unblockUI();
            $('#modalUsuario').modal('close');
            findAllUsuarios();
            Materialize.toast('Cadastrado com sucesso!', 3000, 'rounded grey darken-3');
          }, function(error) {
        	  $.unblockUI();
        	  Materialize.toast('Ocorreu algum erro!', 3000, 'rounded orange darken-3');
          }
        );
      }else{
          Materialize.toast('As senhas são diferentes!', 3000, 'rounded orange darken-3');
      }
    }else{
        Materialize.toast('Existem campos não preenchidos!', 3000, 'rounded red darken-3');
    }
  };
    
  $scope.editarUsuario = function() {
    if($scope.usuarioObj.senha != '') {
      var senhaMd5 = md5.createHash($scope.usuarioObj.senha);
        $scope.usuarioObj.senha = senhaMd5;
    }
    // console.log($scope.usuarioObj.permissao);
    if($scope.usuarioObj.permissao != undefined){

    	 requestService.editarUsuario($scope.usuarioObj)
         .then(function(response) {
           $.unblockUI();
           $('#modalUsuario').modal('close');
           findAllUsuarios();
           Materialize.toast('Alterado com sucesso!', 3000, 'rounded grey darken-3');
         }, function(error) {
           Materialize.toast('Ocorreu algum erro!', 3000, 'rounded orange darken-3');
           $.unblockUI();
           console.log("erro de requisicao", error);
           $('.modal').modal('close');
         }
       );
    }else{
        Materialize.toast('Existem campos não preenchidos!', 3000, 'rounded red darken-3');
    }
   
  };

  $scope.modalUsuario = function(usuario) {
    $timeout(function () {
      $scope.usuarioObj = {};
      $scope.repetirSenha = '';
      $scope.usuarioObj.senha = '';
      if(usuario == null) {
          $scope.tipoModal = 'add';
          $scope.permissaoObj = '';
        } else {
          $scope.tipoModal = 'edit';
          $scope.usuarioObj.id = usuario.id;
          $scope.usuarioObj.email = usuario.email;
          $scope.usuarioObj.nome = usuario.nome;
          $("#selectUser").val(usuario.permissao);
//        		document.getElementById("selectUser").value = usuario.permissao;
        }
      }, findAllPermissaoUsuario());
  };
  //validação de email//
  $('form input[name="email"]').blur(function () {
      var email = $(this).val();
      var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
      if (re.test(email)) {
          $('.msg').hide();
          $('.success').show();
      } else {
          $('.msg').hide();
          $('.error').show();
      }

    }
  );

 
})
