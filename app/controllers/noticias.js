module.exports.noticias = function (app,req,res) 
{
	var connection = app.config.dbConnection();
		//depois do refactoring, recebemos o app por paramentro, então é somente
		//recuperar o módulo dentro do app.
		//diminuimos a necessidade de ter requires nos projetos
	var noticiasModel = new app.app.models.NoticiasDAO(connection);
	//app.app significa: o primeiro é a aplicação, o segundo é a pasta app

	//Agora fica assim: o select (regra) foi para o arquivo de model
	noticiasModel.getNoticias(function(error, result){
		res.render('noticias/noticias',{noticias:result});
	});
}

module.exports.noticia = function(app,req,res)
{
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);
	
    if(req.query.id_noticia)
    {
        var id_noticia = req.query; // id_noticia recebe o parametro enviado pela view e tem o id da noticia a ser exibida
    }
    else
    {
    	res.redirect('/noticias');
    	return;
    }
	

    
	noticiasModel.getNoticia(id_noticia,function(error, result){
		res.render('noticias/noticia',{noticia:result});
	});	
}

module.exports.busca = function(app,req,res)
{
	var pesquisa = req.body.pesquisa;
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	noticiasModel.buscaNoticias(pesquisa,function(error, result){
		res.render('noticias/noticia',{noticia:result});
	});	
}

module.exports.excluir = function(app,req,res)
{
	var pesquisa = req.body.pesquisa;
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	 if(req.query.id_noticia)
    {
        var id_noticia = req.query; // id_noticia recebe o parametro enviado pela view e tem o id da noticia a ser exibida
    }
    else
    {
    	res.redirect('/noticias');
    	return;
    }

	noticiasModel.excluirNoticia(id_noticia,function(error, result){
		res.redirect('/noticias');
	});	
}

module.exports.editar = function(app,req,res)
{
	var pesquisa = req.body.pesquisa;
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	 if(req.query.id_noticia)
    {
        var id_noticia = req.query; // id_noticia recebe o parametro enviado pela view e tem o id da noticia a ser exibida
    }
    else
    {
    	res.redirect('/noticias');
    	return;
    }

	noticiasModel.getNoticia(id_noticia,function(error, result){
		res.render('admin/form_update_noticia',{validacao:{},noticia:result});
	});	
}