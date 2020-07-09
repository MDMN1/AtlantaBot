const Discord = require("discord.js");
const bot = new Discord.Client();
const dateFormat = require("dateformat");
const client = new Discord.Client();
const moment = require("moment");
const request = require("request");
const fs = require("fs");
const getYoutubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const yt_api_key = "AIzaSyApFg4t8RUKVHjeXl3VUFJMVT-V1WuaiHM";
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://mdmnv7.glitch.me/`);
}, 280000);

const prefix = "#";

















client.login("NzMwNDEyODc5MjExMzk3MTQx.XwcsAw.Q9TqtM0bNed6N2uVbIbHwla-gE4")