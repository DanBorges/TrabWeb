package controllers;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import models.Cidade;
import play.data.Form;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import entitys.request.CidadeRequest;
import entitys.response.AbstractResponse;

public class CidadeController extends Controller {

	public static Result findAllCidade(){
		
		List<Cidade> listaCidades = Cidade.findAll();
		
		if(listaCidades != null && !listaCidades.isEmpty()) {
			Collections.sort(listaCidades, new Comparator<Cidade>() {
		        @Override
		        public int compare(Cidade nome1, Cidade nome2)
		        {
		            return nome1.getNome().compareTo(nome2.getNome());
		        }
			});
			
			return ok(Json.toJson(listaCidades));
		}
		
		return ok(Json.toJson("nada encontrado"));
	}
	
	public static Result cadastrarCidade(){
		
		Form<CidadeRequest> form = Form.form(CidadeRequest.class);
		form = form.bindFromRequest();
		CidadeRequest request = form.get();
		
		AbstractResponse response = null;
		
		Cidade cidade = new Cidade();
		cidade.setEstado(request.getEstado());
		cidade.setNome(request.getNome());
		
		try {
			Cidade.save(cidade);
			
			response = new AbstractResponse(AbstractResponse.IconEnum.THUMBS_UP.getDescricao(), AbstractResponse.TypeEnum.SUCCESS.getDescricao(), 
					 "Cidade cadastrada com sucesso!");
		} catch(Exception e) {
			
			response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(), 
					 "Erro interno do servidor. Tente novamente");
		}
		
		return ok(Json.toJson(response));
	}
	
	public static Result editarCidade(){
		
		Form<CidadeRequest> form = Form.form(CidadeRequest.class);
		form = form.bindFromRequest();
		CidadeRequest request = form.get();
		
		AbstractResponse response = null;
		
		Cidade cidade = Cidade.findById(request.getId());
		if(cidade != null) {
			cidade.setEstado(request.getEstado());
			cidade.setNome(request.getNome());
			
			try {
				Cidade.update(cidade);

				response = new AbstractResponse(AbstractResponse.IconEnum.THUMBS_UP.getDescricao(), AbstractResponse.TypeEnum.SUCCESS.getDescricao(), 
						 "Cidade editada com sucesso!");
			} catch (Exception e) {
				
				response = new AbstractResponse(AbstractResponse.IconEnum.REMOVE.getDescricao(), AbstractResponse.TypeEnum.DANGER.getDescricao(), 
						 "Erro interno do servidor. Tente novamente");
			}
		}
		
		return ok(Json.toJson(response));
	}
}