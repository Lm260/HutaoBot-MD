'use strict';
const { readFileSync } = require('fs');
const { DLT_FL, saveJson } = require("../js/functions.js");
const { tmpdir } = require("os");
const { randomBytes } = require("crypto");
const ff = require('fluent-ffmpeg');
const { Image } = require("node-webpmux");
const path = require("path");

async function imageToWebp2(media) {
	const tmpFileOut = path.join(tmpdir(), `${randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
	const tmpFileIn = path.join(tmpdir(), `${randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`);
	
	saveJson(tmpFileIn, media);
	
	await new Promise((resolve, reject) => {
		ff(tmpFileIn)
			.on("error", reject)
			.on("end", () => resolve(true))
			.addOutputOptions([
				"-vcodec",
				"libwebp",
				"-vf",
				"scale='min(9999999,iw)':min'(9999999,ih)':force_original_aspect_ratio=decrease,fps=15, pad=0:0:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
			])
			.toFormat("webp")
			.save(tmpFileOut);
	});
	
	const buff = readFileSync(tmpFileOut);
	DLT_FL(tmpFileOut);
	DLT_FL(tmpFileIn);
	return buff;
}

async function videoToWebp2(media) {
	const tmpFileOut = path.join(tmpdir(), `${randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
	const tmpFileIn = path.join(tmpdir(), `${randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`);
	
	saveJson(tmpFileIn, media);
	
	await new Promise((resolve, reject) => {
		ff(tmpFileIn)
			.on("error", reject)
			.on("end", () => resolve(true))
			.addOutputOptions([
				"-vcodec",
				"libwebp",
				"-vf",
				"scale=220:220,fps=12,pad=0:0:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse"
			])
			.toFormat("webp")
			.save(tmpFileOut);
	});
	
	const buff = readFileSync(tmpFileOut);
	DLT_FL(tmpFileOut);
	DLT_FL(tmpFileIn);
	return buff;
}

async function writeExifImg2(media, metadata) {
	let wMedia = await imageToWebp2(media);
	const tmpFileIn = path.join(tmpdir(), `${randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
	const tmpFileOut = path.join(tmpdir(), `${randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
	saveJson(tmpFileIn, wMedia);
	
	if (metadata.packname || metadata.author) {
		const img = new Image();
		const json = {
			"sticker-pack-id": "HutaoBot-MD",
			"sticker-pack-name": metadata.packname,
			"sticker-pack-publisher": metadata.author,
			"emojis": metadata.categories ? metadata.categories : [""]
		};
		const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16,
			0x00, 0x00, 0x00
		]);
		const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
		const exif = Buffer.concat([exifAttr, jsonBuff]);
		exif.writeUIntLE(jsonBuff.length, 14, 4);
		await img.load(tmpFileIn);
		DLT_FL(tmpFileIn);
		img.exif = exif;
		await img.save(tmpFileOut);
		return tmpFileOut;
	}
}

async function writeExifVid2(media, metadata) {
	let wMedia = await videoToWebp2(media);
	const tmpFileIn = path.join(tmpdir(), `${randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
	const tmpFileOut = path.join(tmpdir(), `${randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
	saveJson(tmpFileIn, wMedia);
	
	if (metadata.packname || metadata.author) {
		const img = new Image();
		const json = {
			"sticker-pack-id": "HutaoBot-MD",
			"sticker-pack-name": metadata.packname,
			"sticker-pack-publisher": metadata.author,
			"emojis": metadata.categories ? metadata.categories : [""]
		};
		const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16,
			0x00, 0x00, 0x00
		]);
		const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
		const exif = Buffer.concat([exifAttr, jsonBuff]);
		exif.writeUIntLE(jsonBuff.length, 14, 4);
		await img.load(tmpFileIn);
		DLT_FL(tmpFileIn);
		img.exif = exif;
		await img.save(tmpFileOut);
		return tmpFileOut;
	}
}

async function writeExif2(media, metadata) {
	let wMedia = /webp/.test(media.mimetype) ? media.data : /image/.test(media.mimetype) ? await imageToWebp2(media.data) : /video/.test(media.mimetype) ?
		await videoToWebp2(media.data) : "";
	const tmpFileIn = path.join(tmpdir(), `${randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
	const tmpFileOut = path.join(tmpdir(), `${randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`);
	saveJson(tmpFileIn, wMedia);
	
	if (metadata.packname || metadata.author) {
		const img = new Image();
		const json = {
			"sticker-pack-id": "HutaoBot-MD",
			"sticker-pack-name": metadata.packname,
			"sticker-pack-publisher": metadata.author,
			"emojis": metadata.categories ? metadata.categories : [""]
		};
		const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16,
			0x00, 0x00, 0x00
		]);
		const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
		const exif = Buffer.concat([exifAttr, jsonBuff]);
		exif.writeUIntLE(jsonBuff.length, 14, 4);
		await img.load(tmpFileIn);
		DLT_FL(tmpFileIn);
		img.exif = exif;
		await img.save(tmpFileOut);
		return tmpFileOut;
	}
}

module.exports = {
	imageToWebp2,
	videoToWebp2,
	writeExifImg2,
	writeExifVid2,
	writeExif2
};