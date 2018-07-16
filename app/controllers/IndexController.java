package controllers;

import models.Usuario;
import play.data.Form;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import security.SigtaAuthenticator;
import entitys.request.UsuarioRequest;
import entitys.response.AbstractResponse;

public class IndexController extends Controller {
	
	public static Result index() {

		return ok(views.html.index.render());
	}

	public static Result logarSistema() {
		
		Form<UsuarioRequest> form = Form.form(UsuarioRequest.class);
		form = form.bindFromRequest();
		UsuarioRequest usuarioRequest = form.get();
		
		String email = usuarioRequest.getEmail();
		String senha = usuarioRequest.getSenha();
		
		AbstractResponse response = null;
		Usuario usuarioLogado = Usuario.logarSistema(email, senha);
		
		if(usuarioLogado == null || usuarioLogado.getId() == null) {
			response().discardCookie(SigtaAuthenticator.COOKIE_USUARIO_ID);
			response().discardCookie(SigtaAuthenticator.COOKIE_USUARIO_PERMISSAO);
			
			response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(), 
			"Usuario e/ou senha incorreto(s)!");
	
			return ok(Json.toJson(response));
		}

		response().discardCookie(SigtaAuthenticator.COOKIE_USUARIO_ID);
		response().discardCookie(SigtaAuthenticator.COOKIE_USUARIO_PERMISSAO);

		String tokenUsuario = usuarioLogado.criarToken();
		response().setCookie(SigtaAuthenticator.COOKIE_USUARIO_ID, tokenUsuario);
		response().setCookie(SigtaAuthenticator.COOKIE_USUARIO_PERMISSAO, String.valueOf(usuarioLogado.getPermissao()));

		response = new AbstractResponse(AbstractResponse.IconEnum.THUMBS_UP.getDescricao(), AbstractResponse.TypeEnum.SUCCESS.getDescricao(),
				"Bem vindo(a) " + usuarioLogado.getNome() + " !");
		
		return ok(Json.toJson(response));
	}

	public static Result recuperarSenha() {
		
		AbstractResponse r = new AbstractResponse(AbstractResponse.IconEnum.WARNING_SIGN.getDescricao(), AbstractResponse.TypeEnum.WARNING.getDescricao(), 
				 		"Email é obrigatório!!");
		return ok(Json.toJson(r));
 
	}
}
