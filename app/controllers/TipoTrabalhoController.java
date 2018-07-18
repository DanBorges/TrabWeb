package controllers;

import models.TipoTrabalho;
import play.data.Form;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import entitys.request.TipoTrabalhoRequest;
import entitys.response.AbstractResponse;

public class TipoTrabalhoController extends Controller {
	
	public static Result findAllTiposTrabalho() {
		return ok(Json.toJson(TipoTrabalho.findAllTiposTrabalho()));
	}
	
	public static Result cadastrarEditarTipoTrabalho(){

		Form<TipoTrabalhoRequest> form = Form.form(TipoTrabalhoRequest.class);
		form = form.bindFromRequest();
		TipoTrabalhoRequest request = form.get();
		
		AbstractResponse response = null;
		
		TipoTrabalho tipoTrabalho = new TipoTrabalho();

		if(request.getId() != null) {
			tipoTrabalho.setId(request.getId());
		} 
		tipoTrabalho.setTipoTrabalho(request.getTipoTrabalho());


		boolean saveUpdate = false;
		
		if(tipoTrabalho.getId() != null) {
			saveUpdate = TipoTrabalho.update(tipoTrabalho);
		} else {
			saveUpdate = TipoTrabalho.save(tipoTrabalho);
		}
		
		if(saveUpdate) {
			response = new AbstractResponse(AbstractResponse.IconEnum.THUMBS_UP.getDescricao(), AbstractResponse.TypeEnum.SUCCESS.getDescricao(),
					 "Informações cadastradas com Sucesso!");
		} else {
			response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(),
					 "Não foi possível efetuar cadastro!");
		}
		

		return ok(Json.toJson(response));
	}
	
	public static Result excluirTipoTrabalho(Long tipoTrabalhoId) {

		AbstractResponse response = null;
		TipoTrabalho tipoTrabalho = TipoTrabalho.findById(tipoTrabalhoId);
		
		
		if(tipoTrabalho != null) {
			try {
				TipoTrabalho.remover(tipoTrabalhoId);
			

				response = new AbstractResponse(AbstractResponse.IconEnum.THUMBS_UP.getDescricao(), AbstractResponse.TypeEnum.SUCCESS.getDescricao(),
						 "Painel excluído com sucesso!");
			} catch(Exception e) {
				response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(),
						 "Erro interno do servidor. Tente novamente");
			}
		}
		else{
			return ok(Json.toJson(0));
		}
		return ok(Json.toJson(response));
	}

}
