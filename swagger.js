module.exports = {
    swagger: '2.0',
    info:{
        description: 'Documnetação projeto Gama Academy',
        version: '0.0.1',
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
                tags:['Pagina inicial com cadastro para contato'],
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
        '/contato': {
            post:{
                tags:['metodo para cadastrar contato, header:']
            }
        }
    }
};