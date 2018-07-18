package models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import play.db.ebean.Model;
@Entity
@Table(name="trabalho")
public class Trabalho extends Model {

	private static final long serialVersionUID = -8131581811486188030L;
	
	@Id
	private Long id;
	@Column(name="id_professor")
	private Long idProfessor;
	@Column(name="id_aluno")
	private Long idAluno;
	@Column(name="id_tipo_trabalho")
	private Long idTipoTrabalho;
	@Column(name="titulo")
	private String titulo;
	
	
	public static Finder<Long,Trabalho> find = new Finder<Long,Trabalho>(Long.class, Trabalho.class);

	public static List<Trabalho> findByIdAluno(Long idAluno) {
		return find.where().eq("id_aluno", idAluno).findList();
	}
	
	public static List<Trabalho> findByIdProfessor(Long idProfessor) {
		return find.where().eq("id_professor", idProfessor).findList();
	}
	
	public static boolean save(Trabalho trabalho) {
		
		try {
			trabalho.save();
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public static boolean update(Trabalho trabalho) {
		
		try {
			trabalho.update();
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getIdProfessor() {
		return idProfessor;
	}

	public void setIdProfessor(Long idProfessor) {
		this.idProfessor = idProfessor;
	}

	public Long getIdAluno() {
		return idAluno;
	}

	public void setIdAluno(Long idAluno) {
		this.idAluno = idAluno;
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
