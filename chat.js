<<<<<<< HEAD
const apiKey= "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";// TODO: Add your key
=======
const apiKey= "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";// TODO: Add your key
>>>>>>> f7642074b426c8d05e02793f598600c7f583b38e


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);
const inputElement = document.getElementById('bot_prompts"');
const sendButton = document.getElementById('send');

const BotResponse = async (text) =>{
    const message = [{
        role: "system", content: `You are a college admissions officer. Do not include information about being an AI.
            You will guide the student through admissions process and deciding the best program and university for the student.`
    }, {
        role: "user", content: text
    }];
    // Make a request to the OpenAI API
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: message,
        temperature: 0.2,
        max_tokens: 2000,
        n: 1
    });

    const messageOutput = completion?.data?.choices?.[0]?.message?.content;
    console.log(messageOutput);
    return  messageOutput;
}

// create a function to handle sending a message and getting a response
const handleSend = async () => {
    const message = inputElement.value;

    // create a new message bubble for the user's message
    const userBubble = document.createElement('div');
    userBubble.classList.add('chat-message', 'user-message');
    userBubble.innerText = message;
    document.getElementById('chat-body').appendChild(userBubble);

    // clear the input field
    inputElement.value = '';

    // send the message to the bot and get the response
    const answer = await BotResponse(message);

    // create a new message bubble for the bot's response
    const botBubble = document.createElement('div');
    botBubble.classList.add('chat-message', 'bot-message');
    botBubble.innerText = answer;
    document.getElementById('chat-body').appendChild(botBubble);

    // scroll to the bottom of the chat window
    document.getElementById('chat-body').scrollTop = document.getElementById('chat-body').scrollHeight;
};


// add an event listener to the send button
sendButton.addEventListener('click', handleSend);

// add an event listener to the input field to allow sending a message by pressing enter
inputElement.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        await handleSend();
    }
});
