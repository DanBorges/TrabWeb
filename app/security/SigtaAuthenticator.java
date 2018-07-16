package security;

import play.mvc.Http.Context;
import play.mvc.Result;
import play.mvc.Security.Authenticator;

public class SigtaAuthenticator extends Authenticator {

//	public static String COOKIE_X_AUTH_TOKEN = "X-AUTH-TOKEN";
	public static String COOKIE_USUARIO_ID = "___ID";
	public static String COOKIE_USUARIO_PERMISSAO = "___P";
			
    @Override
    public String getUsername(Context ctx) {
    	
    	return "Username logado";
    }

    @Override
    public Result onUnauthorized(Context ctx) {
    	
        return redirect(controllers.routes.IndexController.index());
    }
}
