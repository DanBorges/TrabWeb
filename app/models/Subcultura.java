package models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import play.db.ebean.Model;

@Entity
@Table(name="subcultura")
public class Subcultura extends Model { 
	
	private static final long serialVersionUID = -4324327558920718992L;

	public static Finder<Long,Subcultura> find = new Finder<Long,Subcultura>(Long.class, Subcultura.class);

	public static Subcultura findById(Long id) {
		
		return find.byId(id);
	}
	
	public static List<Subcultura> findAll() {
		
		return find.all();
	}
	
	public static List<Subcultura> findAllByCulturaId(int cultura) {
		
		return find.where().eq("cultura", cultura).findList();
	}
	
	public static boolean save(Subcultura subcultura) {
		
		try {
			subcultura.save();
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public static boolean update(Subcultura subcultura) {
		
		try {
			subcultura.update();
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public enum Cultura {

		CAFE(1, "Café"),
		FRUTAS(2, "Frutas");
//		HORTALICAS(3, "Hortaliças");
		
		private int codigo;
		private String descricao;
		
		private Cultura(Integer codigo, String descricao) {
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
			
			for(Cultura status : Cultura.values()) {
				if(status.getCodigo().equals(codigo)) {
					return status.getDescricao();
				}
			}
			
			return "";
		}
	}
	
	@Id
	private Long id;

	private int cultura;
	
	private String nome;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getCultura() {
		return cultura;
	}

	public void setCultura(int cultura) {
		this.cultura = cultura;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}