//=============> ======== <==============\\

const {
  axios,
  cheerio,
  encodeUrl,
  fs,
  linkfy,
  qs,
  removerAcentos,
  useragent_1
} = require('./defaults.js');


//=============> Play Store <==============\\

const PlayStoreSearch = (q) => new Promise((resolve, reject) => {
  axios.get(`https://play.google.com/store/search?q=${removerAcentos(q)}&c=apps`, {
      headers: {
        ...useragent_1
      }
    })
    .then((res) => {
      const $ = cheerio.load(res.data);
      const dados = [];
      $('.VfPpkd-aGsRMb').each((i, e) => {
        dados.push({
          nome: $(e).find('.DdYX5:first').text().trim(),
          imagem: (($(e).find('img:first').attr('srcset') ? (linkfy.find($(e).find('img:first').attr('srcset'))?.pop()?.href || $(e).find('img:first').attr('src')) : $(e).find('img:first').attr('srcset')) || $(e).find('img:last').attr('srcset') ? (linkfy.find($(e).find('img:last').attr('srcset'))?.pop()?.href || $(e).find('img:last').attr('src')) : $(e).find('img:last').attr('srcset')).trim(),
          desenvolvedor: $(e).find('.wMUdtb:first').text().trim(),
          estrelas: $(e).find('.w2kbF:first').text().trim(),
          link: 'https://play.google.com' + $(e).find('a:first').attr('href')
        });
      });
      resolve({
        status: res.status,
        criador: "Lm",
        resultado: dados
      });
    })
    .catch((e) => {
      reject(e)
    });
});


//=============> Mercado Livre <==============\\

const MercadoLivreSearch = (q) => new Promise((resolve, reject) => {
  axios.get(`https://lista.mercadolivre.com.br/${removerAcentos(q)}`, {
      headers: {
        ...useragent_1
      }
    })
    .then((res) => {
      const $ = cheerio.load(res.data);
      const dados = [];
      $('div[class="andes-card andes-card--flat andes-card--default andes-card--padding-default"]').each((i, e) => {
        const json = {
          produto: $(e).find('h2:first').text()?.trim(),
          imagem: $(e).find('img:first').attr('data-src') || $(e).find('img:first').attr('src'),
          valor: $(e).find('div[class="ui-row-price ui-row-price--size-medium"] > div > span > .price-tag-amount').text()?.replace('R$', 'R$ ')?.trim(),
          link: $(e).find('a:first').attr('href')
        }
        if (json.valor && json.imagem && json.link && json.produto) dados.push(json);
      });
      resolve({
        status: res.status,
        criador: "Lm",
        resultado: dados
      });
    })
    .catch((e) => {
      reject(e)
    });
});

const Horoscopo = (signo) => new Promise((resolve, reject) => {
  axios.get(`https://www.somostodosum.com.br/horoscopo/signo/${removerAcentos(signo)}.html`, {
      headers: {
        ...useragent_1
      }
    })
    .then((res) => {
      const $ = cheerio.load(res.data);
      const dados = []
                    dados.push({ 
               previsao: $('body > div > div > div.container > div.col-lg-9 > article > article').text().split(/Dica de oráculo para hoje/gi)[0]?.trim()
                      });
      resolve({
        status: res.status,
        criador: "@lm",
        infoDoSigno: signo,
        resultado: dados
      });
    })
    .catch((e) => {
      reject(e)
    });
});


//=============> Hentai Tube <==============\\

const HentaisTubeSearch = (q) => new Promise((resolve, reject) => {
  axios.get(`https://www.hentaistube.com/buscar/?s=${removerAcentos(q)}`, {
      headers: {
        ...useragent_1
      }
    })
    .then((res) => {
      const $ = cheerio.load(res.data)
      const dados = []
      $('.epiItem').each((i, e) => {
        dados.push({
          nome: $(e).find('a').attr('title'),
          imagem: $(e).find('img').attr('src'),
          link: $(e).find('a').attr('href')
        });
      });
      resolve({
        status: res.status,
        criador: "Lm",
        resultado: dados
      });
    })
    .catch((e) => {
      reject(e)
    });
});

//========== Dicionário ===========\\

const Dicionario = (q) => new Promise((resolve, reject) => {
  axios.get(`https://www.dicio.com.br/${q}/`, {
      headers: {
        ...useragent_1
      }
    })
    .then((res) => {
      const $ = cheerio.load(res.data);
      const dados = [];
      $('#content > div.col-xs-12.col-sm-7.col-md-8.p0.mb20 > div.card.card-main.mb10 > p > span').map((i, e) => dados.push($(e).text().trim() + '\n'))
      resolve({
        status: res.status,
        criador: "Lm",
        imagem: $('#content > div.col-xs-12.col-sm-7.col-md-8.p0.mb20 > div.card.card-main.mb10 > picture > img').attr('src'),
        significado: dados.join('\n').trim()
      });
    })
    .catch((e) => {
      reject(e)
    });
});

module.exports.PlayStoreSearch = PlayStoreSearch;
module.exports.Horoscopo = Horoscopo;
module.exports.HentaisTubeSearch = HentaisTubeSearch;
module.exports.Dicionario = Dicionario;
