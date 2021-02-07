console.log(process.env.JAWSDB_URL);
module.exports = {
  "url": process.env.JAWSDB_URL,
  "development": {
    "url": process.env.JAWSDB_URL,
    "username": "root",
    "password": null,
    "database": "app-ejs",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "artur",
    "password": "admin123",
    "database": "tarefas-sintese",
    "host": "mysql742.umbler.com",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

}
