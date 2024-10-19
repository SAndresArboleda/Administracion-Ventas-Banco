const server = require('./src/app')
const conn = require('./src/bd/postgresql')


  const port = process.env.PORT || 3000
  server.listen(port, () => {
      console.log(`%s listening at ${port}`);
    });