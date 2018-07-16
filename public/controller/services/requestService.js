angular.module('requestService', [])

.service('requestService', ['$http','$q', function($http, $q){


	this.findAllPainelBySubculturaId = function(idSubcultura){
		return $http.get('/navegacaoController/findAllPainelBySubculturaId/' + idSubcultura)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findPaineisComCotacaoAbertaENaoAberta = function(idSubcultura){
		return $http.get('/navegacaoController/findPaineisComCotacaoAbertaENaoAberta/' + idSubcultura)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}
	
	this.excluirCotacao = function(idCotacao){
		return $http.get('/cotacaoController/excluirCotacao/' + idCotacao)
		.then(function(response) {
			// console.log(response);
			if (response.data === 'sucesso') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

/*************************Usuário******************************/

	this.findAllUsuarios = function(){
		return $http.get('/usuarioController/findAllUsuario')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findAllPermissaoUsuario = function(){
		return $http.get('/usuarioController/findAllPermissaoUsuario')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.cadastrarUsuario = function(obj){
		return $http.post('/usuarioController/cadastrarUsuario', obj)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.editarUsuario = function(obj){
		return $http.post('/usuarioController/editarUsuario', obj)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.excluirUsuario = function(id_usuario){
		return $http.get('/usuarioController/excluirUsuario/' + id_usuario)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

/*************************Cidade******************************/

	this.findAllCidades = function(){
		return $http.get('/cidadeController/findAllCidade')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

//	this.cadastrarCidade = function(obj){
//		return $http.post('/cidadeController/cadastrarCidade', obj)
//		.then(function(response) {
//			if (typeof response.data === 'object') {
//				return response.data;
//			} else {
//				// invalid response
//				return $q.reject(response.data);
//			}
//		}, function(response) {
//			// something went wrong
//			return $q.reject(response.data);
//		});
//	}

//	this.editarCidade = function(obj){
//		return $http.post('/cidadeController/editarCidade', obj)
//		.then(function(response) {
//			if (typeof response.data === 'object') {
//				return response.data;
//			} else {
//				// invalid response
//				return $q.reject(response.data);
//			}
//		}, function(response) {
//			// something went wrong
//			return $q.reject(response.data);
//		});
//	}

/*************************Cultura/Subcultura******************************/

	this.findAllSubculturaByCulturaId = function(id_cultura){
		return $http.get('/navegacaoController/findAllSubcultura/' + id_cultura)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findAllSubcultura = function(){
		return $http.get('/painelInfoGeraisController/findAllSubcultura')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findAllCultura = function(){
		return $http.get('/subculturaController/findAllCultura')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findAllTabelaSubcultura = function(){
		return $http.get('/subculturaController/findAllTabelaSubcultura')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.cadastrarSubcultura = function(obj){
		return $http.post('/subculturaController/cadastrarSubcultura', obj)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

/*************************Info Gerais******************************/

	this.findInfoGeraisByPainelId = function(id){
		return $http.get('/painelInfoGeraisController/findInfoGeraisByPainelId/' + id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.cadastrarInfoGerais = function(obj) {
		return $http.post('/painelInfoGeraisController/cadastrarEditarInfoGeraisPainel', obj)
		.then(function(response) {
			return response.data;
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};
	
	this.finalizarPainel = function(painelId){
		return $http.get('/painelInfoGeraisController/finalizarPainel/' + painelId)
		.then(function(response) {
			return response.data;
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

/*************************Pessoa******************************/

	this.findAllPessoaFixa = function(){
		return $http.get('/painelPessoasController/findAllPessoaFixa')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findAllPessoaEventual = function(){
		return $http.get('/painelPessoasController/findAllPessoaEventual')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findAllTratoristas = function() {
		return $http.get('/painelPessoasController/findAllTratorista')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findAllPessoaFixaByPainelId = function(id_painel){
		return $http.get('/painelPessoasController/findPessoaFixaByPainelId/' + id_painel)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findAllPessoaTratoristaByPainelId = function(id_painel){
		return $http.get('/painelPessoasController/findPessoaFixaTratoristaByPainelId/' + id_painel)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findAllPessoaEventualByPainelId = function(id_painel){
		return $http.get('/painelPessoasController/findPessoaEventualByPainelId/' + id_painel)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findCustoMedioByPainelId = function(id_painel){
		return $http.get('/painelPessoasController/findCustoMedioByPainelId/' + id_painel)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.cadastrarPessoaFixa = function(obj) {
		return $http.post('/painelPessoasController/cadastrarPessoaFixa', obj)
		.then(function(response) {
			return response.data;
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.cadastrarPessoaEventual = function(obj) {
		return $http.post('/painelPessoasController/cadastrarPessoaEventual', obj)
		.then(function(response) {
			return response.data;
		},
		function(response) {
			//somenthing went wrong
			return $q.reject(response.data);
		});
	};
	
	this.editarPessoas = function(painelId) {
		return $http.get('/painelPessoasController/editarPessoas/' + painelId)
		.then(function(response) {
			if (response.data == 'ok') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};
	

/*************************Custo Mecanização********************/

	this.findAllCustoMecanizacao = function() {
		return $http.get('/painelCustoMecanizacaoController/findAllCustoMecanizacao')
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findCustoMecanizacaoByPainelId = function(id_painel) {
		return $http.get('/painelCustoMecanizacaoController/findCustoMecanizacaoByPainelId/' + id_painel)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.cadastrarEditarCustosMecanizacao = function(obj) {
		 return $http.post('/painelCustoMecanizacaoController/cadastrarEditarCustoMecanizacao', obj)
		 .then(function(response) {
			 return response.data;
		 },
		 function(response) {
			 //somenthing went wrong
			 return $q.reject(response.data);
		 });
	};
	
	this.recalcularTabela = function(id_painel, combustivelDiesel) {
		return $http.get('/painelCustoMecanizacaoController/recalcularTabela/' + id_painel + "/" + combustivelDiesel)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}
	
	this.editarCustoMecanizacao = function(painelId) {
		return $http.get('/painelCustoMecanizacaoController/editarCustoMecanizacao/' + painelId)
		.then(function(response) {
			if (response.data == 'ok') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

/*************************Gastos Gerais************************/

	this.findAllGastosGerais = function(id_painel){
		return $http.get('/painelGastosGeraisController/findGastosGeraisByPainelId/' + id_painel)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}
	
	this.findTotaisGastosGerais = function(id_painel){
		return $http.get('/painelGastosGeraisController/findTotaisGastosGeraisByPainelId/' + id_painel)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}


//	this.findAllManutencao = function(id_painel){
//		return $http.get('/painelGastosGeraisController/findManutencaoByPainelId/' + id_painel)
//		.then(function(response) {
//			if (typeof response.data === 'object') {
//				return response.data;
//			} else {
//				// invalid response
//				return $q.reject(response.data);
//			}
//		}, function(response) {
//			// something went wrong
//			return $q.reject(response.data);
//		});
//	}

	this.cadastrarGastosGerais = function(obj) {
		return $http.post('/painelGastosGeraisController/cadastrarGastosGerais', obj)
		.then(function(response) {
			return response.data;
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};
	
	this.editarGastosGerais = function(painelId) {
		return $http.get('/painelGastosGeraisController/editarGastosGerais/' + painelId)
		.then(function(response) {
			if (response.data == 'ok') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.calcularManutencao = function(painel_id) {
		return $http.get('/painelGastosGeraisController/calcularManutencao/' + painel_id)
		.then(function(response) {
			return response.data;
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

/*******************Colheita/Pós Colheita********************/

	this.findCustoColheitaPosColheitaByPainelId = function(id_painel){
		return $http.get('/painelCustoColheitaPosColheitaController/findAllCustoColheitaPosColheitaByPainelId/' + id_painel)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}
	
	this.findDuracaoColheitaByPainelId = function(id_painel){
		return $http.get('/painelCustoColheitaPosColheitaController/findDuracaoColheitaByPainelId/' + id_painel)
		.then(function(response) {
				return response.data;
				
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.cadastrarItensGerais = function(obj){
		return $http.post('/painelCustoColheitaPosColheitaController/cadastrarCustoColheitaPosColheitaItensGerais', obj)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}

	this.findAllCustoColheitaPosColheitaItensGerais = function(id_painel){
	    return $http.get('/painelCustoColheitaPosColheitaController/findAllCustoColheitaPosColheitaItensGerais/' + id_painel)
	      .then(function(response) {
	        if (typeof response.data === 'object') {
	          return response.data;
	        } else {
	         // invalid response
	          return $q.reject(response.data);
	        }
	      }, function(response) {
	        // something went wrong
	        return $q.reject(response.data);
	      });
	  };


    this.findCustoColheitaPosColheitaPessoasServicos = function(id_painel, duracaoColheita){
        return $http.get('/painelCustoColheitaPosColheitaController/listarECalcularPessoasServicos/' + id_painel +  '/' + duracaoColheita)
          .then(function(response) {
            if (typeof response.data === 'object') {
              return response.data;
            } else {
             // invalid response
              return $q.reject(response.data);
            }
          }, function(response) {
          // something went wrong
            return $q.reject(response.data);
          });
      }
    
    
    this.findSubtatotaisColheitaPosColheita = function(id_painel, duracaoColheita){
        return $http.get('/painelCustoColheitaPosColheitaController/findSubTotaisColheitaPosColheitaByPainelId/' + id_painel)
          .then(function(response) {
            if (typeof response.data === 'object') {
              return response.data;
            } else {
             // invalid response
              return $q.reject(response.data);
            }
          }, function(response) {
          // something went wrong
            return $q.reject(response.data);
          });
      }
    
      this.cadastrarCustoColheitaPosColheitaPessoasServivos = function(obj, duracao){
        return $http.post('/painelCustoColheitaPosColheitaController/cadastrarCustoColheitaPosColheitaPessoasServivos/' + duracao, obj)
          .then(function(response) {
            if (typeof response.data === 'object') {
              return response.data;
            } else {
             // invalid response
              return $q.reject(response.data);
            }
          }, function(response) {
            // something went wrong
            return $q.reject(response.data);
          });
      }

      this.calcularProducaoTotal = function(id_painel){
  	    return $http.get('/painelCustoColheitaPosColheitaController/calcularProducaoTotal/' + id_painel)
  	      .then(function(response) {
  	        if (typeof response.data === 'object') {
  	          return response.data;
  	        } else {
  	         // invalid response
  	          return $q.reject(response.data);
  	        }
  	      }, function(response) {
  	      // something went wrong
  	        return $q.reject(response.data);
  	      });
  	  };
  	  
  	this.editarColheitaPosColheita = function(painelId) {
		return $http.get('/painelCustoColheitaPosColheitaController/editarColheitaPosColheita/' + painelId)
		.then(function(response) {
			if (response.data == 'ok') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

/**************Propriedade Uso Terra/Juros Custeio*************/

	this.findAllPropriedadeUsoTerraByPainelId = function(painel_id) {
		return $http.get('/painelUsoTerraJurosCusteioController/findPropriedadeUsoTerraByPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.findAllJurosCusteioByPainelId = function(painel_id) {
		return $http.get('/painelUsoTerraJurosCusteioController/findAllJurosCusteioByPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};
	
	
	this.findTotalJurosCusteioUsoTerraByPainelId = function(painel_id) {
		return $http.get('/painelUsoTerraJurosCusteioController/findTotalJurosCusteioUsoTerraPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.cadastrarJurosCusteio = function(obj) {
		return $http.post('/painelUsoTerraJurosCusteioController/cadastrarJurosCusteio', obj)
		.then(function(response) {
			return response.data;
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.cadastrarPropriedadeUsoTerra = function(obj) {
		return $http.post('/painelUsoTerraJurosCusteioController/cadastrarPropriedadeUsoTerra', obj)
		.then(function(response) {
			return response.data;
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};
	
	this.editarJurosCusteio = function(painelId) {
		return $http.get('/painelUsoTerraJurosCusteioController/editarJurosCusteio/' + painelId)
		.then(function(response) {
			if (response.data == 'ok') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

/*************************Cotação******************************/

	this.abrirCotacao = function(data, painelId, tipo) {
		return $http.get('/cotacaoController/abrirCotacao/' + data + "/" + painelId + "/" + tipo)
	    .then(function(response) {
	    	return response.data;
	    },
	      function(response) {
	          // something went wrong
	          return $q.reject(response.data);
				}
		);
	}

	this.mudarStatusCotacao = function(cotacaoId, status, tipo) {
		console.log("request");
		console.log(cotacaoId, status, tipo)
	  return $http.get('/cotacaoController/mudarStatusCotacao/' + cotacaoId + "/" + status+ "/" + tipo)
	    .then(function(response) {
			console.log("response request");
			console.log(response);

	    	return response.data;
	    },
	      function(response) {
	          // something went wrong
	          return $q.reject(response.data);
			}
		);
	}
	this.findCotacaoRequest = function(cotacaoId, painelId, telaAdministracao) {
	  return $http.get('/cotacaoController/findCotacaoByCotacaoEPainelIds/' + cotacaoId + "/" + painelId + "/" + telaAdministracao)
	    .then(function(response) {
	    	return response.data;
	    },
	      function(response) {
	          // something went wrong
	          return $q.reject(response.data);
				}
		);
	}

	  this.finishCotacaoRequest = function(obj, tipoCotacao) {
	    return $http.post('/cotacaoController/salvarEAtualizarCotacao/2' + '/' + tipoCotacao, obj)
	      .then(function(response){
	        return response.data;
	      }, function(response) {
	        // something went wrong
	        return $q.reject(response.data);
	      })
	  };

	  this.saveCotacaoRequest = function(obj, tipoCotacao) {
	    return $http.post('/cotacaoController/salvarEAtualizarCotacao/1' + '/' + tipoCotacao, obj)
	      .then(function(response){
	        return response.data;
	      }, function(response) {
	        // something went wrong
	        return $q.reject(response.data);
	      })
	  };

	  this.findPaineisComCotacaoAberta = function(subcultura_id, tipoCotacao) {
	    return $http.get('/cotacaoController/findPaineisCotacaoAberta/' + subcultura_id + '/' + tipoCotacao)
	      .then(function(response){
	        return response.data;
	      }, function(response) {
	        return $q.reject(response.data);
	      })
	  };

	  this.findMesesCotacao = function(painel_id, tipoCotacao) {
	    return $http.get('/cotacaoController/findMesesCotacaoAbertaByPainelId/' + painel_id + '/' + tipoCotacao)
	      .then(function(response){
	        return response.data;
	      }, function(response) {
	        return $q.reject(response.data);
	      })
	  };
	  
	  this.findMesesCotacaoAprovada = function(painel_id) {
		    return $http.get('/cotacaoController/findMesesCotacaoAprovadaByPainelId/' + painel_id)
		      .then(function(response){
		        return response.data;
		      }, function(response) {
		        return $q.reject(response.data);
		      })
		  };

	  this.findMediaMesesAnteriores = function(painel_original_id, tipoCotacao) {
	   	    return $http.get('/cotacaoController/findAllMediaMeses/' + painel_original_id + '/' + tipoCotacao)
		      .then(function(response){
		        return response.data;
		      }, function(response) {
		        return $q.reject(response.data);
		      })
		  };

	  this.findMesesCotacaoAberta = function(painel_id) {
		    return $http.get('/cotacaoController/findMesesCotacaoAbertaByPainelId/' + painel_id)
		      .then(function(response){
		        return response.data;
		      }, function(response){
		        return $q.reject(response.data);
		      })
		};

	  this.findUsuarioCotacao = function(cotacao_id) {
	    return $http.get('/cotacaoController/findUsuariosCotacao/' + cotacao_id)
	      .then(function(response) {
	        return response.data;
	      }, function(response) {
	        return $q.reject(response.data);
	      })
	  };

	  this.findPaineisECotacaoBySubculturaId = function(SubculturaId, tipo) {
		return $http.get('/cotacaoController/findPaineisECotacaoBySubculturaId/' + SubculturaId + '/' + tipo)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

 /*************************Atividade condução******************************/

	this.findInsumosByPainelId = function(painel_id) {
		return $http.get('/painelAtividadeConducaoController/findInsumosByPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.findAtividadeServicoRealizadoByPainelId = function(painel_id) {
		return $http.get('/painelAtividadeConducaoController/findAtividadeServicoRealizadoByPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.findTotaisInsumos = function(painel_id,categoria) {
		return $http.get('/painelAtividadeConducaoController/findTotaisInsumosByPainelIdCategoria/' + painel_id+ "/" + categoria)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};
	
	
	this.findSubTotaisAtividadeConducao = function(painel_id) {
		return $http.get('/painelAtividadeConducaoController/findSubTotaisByPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};


	this.cadastrarEditarInsumos = function(obj) {
		return $http.post('/painelAtividadeConducaoController/cadastrarEditarPainelInsumos', obj)
	 .then(function(response) {
		 return response.data;
	 },  function(response) {
		 //somenthing went wrong
			 return $q.reject(response.data);
		 });
	};

	this.cadastrarEditarPainelAtividadeConducao = function(obj) {
		return $http.post('/painelAtividadeConducaoController/cadastrarEditarPainelAtividadeConducao', obj)
	 .then(function(response) {
		 return response.data;
	 },  function(response) {
		 //somenthing went wrong
			 return $q.reject(response.data);
		 });
	};
	
	this.editarAtividadeConducao = function(painel_id) {
		return $http.get('/painelAtividadeConducaoController/editarAtividadeConducao/' + painel_id)
		.then(function(response) {
			if (response.data == 'ok') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	/********************** Painel Analise****************************/
	this.carregarPainelAnalise = function(painel_id, prolabore) {
		return $http.get('/painelAnaliseController/montarAnalisePainel/' + painel_id+ "/" + prolabore)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};
	
	this.findProLaboreByPainelId = function(painel_id) {
		return $http.get('/painelAnaliseController/findProLaboreByPainelId/' + painel_id)
		.then(function(response) {
			return response.data;
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	/*************************Inventario******************************/

	this.cadastrarEditarInventarioInvestimento = function(obj) {
		return $http.post('/painelInventarioController/cadastrarEditarPainelInventarioPorHectare', obj)
	 .then(function(response) {
		 return response.data;
	 },  function(response) {
		 //somenthing went wrong
			 return $q.reject(response.data);
		 });
	};

	this.cadastrarInventarioTratoresProprios= function(obj) {
		return $http.post('/painelInventarioController/cadastrarPainelInventarioTratores', obj)
	 .then(function(response) {
		 return response.data;
	 },  function(response) {
		 //somenthing went wrong
			 return $q.reject(response.data);
		 });
	};

	this.editarInventarioTratoresProprios = function(obj) {
		return $http.post('/painelInventarioController/editarPainelInventarioTratores', obj)
	 .then(function(response) {
		 return response.data;
	 },  function(response) {
		 //somenthing went wrong
			 return $q.reject(response.data);
		 });
	};


	this.cadastrarEditarInventarioMaquinasPropriasImplementos= function(obj) {
		return $http.post('/painelInventarioController/cadastrarEditarPainelInventarioMaquinasImplementos', obj)
	 .then(function(response) {
		 return response.data;
	 },  function(response) {
		 //somenthing went wrong
			 return $q.reject(response.data);
		 });
	};

	this.cadastrarEditarInventarioAnimais= function(obj) {
		return $http.post('/painelInventarioController/cadastrarEditarPainelInventarioAnimais', obj)
	 .then(function(response) {
		 return response.data;
	 },  function(response) {
		 //somenthing went wrong
			 return $q.reject(response.data);
		 });
	};


	this.cadastrarEditarInventarioBenfeitorias= function(obj) {
		return $http.post('/painelInventarioController/cadastrarEditarPainelInventarioBenfeitorias', obj)
	 .then(function(response) {
		 return response.data;
	 },  function(response) {
		 //somenthing went wrong
			 return $q.reject(response.data);
		 });
	};


	this.cadastrarEditarInventarioirrigacao= function(obj) {
		return $http.post('/painelInventarioController/cadastrarEditarPainelInventarioIrrigacao', obj)
	 .then(function(response) {
		 return response.data;
	 },  function(response) {
		 //somenthing went wrong
			 return $q.reject(response.data);
		 });
	};
	
	this.editarInventario = function(painelId) {
		return $http.get('/painelInventarioController/editarInventario/' + painelId)
		.then(function(response) {
			if (response.data == 'ok') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.findInvestimentoByPainelId = function(painel_id) {
		return $http.get('/painelInventarioController/findInventarioPorHectareByPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				// console.log (response.data);
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};


	this.findInventarioTratoresPropriosByPainelId = function(painel_id) {
		return $http.get('/painelInventarioController/findInventarioTratoresByPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				// console.log (response.data);
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};
	/*************************Maquinas Proprias e implementos (Inventario)******************************/

	this.findInventarioMaquinasPropriasImplementosByPainelId = function(painel_id) {
		return $http.get('/painelInventarioController/findInventarioMaquinasImplementoByPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				// console.log (response.data);
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};


	this.findInventarioAnimaisByPainelId = function(painel_id) {
		return $http.get('/painelInventarioController/findInventarioAnimaisByPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				// console.log (response.data);
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.findInventarioBenfeitoriasByPainelId = function(painel_id) {
		return $http.get('/painelInventarioController/findInventarioBenfeitoriasByPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				// console.log (response.data);
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.findInventarioIrrigacaoByPainelId = function(painel_id) {
		return $http.get('/painelInventarioController/findInventarioIrrigacaoByPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				// console.log (response.data);
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.findInventarioSubTotatisPainelId = function(painel_id) {
		return $http.get('/painelInventarioController/findInventarioSubTotatisPainelId/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				// console.log (response.data);
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	/********************** Gerenciar Paineis****************************/
	this.findAllPaineis = function() {
		return $http.get('/painelGerenciaController/findPaineis')
		.then(function(response) {
			if (typeof response.data === 'object') {

				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.findAllPaineisBySubCultura = function(id) {
		return $http.get('/painelGerenciaController/findPaineisBySubcultura/'+id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		},
		function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	};

	this.excluirPainel = function(painel_id){
		return $http.get('/painelGerenciaController/excluirPainel/' + painel_id)
		.then(function(response) {
			if (typeof response.data === 'object') {
				// console.log("Response");
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
	}
	
/********************** Analise****************************/
this.findPaineisParaAnalise = function(subcultura_id) {
	return $http.get('/moduloAnalisesController/findPaineisBySubcultura/' + subcultura_id)
	.then(function(response) {
		if (typeof response.data === 'object') {
			return response.data;
		} else {
			// invalid response
			return $q.reject(response.data);
		}
	},
	function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
};

this.montarRelatorio = function(painel_id) {
	return $http.get('/moduloAnalisesController/montarRelatorio/' + painel_id)
	.then(function(response) {
		if (typeof response.data === 'object') {
			return response.data;
		} else {
			// invalid response
			return $q.reject(response.data);
		}
	},
	function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
};

this.gerarAcompanhamentoPorCidadeSubCultura = function(painel_id, cidade_id, subcultura_id, anoInicial, anoFinal) {
	return $http.get('/moduloAnalisesController/gerarAcompanhamentoSequencialPorCidadeSubCulturaAnos/' + cidade_id + '/'
			+ subcultura_id + '/' + anoInicial + '/' + anoFinal, {responseType: 'arraybuffer'})
	.then(function(response) {
		return response.data;
	},
	function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
};

/********************** Gráfico****************************/
this.generateChartCoe = function(painel_id) {
	return $http.get('/graficoController/generateChartCoe/' + painel_id)
	.then(function(response) {
		if (typeof response.data === 'object') {
			return response.data;
		} else {
			// invalid response
			return $q.reject(response.data);
		}
	},
	function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
};


this.generateChartMaoObra = function(painel_id) {
	return $http.get('/graficoController/generateChartMaoObra/' + painel_id)
	.then(function(response) {
		if (typeof response.data === 'object') {
			return response.data;
		} else {
			// invalid response
			return $q.reject(response.data);
		}
	},
	function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
};



/********************** Revendas ****************************/
this.findAllRevendas = function() {
	return $http.get('/revendaController/findAllRevendas')
	.then(function(response) {
		if (typeof response.data === 'object') {
			return response.data;
		} else {
			// invalid response
			return $q.reject(response.data);
		}
	},
	function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
};

this.cadastrarRevenda = function(obj){
	return $http.post('/revendaController/cadastrarRevenda', obj)
	.then(function(response) {
		if (typeof response.data === 'object') {
			return response.data;
		} else {
			// invalid response
			return $q.reject(response.data);
		}
	}, function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
}

this.editarRevenda = function(obj){
	return $http.post('/revendaController/editarRevenda', obj)
	.then(function(response) {
		if (typeof response.data === 'object') {
			return response.data;
		} else {
			// invalid response
			return $q.reject(response.data);
		}
	}, function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
}

this.excluirRevenda = function(revendaId){
	return $http.get('/revendaController/excluirRevenda/' + revendaId)
	.then(function(response) {
		if (typeof response.data === 'object') {
			return response.data;
		} else {
			// invalid response
			return $q.reject(response.data);
		}
	}, function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
}



this.findAllTiposTrabalhos = function(){
	return $http.get('/tipoTrabalhoController/findAllTiposTrabalho')
	.then(function(response) {
		if (typeof response.data === 'object') {
			return response.data;
		} else {
			// invalid response
			return $q.reject(response.data);
		}
	}, function(response) {
		// something went wrong
		return $q.reject(response.data);
	});
}

}])
