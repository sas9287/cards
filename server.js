const express = require("express");
const app = express();
const port = 5500;

// Определите статическую папку для вашего проекта (где хранятся статические файлы, такие как HTML, CSS, и JavaScript)
app.use(express.static("root"));

// Запустите сервер
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
const bot = new Telegraf("6774167185:AAFfpIXcx2zdDkjQocnsdwTTWPHsnCm0jBE");
// const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start((ctx) => {
  const gameUrl = "http://localhost:5500/root/match.html"; // Замените на URL вашей игры
  const gameButton = Markup.button.url("Играть", gameUrl);

  ctx.reply(
    "Добро пожаловать! Нажмите на кнопку ниже, чтобы начать играть.",
    Markup.inlineKeyboard([gameButton])
  );
});

bot.launch();
