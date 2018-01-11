const Todo = require('./todo')

Todo.methods(['get','post','put','delete'])
//Ao atualiza receber o registro novo e executa validação
Todo.updateOptions({new:true, runValidators:true})

module.exports = Todo