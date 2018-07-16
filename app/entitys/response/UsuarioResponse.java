package entitys.response;

import models.Usuario;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties
public class UsuarioResponse {

	public UsuarioResponse(Usuario user) {

		if(user != null) {
			this.id = user.getId();
			this.nome = user.getNome();
			this.permissao = user.getPermissao();
			this.permissaoDescricao = Usuario.Permissao.getDescricao(user.getPermissao());
			this.email = user.getEmail();
			
//			this.dataUltimoLogin = user.getDataUltimoLogin();
		}
	}

	private Long id;

	private String nome;

	private int permissao;

	private String email;

	private String permissaoDescricao;

//	private Long dataUltimoLogin;

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public int getPermissao() {
		return permissao;
	}

	public String getEmail() {
		return email;
	}

	public String getPermissaoDescricao() {
		return permissaoDescricao;
	}
}