import play.Application;
import play.GlobalSettings;
import play.libs.F.Promise;
import play.mvc.Http.RequestHeader;
import play.mvc.Result;
import security.SigtaAuthenticator;

public class SigtaGlobal extends GlobalSettings {
	
	@Override
	public void onStart(Application app) {
		
	}
	
	@Override
	public Promise<Result> onHandlerNotFound(RequestHeader request) {
		
		if(request.cookie(SigtaAuthenticator.COOKIE_USUARIO_ID) == null) {
			return Promise.<Result>pure(play.mvc.Results.notFound(views.html.index.render()));
		}
		
		String usuarioTokenAuth = request.cookie(SigtaAuthenticator.COOKIE_USUARIO_ID).value();
		if(usuarioTokenAuth != null) {
			return Promise.<Result>pure(play.mvc.Results.notFound(views.html.template.render()));
		}
		
		return Promise.<Result>pure(play.mvc.Results.notFound(views.html.index.render()));
	}
}
