const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather
const bot = new TelegramBot('6673613815:AAG8P6wkZcKAa3w3ybThMqBGuIhKKz2EXBw', { polling: true });

/*
// Listen for /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! I am your Telegram bot. How can I help you?');
  });
  */
  
  /*
  // Listen for /help command
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome! I am your Telegram bot. How can I help you?');
  });
  */
  
  // Listen for new members joining the group
bot.on('new_chat_members', (msg) => {
    const chatId = msg.chat.id;
    const newMembers = msg.new_chat_members;
  
    // Send a welcome message to each new member
    newMembers.forEach((member) => {
      const fullName = `${member.first_name} ${member.last_name || ''}`;
      bot.sendMessage(chatId, `Hello Dear, @${fullName}!!\nWelcome, to Premium Unlock 🥰🌷\nWe wish you a good time here ♥️`);
    });
  });  
  
    /*
    // Listen for text messages
    bot.on('text', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Echo the received message
    bot.sendMessage(chatId, `You said: ${messageText}`);
    });
    */