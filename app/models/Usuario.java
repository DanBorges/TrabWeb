package models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import play.db.ebean.Model;

@Entity
@Table(name="usuario")
public class Usuario extends Model { 
	
	private static final long serialVersionUID = -1746546171805131391L;

	public static Finder<Long,Usuario> find = new Finder<Long,Usuario>(Long.class, Usuario.class);
	
	public String criarToken() {
		
//		String token = "";
//		token += username;
//		return token;
		return this.id.toString();
	}
	
	public static String extrairToken(String token) {
		
//		String username = "";
		return token;
	}
	
	public static boolean salvar(Usuario user) {
		
		try {
//			user.setDataUltimoLogin(DataUtil.dateToUnixtime(new Date()));
//			user.setDataAtualizacao(DataUtil.dateToUnixtime(new Date()));
			user.setFlAtivo(1);
			user.save();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public static boolean atualizar(Usuario user) {
		
		try {
			user.setFlAtivo(1);
			user.update();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public static boolean remover(Long idUser) {
		
		try {
			Usuario user = Usuario.find.byId(idUser);
			user.setFlAtivo(0);
//			user.setDataAtualizacao(DataUtil.dateToUnixtime(new Date()));
			user.update();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public static List<Usuario> findAllAtivo() {
		
		return find.where().eq("fl_ativo", 1).findList();
	}
	
	public static Usuario findById(Long id) {
		
		return find.byId(id);
	}
	
	public static Long findByEmail(String email) {
		
		Usuario usuario = find.where().eq("email", email.toLowerCase()).eq("fl_ativo", 1).findUnique();
		if(usuario == null) {
			return null;
		} else {
			return usuario.getId();
		}
	}

	public static Usuario logarSistema(String email, String password) {

		Usuario user = find.where().eq("email", email).eq("senha", password).eq("fl_ativo", 1).findUnique();
		return user;
	}

	public static List<Usuario> findByPermissao(int permissao) {
		return find.where().eq("fl_ativo", 1).eq("permissao", permissao).findList();
	}
	
	public enum Permissao {

		ADMINISTRADOR(1, "Administrador"),
		PROFESSOR(2, "Professor"),
		ALUNO(3, "Aluno");
		
		private int codigo;
		private String descricao;
		
		private Permissao(Integer codigo, String descricao) {
			this.codigo = codigo;
			this.descricao = descricao;
		}

		public Integer getCodigo() {
			return codigo;
		}
		
		public String getDescricao() {
			return descricao;
		}
		
		public static String getDescricao(Integer codigo) {
			
			for(Permissao status : Permissao.values()) {
				if(status.getCodigo().equals(codigo)) {
					return status.getDescricao();
				}
			}
			
			return "";
		}
	}
	
	@Id
	private Long id;
	
	private String nome;
	
	private String email;
	
	private String senha;
	
	private int permissao;
	
	@Column(name="fl_ativo")
	private int flAtivo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public int getPermissao() {
		return permissao;
	}

	public void setPermissao(int permissao) {
		this.permissao = permissao;
	}

	public int getFlAtivo() {
		return flAtivo;
	}

	public void setFlAtivo(int flAtivo) {
		this.flAtivo = flAtivo;
	}
}