package util;


public class ReportUtil {

//	/**
//	 * Gera o grafico do usuario <br>
//	 * 
//	 * grafico.jasper <br>
//	 * 
//	 * @param contasReportModel lista "model" de contas
//	 * 
//	 * **/
//	public static InputStream gerarGraficoUsuario(List<GraficoReportObject> graficoUsuarioReportObjects, String caminhoExportar) {
//		
////		ImageIcon i = new ImageIcon(ContasBoxConfig.getString(ContasBoxConfig.LOGO_CONTAS_BOX));
////		Image logo = i.getImage();
//		
//		Map<String, Object> map = new HashMap<String, Object>();
////		map.put("logo_contas_box", logo);
//		
////		OutputStream os = new ByteArrayOutputStream();
//		
//		try {
//			
////			ContasBoxConfig.getString(ContasBoxConfig.REPORT_FOLDER)
//			String compiledFile = "/home/fabricio/Desktop/" + "grafico.jasper";
//			JasperCompileManager.compileReportToFile("/home/fabricio/Desktop/" + "grafico.jrxml", compiledFile);
//			
//			JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource(graficoUsuarioReportObjects, false);
//			
//			JasperPrint jrprint = JasperFillManager.fillReport(compiledFile, map, ds);
//
//			JasperExportManager.exportReportToPdfFile(jrprint, caminhoExportar);
//			
//			return new FileInputStream(caminhoExportar);
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		
//		return null;
//	}
}