// Get the form and output div elements
const apiKey= "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";// TODO: Add your key

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);
/*
const url = "https://api.openai.com/v1/completions";
*/
const form = document.getElementById('essay-review-form');
const output = document.getElementById('essay-review-output');

// Add event listener to form submit event
form.addEventListener('submit', async function (e) {
    // Prevent default form submission
    e.preventDefault();

    // Get the essay review input value
    const essayReview = document.getElementById('essay-review-input').value;
    const prompt = document.getElementById('prompt-input').value;
    console.log(prompt);
    console.log(essayReview);
    // Clear the input field
    //document.getElementById('essay-review-input').value = '';
    //document.getElementById('prompt-input').value = '';
    const message = [{role: "system", content: `You are a college admissions officer. Do not include information about being an AI.
            Essay topic:'${prompt}'`}, {role: "user", content: `Please judge and give feedback on my essay: '${essayReview}'`}];
/*    const message = `You are a college admissions officer. Do not include information about being an AI. Essay topic:'${prompt}'
                        Please judge and give feedback on my essay: '${essayReview}'`;*/
    console.log(message);
    // Make a request to the OpenAI API
    /*const completion = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,},
        body: JSON.stringify({
            messages: message,
            temperature: 0.2,
            model: 'text-davinci-003',
            max_tokens: 2000,
            n: 1})
    });/!*.catch(error => {
        console.error('Error: GPT3.5 API Request Failed', error);
    });*!/*/
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: message,
        temperature: 0.2,
        max_tokens: 2000,
        n: 1});

    const messageOutput = completion?.data?.choices?.[0]?.message?.content;
    console.log(messageOutput);
    // Display the OpenAI API response in the output div
    output.innerHTML = messageOutput || 'No response received from the API';

});