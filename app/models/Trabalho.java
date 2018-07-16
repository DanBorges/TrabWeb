package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import play.db.ebean.Model;
import play.db.ebean.Model.Finder;
@Entity
@Table(name="trabalho")
public class Trabalho extends Model {

	@Id
	private Long id;
	@Column(name="id_usuario")
	private Long idUsuario;
	@Column(name="id_tipo_trabalho")
	private Long idTipoTrabalho;
	@Column(name="titulo")
	private String titulo;
	
	
	public static Finder<Long,Trabalho> find = new Finder<Long,Trabalho>(Long.class, Trabalho.class);

	public static Trabalho findByIdUsuario(Long idUsuario) {
		return find.byId(idUsuario);
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}
	public Long getIdTipoTrabalho() {
		return idTipoTrabalho;
	}
	public void setIdTipoTrabalho(Long idTipoTrabalho) {
		this.idTipoTrabalho = idTipoTrabalho;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	
	
	
}
