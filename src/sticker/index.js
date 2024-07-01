let repository = "https://github.com/badDevelopper/figus2/raw/main/";

let num;

module.exports = {
    getStickerRandom(folderName, amount) {
        num = Math.floor(Math.random() * amount) + 1;
        return `${repository}${folderName}/${num}.webp`;
    },
    anime() {
        return this.getStickerRandom("figanime", 177);
    },
    coreana() {
        return this.getStickerRandom("figcoreana", 43);
    },
    desenho() {
        return this.getStickerRandom("figdesenho", 186);
    },
    emoji() {
        return this.getStickerRandom("figemoji", 102);
    },
    engracadas() {
        return this.getStickerRandom("figengracada", 25);
    },
    meme() {
        return this.getStickerRandom("figmeme", 130);
    },
    raiva() {
        return this.getStickerRandom("figraiva", 29);
    },
    roblox() {
        return this.getStickerRandom("figroblox", 21);
    },
};

    