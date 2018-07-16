package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import play.db.ebean.Model;

@Entity
@Table(name="cidade")
public class Cidade extends Model { 
	
	private static final long serialVersionUID = 5241076758300584542L;

	public static Finder<Long,Cidade> find = new Finder<Long,Cidade>(Long.class, Cidade.class);

	public static Cidade findById(Long id) {
		
		return find.byId(id);
	}
	
	public static List<Cidade> findAll() {
		
		return find.all();
	}
	
	public static boolean save(Cidade cidade) {
		
		try {
			cidade.save();
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public static boolean update(Cidade cidade) {
		
		try {
			cidade.update();
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public static boolean delete(Cidade cidade){
		
		try {
			cidade.delete();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	@Id
	private Long id;
	
	private String nome;

	private String estado;

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

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
}