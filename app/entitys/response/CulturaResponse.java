package entitys.response;

import models.Subcultura.Cultura;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties
public class CulturaResponse {

	public CulturaResponse(Cultura cultura) {

		if(cultura != null) {
			this.id = cultura.getCodigo();
			this.nome = cultura.getDescricao();
		}
	}
	
	private Integer id;
	
	private String nome;

	public Integer getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}
}