module.exports.formulario_inclusao_noticia = function(app,req,res)
{
	res.render('admin/form_add_noticia',{validacao:{},noticia:{}});
}

module.exports.noticas_salvar = function(app,req,res)
{
	var noticia = req.body;

	//Regras de validação
	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','Data é obrigatório').notEmpty();
	req.assert('noticia','Noticia é obrigatório').notEmpty();

	//Captura de erros
	var erros = req.validationErrors();

	console.log(erros);//Mostra a lista de erros no console

	if(erros)
	{
		res.render('admin/form_add_noticia',{validacao:erros,noticia:noticia});//faz retornar à página de inclusão de noticia
		return;//interrompe o código seguinte
	}

	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNoticias(noticia, function(error, result){
		res.redirect('/noticias');
	});
}

module.exports.noticas_atualizar = function(app,req,res)
{
	var noticia = req.body;
	var id_noticia = req.body.id_noticia;

	//Regras de validação
	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','Data é obrigatório').notEmpty();
	req.assert('noticia','Noticia é obrigatório').notEmpty();

	//Captura de erros
	var erros = req.validationErrors();

	console.log(erros);//Mostra a lista de erros no console

	if(erros)
	{
		res.render('admin/form_add_noticia',{validacao:erros,noticia:noticia});//faz retornar à página de inclusão de noticia
		return;//interrompe o código seguinte
	}

	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	noticiasModel.atualizarNoticias(noticia, noticiasModel.mostraNoticia(id_noticia,function(error,result)
	{
        res.redirect('/noticia?id_noticia='+id_noticia);
	}));
}