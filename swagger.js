module.exports = {
    swagger: '2.0',
    info:{
        description: 'Documnetação projeto Gama Academy',
        version: '0.0.2',
        title: 'Edukatec',
        contact:{
            email: 'asdsdsa@dsadsadas.com',
        }
    },
    host:'localhost:3000',
    schema: ['htpp'],
    paths:{
        '/': {
            get:{
                tags:['Home'],
                parameters: [
                {
                    name:'body',
                    description:'Apenas visualização de pagina.',
                    required:false,
                    schema:{}
                }
                ],
                sumary:'Valida conexão.',
                description: '',
                operationId: '',
                consumers: ['application/json'],
                produces:['application/json'],
                responses:{
                    200:{
                        description:'sucesso!',
                        schema:{
                            type: 'object',
                            items:{},
                        }
                    },
                    500:{}
                }

            }
        },
        "/Contato": {
            "post": {
              "tags": [
                "Contato"
              ],
              "summary": "Enviar um novo Contato",
              "description": "Rota para criação de contato com operador.",
              "operationId": "CriarContato:",
              "produces": [
                "application/json"
              ],
              "parameters": [
                {
                  "in": "body",
                  "name": "body",
                  "description": "Criação usa um Objeto",
                  "required": true,
                  "schema": {
                    "$ref": "#/definitions/Contato"
                  }
                }
              ],
              "responses": {
                "default": {
                  "description": "successful operation"
                },
                200:{
                  description:'sucesso!',
                  
              },
              400:{
                description:'falha! contato já enviado com esses dados!.',
                
            }
              }
            }
          },
    
    "/User": {
      "post": {
        "tags": [
          "Usuario"
        ],
        "summary": "Criar um novo Usuario",
        "description": "Rota para criação de usuario",
        "operationId": "CriarUsuario:",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Criação usa um Objeto",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Usuario"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          },
          200:{
            description:'sucesso!',
            
        },
        400:{
          description:'falha! Usuario já existe!.',
          
      }
        }
      }
    },
    "/session": {
      "post": {
        "tags": [
          "Usuario"
        ],
        "summary": "Inicia uma seção de login",
        "description": "Rota para login",
        "operationId": "iniciarSeção:",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "E-mail:",
            "in": "query",
            "description": "Use o e-mail cadastrado.",
            "required": true,
            "type": "string"
          },
          {
            "name": "Senha:",
            "in": "query",
            "description": "Use a senha cadastrada.",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "default": {
            "description": "successful operation"
          },
          200:{
            description:'sucesso!',
            
        },
        401:{
          description:'Usúario ou Senha não encontrada',
          
      }
        }
      }
    },
    
},
    
    
    definitions: {
        "Contato": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "cpf": {
              "type": "string"
            },
            "cep": {
              "type": "string"
            },
            "logradouro": {
              "type": "string"
            },
            "numero": {
              "type": "string"
            },
            "bairro": {
              "type": "string"
            },
            "cidade": {
              "type": "string"
            },
            "uf": {
              "type": "string"
            },
            "telefone": {
              "type": "string"
            },
            "whatsapp": {
              "type": "string"
            },
            "curso": {
              "type": "string"
            },
            "categoria": {
              "type": "string"
            },
            
          },
          "xml": {
            "name": "User"
          }
        },
        "Usuario": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
          },
          "xml": {
            "name": "User"
          }
        }

    }
    
};