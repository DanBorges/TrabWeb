package models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import play.db.ebean.Model;
@Entity
@Table(name="tipo_trabalho")
public class TipoTrabalho extends Model {
	public static Finder<Long,TipoTrabalho> find = new Finder<Long,TipoTrabalho>(Long.class, TipoTrabalho.class);

	@Id
	private Long id;
	@Column(name="tipo_trabalho")
	private String tipoTrabalho;
	
	public static TipoTrabalho findByTipoTrabalho(String tipoTrabalho) {
		return find.where().eq("tipo_trabalho", tipoTrabalho).findUnique();
	}
	
	public static List<TipoTrabalho> findAllTiposTrabalho() {
		return find.all();
	}

	public static boolean save(TipoTrabalho tipoTrabalho) {
		
		try {
			tipoTrabalho.save();
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public static boolean update(TipoTrabalho tipoTrabalho) {
		
		try {
			tipoTrabalho.update();
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
	public String getTipoTrabalho() {
		return tipoTrabalho;
	}
	public void setTipoTrabalho(String tipoTrabalho) {
		this.tipoTrabalho = tipoTrabalho;
	}

	
	
	
	
}
