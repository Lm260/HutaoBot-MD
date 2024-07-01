//=============> ======== <==============\\

const {
  axios,
  cheerio,
  unescapeHtml,
  default_criador,
  useragent_1,
  removerAcentos,
  linkfy,
  fs
} = require('./defaults.js')

//==========> Terra <==========\\

const Terra = () => new Promise((resolve, reject) => {
  axios.get(`https://www.terra.com.br/noticias/`, {
      headers: {
        ...useragent_1
      }
    })
    .then((res) => {
      const $ = cheerio.load(res.data);
      const dados = [];
      $('div[class="card card-news card-h-small  card-has-image  "]').each((i, e) => {
        dados.push({
          noticia: unescapeHtml($(e).find('a.card-news__text--title').text()),
          imagem: $(e).find('img').attr('src'),
          link: $(e).find('a.card-news__text--title').attr('href')
        });
      });
      resolve({
        status: res.status,
        fonte: 'https://www.terra.com.br/noticias/',
        criador: default_criador,
        resultado: dados
      });
    })
    .catch((e) => {
      reject(e)
    });
});
//==========> Notícias Ao Minuto <==========\\

const NoticiasAoMinuto = () => new Promise((resolve, reject) => {
  axios.get(`https://www.noticiasaominuto.com.br/`, {
      headers: {
        ...useragent_1
      }
    })
    .then((res) => {
      const $ = cheerio.load(res.data);
      const dados = [];
      $('div[class="menu-thumb cursor-pointer"]').each((i, e) => {
        dados.push({
          noticia: unescapeHtml($(e).find('p').text()),
          imagem: $(e).find('img').attr('src'),
          postado: $(e).find('.menu-thumb-date').text(),
          categoria: $(e).find('.nm-custom-label-category').text(),
          link: $(e).find('a:first').attr('href')
        });
      });
      resolve({
        status: res.status,
        fonte: 'https://www.noticiasaominuto.com.br/',
        criador: default_criador,
        resultado: dados
      });
    })
    .catch((e) => {
      reject(e)
    });
});




module.exports.NoticiasAoMinuto = NoticiasAoMinuto;
module.exports.Terra = Terra;
