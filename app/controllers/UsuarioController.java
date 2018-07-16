package controllers;

import java.util.ArrayList;
import java.util.List;

import models.Usuario;
import models.Usuario.Permissao;
import play.data.Form;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import entitys.request.UsuarioRequest;
import entitys.response.AbstractResponse;
import entitys.response.EnumResponse;
import entitys.response.UsuarioResponse;

public class UsuarioController extends Controller {

	public static Result findAllPermissaoUsuario() {
		
		List<EnumResponse> response = new ArrayList<EnumResponse>();
		
		for(Permissao status : Permissao.values()) {
			
			EnumResponse er = new EnumResponse();
			er.setCodigo(status.getCodigo());
			er.setDescricao(status.getDescricao());
			response.add(er);
		}
		
		return ok(Json.toJson(response));
	 }

	public static Result findAllUsuario(){
		List<Usuario> listaUsuario = Usuario.findAllAtivo();
		List<UsuarioResponse> listaUsuarioResponse = new ArrayList<UsuarioResponse>();
		if (listaUsuario != null && !listaUsuario.isEmpty()) {
			for (Usuario usuario: listaUsuario){
				UsuarioResponse usuarioResponse = new UsuarioResponse(usuario);
				listaUsuarioResponse.add(usuarioResponse);
			}

			return ok(Json.toJson(listaUsuarioResponse));
		}

		return ok(Json.toJson("Nada Encontrado!"));
	}

	public static Result cadastrarUsuario(){

		Form<UsuarioRequest> form = Form.form(UsuarioRequest.class);
		form = form.bindFromRequest();
		UsuarioRequest request = form.get();

		AbstractResponse response = null;

		if(Usuario.findByEmail(request.getEmail()) != null) {
			response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(),
					 "Usuário já existe");
		} else {
			Usuario usuario = new Usuario();
			usuario.setNome(request.getNome());
			usuario.setEmail(request.getEmail());
			usuario.setSenha(request.getSenha());
			usuario.setPermissao(request.getPermissao());

			try {
				Usuario.salvar(usuario);

				response = new AbstractResponse(AbstractResponse.IconEnum.THUMBS_UP.getDescricao(), AbstractResponse.TypeEnum.SUCCESS.getDescricao(),
						 "Usuario cadastrado com sucesso!");
			} catch(Exception e) {

				response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(),
						 "Erro interno do servidor. Tente novamente");
			}
		}

		return ok(Json.toJson(response));
	}

	public static Result editarUsuario(){

		Form<UsuarioRequest> form = Form.form(UsuarioRequest.class);
		form = form.bindFromRequest();
		UsuarioRequest request = form.get();

		AbstractResponse response = null;

		Usuario usuario = Usuario.findById(request.getId());
		if(usuario != null) {
			usuario.setNome(request.getNome());
			Long idUsuarioRetorno = Usuario.findByEmail(request.getEmail());
			if(idUsuarioRetorno == request.getId() || idUsuarioRetorno == null) {
				usuario.setEmail(request.getEmail());
				usuario.setPermissao(request.getPermissao());
				
				if(!request.getSenha().isEmpty()) {
					usuario.setSenha(request.getSenha());
				}
				try {
					Usuario.atualizar(usuario);

					response = new AbstractResponse(AbstractResponse.IconEnum.THUMBS_UP.getDescricao(), AbstractResponse.TypeEnum.SUCCESS.getDescricao(),
							 "Usuario editado com sucesso!");
				} catch (Exception e) {

					response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(),
							 "Erro interno do servidor. Tente novamente");
				}
			} else {
				response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(),
						 "E-mail já cadastrado no sistema com outro usuário");
			}
			
			return ok(Json.toJson(response));
		}
		
		return ok("nada encontrado");
	}

	public static Result excluirUsuario(Long id) {

		AbstractResponse response = null;

		Usuario usuario = Usuario.findById(id);
		if(usuario != null) {
			try {
				Usuario.remover(id);

				response = new AbstractResponse(AbstractResponse.IconEnum.THUMBS_UP.getDescricao(), AbstractResponse.TypeEnum.SUCCESS.getDescricao(),
						 "Usuario excluído com sucesso!");
			} catch(Exception e) {
				response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(),
						 "Erro interno do servidor. Tente novamente");
			}
		}
		return ok(Json.toJson(response));
	}
}
