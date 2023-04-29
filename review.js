function convertPDFtoText(pdfFile, callback) {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(pdfFile);

    fileReader.onload = () => {
        const typedArray = new Uint8Array(fileReader.result);
        pdfjsLib.getDocument(typedArray).promise.then((pdfDoc) => {
            let pages = Array.from({ length: pdfDoc.numPages }, (_, i) => i + 1);
            return Promise.all(pages.map((pageNum) => pdfDoc.getPage(pageNum)));
        })
            .then((pages) => {
                return Promise.all(
                    pages.map((page) => {
                        return page.getTextContent();
                    })
                );
            })
            .then((contents) => {
                let textContent = '';
                contents.forEach((content) => {
                    content.items.forEach((item) => {
                        textContent += item.str + ' ';
                    });
                });
                callback(textContent);
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

const apiKey= "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";// TODO: Add your key


const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);
const myElement = document.getElementById('resume-review');

fetch('Resumes/file_info.json')
    .then(response => response.json())
    .then(data => {
        const path = `Resumes/${data.name}`;
        fetch(path) // fetch the PDF file from the server
            .then(response => response.blob())
            .then(pdfBlob => {
                convertPDFtoText(pdfBlob, async (text) => {
                    console.log(text);
                    const message = [{
                        role: "system", content: `You are a college admissions officer. Do not include information about being an AI.
            You are to review the resume provided from an admissions standpoint.`
                    }, {
                        role: "user", content: `Please give feedback on my resume along with
            other skills I can work on: '${text}'`
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
                    myElement.textContent = messageOutput;
                });
            })
            .catch((error) => {
                console.error(error);
            });
    });