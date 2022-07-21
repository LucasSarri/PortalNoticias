function Usuario_DAO(connection){//classe com objetivo de acesso a dados data acess object
	this._connection = connection;
}

Usuario_DAO.prototype.loginUsuario = function(user, senha, callback){
	this._connection.query('select * from usuario where nome_usuario = ? AND senha_usuario = ?', [user,senha], callback);
}

module.exports = function(){
	return Usuario_DAO;
}