const server = require('./src/app')
const {conn} = require('./src/bd/postgresql')

conn.sync({force: false})
.then(()=>{
  const port = process.env.PORT || 3000
  server.listen(port, () => {
      console.log(`Conectado al puerto ${port}`);
    });
})