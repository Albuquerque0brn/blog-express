const express = require('express');
const app = express();
const path = require('path');

// Definir o diretório de visualizações e o mecanismo de visualização
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definir o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Definir rotas
const router = require('./routes/router');
app.use('/', router);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
