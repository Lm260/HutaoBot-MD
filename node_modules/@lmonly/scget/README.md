## Simple Curl Get

**Requisição simples com curl usando nodeJS**

> Projeto destinado a oferecer rapidez, simplicidade e baixo consumo de recursos. Excelente para requests rápidos.

## Instalação 

```bash
npm install @lmonly/scget
```

## Exemplo de uso

```Javascript
const scget = require('@lmonly/scget');

async function main() {
    const body = await scget('https://example.com', {
        method: 'GET',
        headers: {
            'User-Agent': 'Mozila/5.0'
        },
        //data: params, //Somente para POST
        redirects: true //Permitir Redirecionamento ( statuscode 300... )
    });
    
    if (!body.success) {
        console.log('Falha!');
        process.exit();
    }
    
    console.log(body.data); //Para json => body.json();
}

main();
```

## Features

 - **Options** method, headers, data & redirects
 - **Returns** text, json e buffer ( concat )

## Aviso
 
 - Módulo não recomendado para projetos que requerem mais informações. ( statuscode, headers e etc... )


### LICENSE

Projeto criado por Lm Only, todos os direitos reservados.