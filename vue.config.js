
const SERVER		  = "https://www.mydeister.com";
const AUTH_TOKEN	  = "YW5nZWwuZmxvcmVhbm86QG5nZWwwNzAx";

const PROXY_PATH_CONF = process.env.NODE_ENV === "development" ? {
  target: `${SERVER}`,
  secure: false,
  headers: {
    'Authorization'					: `Basic ${AUTH_TOKEN}`,
    "Access-Control-Allow-Headers"	: "X-Requested-With, content-type, Authorization, x-script-result-type, x-script-stdout, x-script-stderr, x-script-crc, x-script-dict"
  }
} : undefined;

module.exports = {
  /**
   * Tune the "dev server" created by the "serve" command in development
   * to add a proxy request decorator.
   */
  devServer: process.env.NODE_ENV === "development" ? {
    proxy: {
      "/service/rest/*": PROXY_PATH_CONF
    }
  } : undefined,

  /**
   * By default babel-loader ignores all files inside node_modules.
   * If you want to explicitly transpile a dependency with Babel, you can list it in this option.
   */
  transpileDependencies: [
    'vuetify'
  ],

}
