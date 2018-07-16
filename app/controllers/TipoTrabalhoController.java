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
	
	public static Result cadastrarTipoTrabalho(){

		Form<TipoTrabalhoRequest> form = Form.form(TipoTrabalhoRequest.class);
		form = form.bindFromRequest();
		TipoTrabalhoRequest request = form.get();

		AbstractResponse response = null;

		if(TipoTrabalho.findByTipoTrabalho(request.getTipoTrabalho()) != null) {
			response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(),
					 "Tipo do trabalho já existe");
		} else {
			TipoTrabalho tipoTrabalho = new TipoTrabalho();
			tipoTrabalho.setTipoTrabalho(request.getTipoTrabalho());

			try {
				TipoTrabalho.save(tipoTrabalho);

				response = new AbstractResponse(AbstractResponse.IconEnum.THUMBS_UP.getDescricao(), AbstractResponse.TypeEnum.SUCCESS.getDescricao(),
						 "Tipo do Trabalho	 cadastrado com sucesso!");
			} catch(Exception e) {

				response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(),
						 "Erro interno do servidor. Tente novamente");
			}
		}

		return ok(Json.toJson(response));
	}

}
