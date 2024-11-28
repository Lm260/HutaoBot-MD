"use strict";
/**
 * Aqui você pode editar mensagems do bot a vontade!
 * Muita atenção ao mexer em algo, para não dar problema depois.
 * Apenas mude os textos, menos outra coisa.
 */

const txt = {
    Owner: "*SOMENTE MEU DONO PODE USAR ESTE COMANDO. 😼*",
    
    only_leaders: "*SOMENTE MEUS LÍDERES PODEM EXECUTAR ESTE COMANDO. 😼*",
    
    only_adm: "*SOMENTE ADMS PODE EXECUTAR ESTE COMANDO. 😼*",
    
    only_vip: "*ESTE COMANDO É EXCLUSIVO SOMENTE PARA OS VIP. 🍸💸*",
    
    only_group: "*ESTE COMANDO É SOMENTE PARA GRUPOS. 🙇‍♀️*",
    
    isBotAdm: "*Eu presciso ser ADM do grupo* 🥺",
    
    command_blocked: "*ESTE COMANDO ESTÁ BLOQUEADO 🙅‍♀️*",
    
    erros: {
        api_error: "*A api caiu ou não foi possível executar este comando!😿*",
     
        command_error_executor: "*Ops! Algo deu errado e não foi possível concluir sua solicitação. Tente novamente mais tarde! 🙇‍♀️*",
    },
    
    highTimestamp: "*Não é possível realizar o download de mídias com duração superior a uma hora. 🙅‍♀️*",
    
    global_command_blocked: "*ESTE COMANDO ESTÁ GLOBALMENTE BLOQUEADO 🙅‍♀️*",
    
    member_marked_everyone: "*Marca não fdp 😡 vai tirar o sossego de outro*",
    
    Anti_Bot: "*NÃO É PERMITIDO OUTROS BOTS AQUI!! 😠*",
    
    antilink_group: "*SEM LINKS DE GRUPO AQUI😡🗡*",
    
    anti_sticker: "*FIGURINHAS É PROIBIDO AQUI🚫*",
    
    anti_notas: "*METE O PÉ DAQUI SEU IMUNDO😡*",
    
    anti_audio: "*AUDIO É PROIBIDO AQUI🙅‍♀️*",
    
    anti_link: "*Sem links aqui parceiro🙅‍♀️*",
    
    anti_palavra: "*SEM PALAVRAS OFENSIVAS AQUI SEU IMUNDO!!!😡*",
    
    message_proibida: "*MENSAGEM PROIBIDA NO GRUPO, IREI BANIR!!!🙅‍♀️*",
    
    gamer_mode: "*O MODO-GAMER PRESCISA ESTAR ATIVO...⚔️*",
    
    modorpg: "*O MODO-RPG PRESCISA ESTAR ATIVO... ❗*",
    
    promote: "#user# *FOI PROMOVIDO A ADM DO GRUPO COM SUCESSO✨!! PELO ADM* #sender# 🙅‍♀️",
    
    demote: "OKAY ADM... AGORA O #user# É UM MEMBRO COMUM* 🙅‍♀️",
    
    remove: "#user#\n〘 *FOI REMOVIDO COM SUCESSO* 〙- 『 _por motivos justos_ 』 - 🙅‍♀",
    
    openGroup: "*Grupo aberto com sucesso pelo ADM #adm# agora vocês podem interagir😼*\n\n#horario#✨",
    
    closedGroup: "*Grupo fechado com sucesso pelo ADM #adm#  🙅‍♀️*\n\n#horario#🍂",
    
    Ban_Listanegra_global: "*Olha só quem deu as cara #nmr# 😈 agora mete o pé vagabundo*",
    
    simi_palavras_proibidas: ["puta", "gay", "lixo", "viado", "macaco", "preto"],
    
    texto_casal: "*OWHHT*😻🥺......\n            *❣️EU SHIPO ELES 2❣️*\n\n ⸺͟͞ꪶ🌙⧽ #nmr1#\n💞\n ⸺͟͞ꪶ☀️⧽ #nmr2#\n\n*Com uma porcentagem de⧽ ✰ #porcentagem#% ✰*🙅‍♀️",
    
    imagem_link_casal: "https://telegra.ph/file/debbf41ea4d964fde17cc.jpg",
    
    waiting_message: ["⏳ Aguarde um momento...", "Um momento, estou enviando seu pedido...⏱️", "União flasco, mando sem K.o batendo😏.. Enviando seu pedido🥰","Eiii Tem alguma coisa errada com meu celular. Não consigo encontrar seu número nele🙄❤️ Enviando..", "Então, além de me deixar sem ar, o que mais você faz?🤭 Enviando...", "Queria desejar (noite), porque para ser boa teríamos que estar juntos🙄💖 Enviando...", "Seu nome é Wi-Fi? Porque eu estou sentindo uma conexão aqui rsrs🙄😍 Enviando...", "Qual é o número da polícia? Infelizmente, terei que te denunciar por roubar meu coração🤭❤️ Enviando....", "Eii Está calor, né? Mas não é de hoje que eu me derreto por você rsrs🌚🔥 Enviando...", "Realizando ação...🔗", "Manoo você já tomou água hoje? Pfv vai tomar 3 copos d'água corree enquanto envio seu pedido😳❤️", "Tão dura e grossa como minha... Enviando seu pedido rsrs...", "Pisa no freio, ja estou enfiando... Oops enviando* ksksks😌", "Enviando na velocidade da luz🙅‍♀️", "Aguarde ate ano que vem rsrs^-^", "eii🙄 você não é verão mais você deixa o clima entre nois esquentar 😻 Eviando...", "Um momento, estou eviando...", " Calma, respira, relaxa novinha...😼", "Calma aí que a surpresa vem🙀", "Espere um pouquinho que vou enviar o que você pediu🙇‍♀️", "Calma os ânimos, meu boizinho, estou eviando...😻", "Tô pegando aqui... achei!💨", "Tá chegando... chegou? Se chegou, me diz se está feliz 🤭❤" , "Vem vem sambando... só não pisa onde é valioso✨" , "Espere sentando, estou enviando seu pedido🙇‍♀️","Ja bebeu agua hoje criatura?🤨\nSe não, vá beber ums 3 copo d'agua enquanto envio seu pedido❣", "Realizando seu pedido, aguarde um pouco✨", "Eitah😳!! eu sabia que você iria me notar um dia rsrs💖", "[❗] Aguarde amigo, estou fazendo...", "Vai beber uma água💦, ja estou terminando de enviar..🤗", "🙄 Opa, calma ae, tô enviando já!!", "❬❗❭ Aguarde 5 segundos...", "Hoi gatinha💖! Já estou terminando seu comando😘", "ههههه𓅂 Oi filho de Deus, calma ae, tô terminando de fazer..", "Oi princesa, já estou preparando pra enviar, Aguarde..", "🤗 Aguarde um pouquinho que já estou enviando!!", "Aquieta o coração amigo, já estou enviando! 💨", "Espere sentado que estou enviando!💬", "💨💨 Pisa no freio aí amigo, tô enviando já!", "Foi daqui que pediram comando? Ta chegando...🏃‍♀️", "📆 Em 365 dias úteis termino o comando 😂 meme, to enviando!😻", "👺 Não precisa gritar, já ouvi e tô enviando seu pedido!", "Aproveita que tô terminando aqui e beba água, hidrate-se!💦🥵", "Seu pedido é uma ordem, terminando patrão!✨", "☝🏻 Manda quem pode, obedece quem tem juízo. Já tô enviando...🥀", "Jaja está na mão amiga, aguarde um instante!🌸", "*Quem espera, sempre alcança!* ✨","Tô enviando já amigão!🙇‍♀️"],
    wait() {
        return this.waiting_message[Math.floor(Math.random() * this.waiting_message.length)];
    }
    
};

exports.txt = txt;
