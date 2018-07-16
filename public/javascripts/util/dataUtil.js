/**
 * 
 * Util para trabalhar com criacao de graficos c3.js
 * 
 * */

/**
 * retorna a data como dd/MM/yyyy. Parametro string com formato dd/mm/yyyy ou objeto Date
 * 
 * */
function dataUtilgetDataAsString(dataObject) {
	
	var anoVencimento;
	var mesVencimento;
	var diaVencimento;
	
	try {
		//se a data veio correta da extracao (se for instancia de string)
		dataObject.split('/');
		return dataObject;
		
	} catch(exception) {
		
		try {
			
			//data modificada no datapicker, a qual eh date...
			anoVencimento = dataObject.getFullYear();
			mesVencimento = dataObject.getMonth() + 1;
			diaVencimento = dataObject.getDate();
			
			//adiciona '0' a mes / dia menor que 10
			if(mesVencimento.toString().length == 1) {
				mesVencimento = '0' + mesVencimento;
			}
			if(diaVencimento.toString().length == 1) {
				diaVencimento = '0' + diaVencimento;
			}

			console.log(' data util >>  ' + diaVencimento + '/' + mesVencimento + '/' + anoVencimento);
			return diaVencimento + '/' + mesVencimento + '/' + anoVencimento;
			
		} catch(exception2) {
		}
	}
}