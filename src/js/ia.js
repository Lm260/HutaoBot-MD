/**
   * Bot publico By sayo/breno *
   * Meu contato : wa.me/5562936180708 *
   * Visite meu rest api 😁 : https://sakatsumi.herokuapp.com/docs *
*/

/* 
    Aprimarado por Lm:
    
    • aprimorei a legibilidade do script para
    melhorar a execuçao e evitar erros
    
*/

const fs = require('fs');
const ia = JSON.parse(fs.readFileSync('./src/json/ia.json'));


exports.educar_IA = async (type, info) => {
    let educa_ia_msg = (type == 'conversation') ? info.message?.conversation : (type == 'extendedTextMessage') ? info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.conversation : '';

    if (educa_ia_msg?.length > 40 || educa_ia_msg == '') {
        return;
    }

    async function ia_verifica(key) {
        let found = false;
        Object.keys(ia).forEach(i => {
            if (ia[i].MSG == key)
                found = i;
        });
        return found ? ia[found] : false;
    }

    const ia_verificada = await ia_verifica(educa_ia_msg?.toLowerCase());
    if (type == 'conversation') {
        if (ia_verificada) return;
        ia.push({
            MSG: info.message?.conversation?.toLowerCase(),
            RSP: []
        });
        fs.writeFileSync('./src/json/ia.json', JSON.stringify(ia, null, 4));
    } else if (type == 'extendedTextMessage') {
        if (ia_verificada) {
            ia_verificada?.RSP.push(info.message?.extendedTextMessage?.text?.toLowerCase());
            fs.writeFileSync('./src/json/ia.json', JSON.stringify(ia, null, 4));
        } else {
            ia.push({
                MSG: educa_ia_msg?.toLowerCase(),
                RSP: [info?.message?.extendedTextMessage?.text?.toLowerCase()]
            });
            fs.writeFileSync('./src/json/ia.json', JSON.stringify(ia, null, 4));
        }
    }
};

exports.resposta_IA = async (key) => {
    let position = false;
    Object.keys(ia).forEach(i => {
        if (ia[i].MSG == key.toLowerCase())
            position = i;
    });
    return position ? ia[position].RSP[Math.floor(Math.random() * ia[position].RSP.length)] : false;
};
