package util;

import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.imageio.ImageIO;

import org.apache.commons.codec.binary.Base64;

/**
 * 
 * Classe Utilitaria para manipulacoa de arquivos
 * 
 * */
public class FileUtil {

	public static void criarPasta(String path) {

		try {
			
			File dir = new File(path);
			if(!dir.exists()) {
				dir.mkdir();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Salva o conteudo de string de uma imagem 
	 * 
	 * @param content Conteudo da imagem
	 * @param path Caminho a salvar a imagem
	 * 
	 * **/
	public static void salvarImagem(String content, String path) {

		try {
			
	        byte[] imgByteArray = Base64.decodeBase64(content.getBytes());
	        InputStream in = new ByteArrayInputStream(imgByteArray);
	        BufferedImage bufferedImage = ImageIO.read(in);
			ImageIO.write(bufferedImage, "png", new File(path));

		} catch (IOException e) {
			System.out.println("salvar imagem exception");
			e.printStackTrace();
		}
	}
	
	/**
	 * Salva o @param content no caminho @param path <br>
	 * 
	 * @param mesmoArquivo indica se o novo arquivo deve fazer um append
	 * 
	 * **/
	public static void salvarArquivoCriaPasta(String content, String path, String nomeArquivo, Boolean mesmoArquivo) {

		try {
			
			File dir = new File(path);
			if(!dir.exists()) {
				dir.mkdir();
			}
			
			FileWriter writer = new FileWriter(path + "//" + nomeArquivo, mesmoArquivo);
			BufferedWriter out = new BufferedWriter(writer);
			out.write(content);
			out.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	/**
	 * Salva o @param content no caminho @param path <br>
	 * 
	 * @param mesmoArquivo indica se o novo arquivo deve fazer um append
	 * 
	 * **/
	public static void salvarArquivo(String content, String path, Boolean mesmoArquivo) {

		try {
			FileWriter writer = new FileWriter(path, mesmoArquivo);
			BufferedWriter out = new BufferedWriter(writer);
			out.write(content);
			out.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static BufferedReader lerArquivo(String path) {

		try {
			FileInputStream fstream = new FileInputStream(path);
			DataInputStream in = new DataInputStream(fstream);
			BufferedReader br = new BufferedReader(new InputStreamReader(in));
			return br;

		} catch (FileNotFoundException e) {

			e.printStackTrace();
			return null;
		}
	}

	 /**
	 * Save as imagens em diretórios do sistema
	 * @param name
	 * @param image
	 */
//	public static String saveByteImage(StringBuilder caminho, String nomeImagem, byte[] imagem){
//
////		//Cria o caminho do diretório, veriricar se já existe, salvar imagem.
////		StringBuilder sb = new StringBuilder();
////		sb.append(applicationBean.getPropriedadeSistema(ApplicationBean.AVALIACAO_TUTOR_CAMINHO_ARQUIVOS));
////		sb.append(ava.getId()).append("//")
////		.append(tutorSelecionado.getRelDisciplinaTurma().getTutor().getCodMoodle()).append("//")
////		.append(tutorSelecionado.getRelDisciplinaTurma().getId()).append("//");
////		//	                .append(alunoSelecionado.getAvaliacaoAluno().getId()).append("//");
//		File file = new File(caminho.toString());
//
//		file.mkdirs();
////		System.out.println("criou arquivos?? " + criou);
//		
//		String caminhoArquivoSalvar = caminho.toString();
//		caminhoArquivoSalvar += nomeImagem;
//		
////		caminho.append(nomeImagem);
//        saveByteArrayImages(imagem, caminhoArquivoSalvar);
//        return caminhoArquivoSalvar.toString();
//	}
	
//	public static boolean saveByteArrayImages(byte[] image, String path) {
//		FileOutputStream fos = null;
//		ByteArrayInputStream bais = new ByteArrayInputStream(image);
//		try {
//			fos = new FileOutputStream(new File(path));
//			int data;
//			while ((data = bais.read()) != -1) {
//				char ch = (char) data;
//				fos.write(ch);
//			}
//		} catch (IOException e) {
//			e.printStackTrace();
//			return false;
//		} finally {
//			if (fos != null) {
//				try {
//					fos.close();
//				} catch (IOException e) {
//					e.printStackTrace();
//				}
//				return false;
//			}
//		}
//		return true;
//	}
	
	/**
	 * Retira charset que estao fora do formato. 
	 * TODO verificar encoding correto.
	 * 
	 * */
//	public static String retirarCharsetEstranho(String original) {
//		
//		Document doc = Jsoup.parse(original);
//		if(doc.html().contains("") || doc.html().contains("") || doc.html().contains("") || doc.html().contains("") ||
//				doc.html().contains("") || doc.html().contains("") || doc.html().contains("") || doc.html().contains("") ||
//				doc.html().contains("") || doc.html().contains("") || doc.html().contains("") || doc.html().contains("") ||
//				doc.html().contains("") || doc.html().contains("")) {
//
////			System.out.println("idPost: " + idPost);
////			System.out.println(doc.html());
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//			doc.html(doc.html().replaceAll("", ""));
//		}
//		return doc.html();
//	}
}