package controllers;

import models.Usuario;
import play.mvc.Controller;
import security.SigtaAuthenticator;

//@Authenticated(CimIntegraAuthenticator.class)
public abstract class AbstractController extends Controller {

//	protected final static DateTimeZone dtz = DateTimeZone.forID("America/Sao_Paulo");
	
	public static Usuario getUsuarioLogado() {
		
		String usuarioId = ctx().request().cookie(SigtaAuthenticator.COOKIE_USUARIO_ID).value();
		Usuario usuarioLogado = Usuario.find.byId(Long.valueOf(usuarioId));
		
		return usuarioLogado;
	}
}
