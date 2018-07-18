package entitys.request;


public class TrabalhoRequest {

	private Long id;
	private Long idProfessor;
	private Long idAluno;
	private Long idTipoTrabalho;
	private String titulo;
	
	
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
