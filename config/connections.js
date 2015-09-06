/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql                                             *
  *                                                                          *
  ***************************************************************************/
  /*
  galgomediaMySql: {
    adapter: 'sails-mysql',
    host: 'localhost',
    user: 'root',
    password: 'galgomedia2012',
    database: 'DB_CRM_MIGRADO1'
  },*/

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  //CONECCION 1  DESARROLLO
  //mongodb://paperstore:abq47bp2@ds035533.mongolab.com:35533/paperstore
  //$mongo ds035533.mongolab.com:35533/paperstore -u paperstore -p abq47bp2

  //CONECCION 2 PRODUCCION (HEROKU)
  //mongodb://paper:abq47bp2@ds035633.mongolab.com/heroku_rrzt8gf5
  //mongo ds035633.mongolab.com:35633/heroku_rrzt8gf5 -u paper -p abq47bp2


  
  MongoCrmdb: {
    url: process.env.MONGOLAB_URI,
    adapter: 'sails-mongo',
    //host: 'ds035533.mongolab.com',
    //port: 35533,
    //user: 'paperstore',
    //password: 'abq47bp2',
    //database: 'paperstore'
  },
  /*MongoCrmdb: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    user: '',
    password: '',
    database: 'crm'
  },*/

  /***************************************************************************
  *                                                                          *
  * PostgreSQL is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/PostgreSQL                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
  somePostgresqlServer: {
    adapter: 'sails-postgresql',
    host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
    user: 'YOUR_POSTGRES_USER',
    password: 'YOUR_POSTGRES_PASSWORD',
    database: 'YOUR_POSTGRES_DB'
  }


  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/

};
