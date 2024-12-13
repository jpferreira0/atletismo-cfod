// Modules
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const i18next = require('i18next');
const i18nMiddleware = require('i18next-http-middleware');
const i18nBackend = require('i18next-fs-backend');

//* Initialize express variable
const app = express();

//? --- i18next configuration ---
i18next
  .use(i18nBackend)
  .use(i18nMiddleware.LanguageDetector)
  .init({
    fallbackLng: 'pt',
    lng: ['pt'],
    ns: ['pages/homepage'], // Define available namespaces
    defaultNS: 'translation', // Set default namespace if not specified
    backend: {
      loadPath: path.join(__dirname,'./locales/{{lng}}/{{ns}}.json') // Load path to include namespace
    },
    detection: {
      order: ['querystring', 'cookie'],
      caches: ['cookie'],// Internacionalization setup
    },
    returnObjects: true,
    debug: false
});

app.use(i18nMiddleware.handle(i18next));
//? -----------------------------

//? --- Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const middlewares = require('./middleware/middleware');
middlewares.forEach(middleware => {
    app.use(middleware);
});
//? ----------------------------

//? --- Public folder location ---
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
//? ------------------------------

//? --- Views, layouts and partials - Handlebars ---
//Handlebars helpers
const hbsHelpers = {
    t: function (key, options) { // 't' means translate and is used to translate a key.
      //console.log(options.data.root); 
      // Access the i18n instance 
      const i18n = options.data.root.i18n; 
      if (i18n) { 
        return i18n.t(key);
      }
      // Fallback if i18n is not found in the context
      return key; 
    },
  };

// Handlebars configuration
app.engine('hbs', engine({
    extname: 'hbs', // extension type of the views
    defaultLayout: 'main', // default layout that will be used for all the views
    layoutsDir: path.join(__dirname, './views/layouts'), // location of the layouts
    partialsDir: path.join(__dirname, './views/partials'), // location of the partials
    helpers: hbsHelpers
}))
app.set('view engine', 'hbs'); // tells express that the views are handlebars files
app.set('views', path.join(__dirname, './views')); // location of the views
//? -----------------------------

//? --- Routes location ---
const routes = require('./routes/routes');
app.use('/', routes);
//? ----------------------------

//* Server start
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
