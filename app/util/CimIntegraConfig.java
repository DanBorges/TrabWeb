package util;


import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

/**
 * 
 * Configuration class. Load the contasbox.properties onstartup
 * Contains the keys for read the properties from the file
 * Contains the cookies names 
 * For all the application 
 * 
 * **/
public class CimIntegraConfig {

	/**configuration file**/
	private static Config CONFIGURATION_FILE = ConfigFactory.load("cimintegra.properties");
	
	/**Chaves mapeadas no arquivo cimintegra.properties**/
	public static String USER_REPORT_FOLDER="USER_REPORT_FOLDER";
	
	public static String COOKIE_USUARIO_ID = "___ID";

	/**
	 * Retorna o valor da @param key do arquivo contasbox.properties
	 * 
	 * **/
	public static String getString(String key) {
	
		return CONFIGURATION_FILE.getString(key);
	}
}
