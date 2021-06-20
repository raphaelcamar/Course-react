const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{Path}' é Obrigatório"
mongoose.Error.messages.Number.min = "O '{value}' informado é menor que o limite mínimo de '{min}'."
mongoose.Error.messages.Number.max = "O '{value}' informado é maior que o limite máximo de '{max}'."
mongoose.Error.messages.String.enum = "O '{value}' informado não é válido para o atrinuto'{path}'."