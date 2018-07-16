package entitys.response;

import models.Subcultura;
import models.Subcultura.Cultura;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties
public class SubculturaResponse {

	public SubculturaResponse(Subcultura subcultura) {

		if(subcultura != null) {
			this.subculturaId = subcultura.getId();
			this.subculturaNome = subcultura.getNome();
			this.culturaId = subcultura.getCultura();
			this.culturaNome = Cultura.getDescricao(culturaId);
		}
	}
	
	private Long subculturaId;
	
	private Integer culturaId;
	
	private String subculturaNome;
	
	private String culturaNome;

	public Long getSubculturaId() {
		return subculturaId;
	}

	public Integer getCulturaId() {
		return culturaId;
	}

	public String getSubculturaNome() {
		return subculturaNome;
	}

	public String getCulturaNome() {
		return culturaNome;
	}
}