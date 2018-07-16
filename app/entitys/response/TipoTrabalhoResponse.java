package entitys.response;

import models.TipoTrabalho;

public class TipoTrabalhoResponse {
	
	public TipoTrabalhoResponse(TipoTrabalho tipoTrabalho) {
		if (tipoTrabalho != null) {
			this.id = tipoTrabalho.getId();
			this.tipoTrabalho = tipoTrabalho.getTipoTrabalho();
			
		}
	}
	
	private Long id;
	private String tipoTrabalho;
	
	
	public Long getId() {
		return id;
	}
	public String getTipoTrabalho() {
		return tipoTrabalho;
	}
	
	

}
