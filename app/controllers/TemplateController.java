package controllers;

import models.Usuario;
import play.libs.Json;
import play.mvc.Result;
import security.SigtaAuthenticator;
import entitys.response.UsuarioResponse;

//@Authenticated(CimIntegraAuthenticator.class)
public class TemplateController extends AbstractController {
	
//	private static Map<Long,String> lista = new HashMap<Long, String>();
//	
//	public static Result getList() {
//		
//		return ok(Json.toJson(lista));
//	}
//	
//	public static Result addList(Long id) {
//		
//		lista.put(id, id.toString());
//		return ok(Json.toJson(lista));
//	}
//	
//	public static Result removeList(Long id) {
//		
//		lista.remove(id);
//		return ok(Json.toJson(lista));
//	}

	public static Result redirectLogin() {

//		return ok(views.html.index.render());
		return ok(views.html.template.render());
	}

	public static Result usuarioLogado() {

		Usuario usuarioLogado = getUsuarioLogado();
		UsuarioResponse response = new UsuarioResponse(usuarioLogado);
		return ok(Json.toJson(response));
		
	}

	public static Result logoutSistema() {

		response().discardCookie(SigtaAuthenticator.COOKIE_USUARIO_ID);
		response().discardCookie(SigtaAuthenticator.COOKIE_USUARIO_PERMISSAO);
		response().getHeaders().clear();

		return ok(Json.toJson("response"));
	}

//	public static Result salvarPrimeiroLogin() {
//
//		Form<UsuarioRequest> form = Form.form(UsuarioRequest.class);
//		form = form.bindFromRequest();
//		UsuarioRequest usuarioRequest = form.get();
//
//		Usuario usuarioNovo = new Usuario();
//		usuarioNovo.setId(getUsuarioLogado().getId());
//		usuarioNovo.setSenha(SecurityUtil.toMD5(usuarioRequest.getSenha()));
//		usuarioNovo.setPrimeiroLogin(1);
//		usuarioNovo.setNome(usuarioRequest.getNome());
//
//		boolean salvarSucesso = Usuario.atualizar(usuarioNovo);
//
//		AbstractResponse response = new AbstractResponse();
//		if(salvarSucesso) {
//
//			Log log = new Log();
//			log.setAcao("Usuario fez o primeiro login " + usuarioNovo.getNome());
//			log.setUsuarioId(getUsuarioLogado().getId());
//			log.setData(Calendar.getInstance());
//			log.save();
//
//			response.setMessage("Usuario atualizado com sucesso");
//			response.setType("s");
//		} else {
//			response.setMessage("Não foi possível atualizado usuario");
//			response.setType("e");
//		}
//
//		return ok(Json.toJson(response));
//	}

}
