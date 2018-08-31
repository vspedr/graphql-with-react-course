require('dotenv').config();
const MLAB_CONN_STRING = process.env.MLAB_CONN_STRING;

module.exports = {
  connString: MLAB_CONN_STRING,
};
