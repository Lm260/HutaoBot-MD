"use strict";
/**
 * Aqui você pode editar mensagems do bot a vontade!
 * Muita atenção ao mexer em algo, para não dar problema depois.
 * Apenas mude os textos, menos outra coisa.
 */

const txt = {
    Owner: "*COMANDO APENAS PARA MEU DONO. 🤦‍♀️*",
    
    only_leaders: "*SOMENTE MEUS LÍDERES PODEM USAR ESTE COMANDO. 🤦‍♀️*",
    
    only_adm: "*SOMENTE ADMS PODEM USAR ESTE COMANDO. 🤦‍♀️*",
    
    only_vip: "*ESTE COMANDO É EXCLUSIVO SOMENTE PARA OS VIP. 🍸💸*",
    
    only_group: "🔒 *COMANDO DISPONÍVEL APENAS PARA GRUPOS. 🙇‍♀️*",
    
    isBotAdm: "*Eu preciso ser ADM do grupo* 🥺",
    
    command_blocked: "*COMANDO INDISPONÍVEL PARA USO NESTE GRUPO!! 🙅‍♀️*",
    
    erros: {
        api_error:  "*Ocorreu uma pequena falha ao concluir sua solicitação. Por favor, tente novamente!!* 💖🙇‍♀️",
     
        command_error_executor:  "*Ocorreu uma pequena falha ao concluir sua solicitação. Por favor, tente novamente!!* 💖🙇‍♀️",
    },
    
    highTimestamp: "*Não é possível realizar o download de mídias com duração superior a uma hora. 🙅‍♀️*",
    
    global_command_blocked: "🔒 *COMANDO INDISPONÍVEL PARA USO!! 🙅‍♀️*",
    
    member_marked_everyone: "*Marca não fdp 😡 vai tirar o sossego de outro*",
    
    Anti_Bot: "*NÃO É PERMITIDO OUTROS BOTS AQUI!! 😠*",
    
    antilink_group: "*SEM LINKS DE GRUPO AQUI😡🗡*",
    
    anti_sticker: "*FIGURINHAS É PROIBIDO AQUI🚫*",
    
    anti_notas: "*METE O PÉ DAQUI SEU IMUNDO😡*",
    
    anti_audio: "*AUDIO É PROIBIDO AQUI🙅‍♀️*",
    
    anti_link: "*SEM LINKS NESTE GRUPO!!! 😡🗡*",
    
    anti_palavra: "*SEM PALAVRAS OFENSIVAS AQUI SEU IMUNDO!!!😡*",
    
    message_proibida: "*MENSAGEM PROIBIDA NO GRUPO, IREI BANIR!!!🙅‍♀️*",
    
    gamer_mode: "*O MODO-GAMER PRECISA ESTAR ATIVO...⚔️*\n> Comando de ativação: `ModoGamer`",
    
    modorpg: "*O MODO-RPG PRECISA ESTAR ATIVO... ❗*\n> Comando de ativação: `ModoRpg`",
    
    promote: "#user# *FOI PROMOVIDO A ADM DO GRUPO COM SUCESSO✨!! PELO ADM* #sender# 🙅‍♀️",
    
    demote: "*OKAY ADM... AGORA #user# É UM MEMBRO COMUM* 🙅‍♀️",
    
    remove: "#user#\n〘 *FOI REMOVIDO COM SUCESSO* 〙- 『 _por motivos justos_ 』 - 🙅‍♀",
    
    openGroup: "*Grupo aberto com sucesso pelo ADM #adm# agora vocês podem interagir!!! 😼*\n\n#horario#✨",
    
    closedGroup: "*Grupo fechado com sucesso pelo ADM #adm# 🙅‍♀️*\n\n#horario#🍂",
    
    Ban_Listanegra_global: "*Olha só quem deu as cara #nmr# 😈 agora mete o pé daqui vagabundo(a)*",
    
    simi_palavras_proibidas: ["puta", "gay", "lixo", "viado", "macaco", "preto"],
    
    texto_casal: "*OWHHT*😻🥺......\n            *❣️EU SHIPO ELES 2❣️*\n\n ⸺͟͞ꪶ🌙⧽ #nmr1#\n💞\n ⸺͟͞ꪶ☀️⧽ #nmr2#\n\n*Com uma porcentagem de⧽ ✰ #porcentagem#% ✰*🙅‍♀️",
    
    imagem_link_casal: "https://telegra.ph/file/debbf41ea4d964fde17cc.jpg",
    
    waiting_message: ["Seu nome é Wi-Fi? Porque eu estou sentindo uma conexão aqui rsrs🙄😍 Enviando...", "Seu nome é Google? Porque você tem tudo o que eu procurava 😳👉 👈 Enviando....", "Oii!! Espera aí, já estou processando seu pedido!! ✨", "Queria desejar (noite), porque para ser boa teríamos que estar juntos🙄💖 Enviando...", "Eu pareço ser simples, mas guardo uma infinidade de mistérios!! 👀 Enviando pedido...", "⏳ Aguarde um momento...", "Fui criada em agosto de 2023, 📆 e hoje permaneço firme e forte! 💖 Enviando seu pedido...", "Em meio as dificuldades da vida, mantenha o foco e não desista por nada! 🤗 Já estou enviando seu pedido...", "Oi oi, já foi tomar água hoje? 🤨 Não? Então vá beber um gole de água 💧 enquanto termino seu pedido... 😍", "Sinto que estamos mais próximos a cada pedido seu... 😔👉👈 Enviando....", "Oi fofuxo(a) 💖 Já estou processando seu pedido...", "Sou um projeto que abre portas para um novo futuro... 🔮 Aguarde um momento!!", "União flasco, mando sem K.o batendo😏.. Enviando seu pedido🥰", "Opa! Já estou enfiand... Ops!! Enviando rsrs 😳", "A vida é apenas uma, então aproveite cada segundo dela... 💖 Enviando...", "Um momento, estou enviando seu pedido...⏱️", "Oii princesa💋 Já estou enviando seu pedido...", "Jaja está na mão amiga, aguarde um instante!🌸", "Oi criatura de Deus,  🙏 já estou enviando seu pedido! ✨", "Aguarde até ano que vem. Meme 😅 Já estou enviando...", "☝🏻 Manda quem pode, obedece quem tem juízo. Já tô enviando...🥀", "Pisa no freio, ja estou enfiando... Oops enviando* ksksks😌", "Eii Está calor, né? Mas não é de hoje que eu me derreto por você rsrs🌚🔥 Enviando...", "2 reais ou um presente misterioso? 😳🎁 Se você escolheu o presente, já estou enviando... 😍", "📆 Em 365 dias úteis termino o comando 😂 meme, to enviando!😻", "Tão dura e grossa como minha... Enviando seu pedido rsrs...", "Quem espera, sempre alcança!* ✨ Tô enviando já amigão!🙇‍♀️", "Qual é o número da polícia? Infelizmente, terei que te denunciar por roubar meu coração🤭❤️ Enviando...", "A vida é boa, mas seria perfeita se fosse com você junto... 🌷💝 Enviando...", "Qual é o número da polícia? Infelizmente, terei que te denunciar por roubar meu coração🤭❤️ Enviando....", "Enviando na velocidade da luz🙅‍♀️", "👺 Não precisa gritar, já ouvi e tô enviando seu pedido!", "Eiii Tem alguma coisa errada com meu celular. Não consigo encontrar seu número nele🙄❤️ Enviando..", "Então, além de me deixar sem ar, o que mais você faz?🤭 Enviando...", "Qual é o número da polícia? Infelizmente, terei que te denunciar por roubar meu coração🤭❤️ Enviando....", "Realizando ação...🔗", "Manoo você já tomou água hoje? Pfv vai tomar 3 copos d'água corree enquanto envio seu pedido😳❤️", "Tão dura e grossa como minha... Enviando seu pedido rsrs...", "Aguarde ate ano que vem rsrs^-^", "eii🙄 você não é verão mais você deixa o clima entre nois esquentar 😻 Eviando...", "Um momento, estou eviando...", " Calma, respira, relaxa novinha...😼", "Calma aí que a surpresa vem🙀", "Espere um pouquinho que vou enviar o que você pediu🙇‍♀️", "Calma os ânimos, meu boizinho, estou eviando...😻", "Tô pegando aqui... achei!💨", "Tá chegando... chegou? Se chegou, me diz se está feliz 🤭❤", "Vem vem sambando... só não pisa onde é valioso✨", "Espere sentando, estou enviando seu pedido🙇‍♀️", "Ja bebeu agua hoje criatura?🤨\nSe não, vá beber ums 3 copo d'agua enquanto envio seu pedido❣", "Realizando seu pedido, aguarde um pouco✨", "Eitah😳!! eu sabia que você iria me notar um dia rsrs💖", "[❗] Aguarde amigo, estou fazendo...", "Vai beber uma água💦, ja estou terminando de enviar..🤗", "🙄 Opa, calma ae, tô enviando já!!", "❬❗❭ Aguarde 5 segundos...", "Hoi gatinha💖! Já estou terminando seu comando😘", "ههههه𓅂 Oi filho de Deus, calma ae, tô terminando de fazer..", "Oi princesa, já estou preparando pra enviar, Aguarde..", "🤗 Aguarde um pouquinho que já estou enviando!!", "Aquieta o coração amigo, já estou enviando! 💨", "Espere sentado que estou enviando!💬", "💨💨 Pisa no freio aí amigo, tô enviando já!", "Foi daqui que pediram comando? Ta chegando...🏃‍♀️", "📆 Em 365 dias úteis termino o comando 😂 meme, to enviando!😻", "Aproveita que tô terminando aqui e beba água, hidrate-se!💦🥵", "Seu pedido é uma ordem, terminando patrão!✨", "☝🏻 Manda quem pode, obedece quem tem juízo. Já tô enviando...🥀", "*Quem espera, sempre alcança!* ✨", "Tô enviando já amigão!🙇‍♀️"],
    wait() {
        return this.waiting_message[Math.floor(Math.random() * this.waiting_message.length)];
    }
    
};

exports.txt = txt;
