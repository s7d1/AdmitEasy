const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'Resumes/' });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.single('pdfFile'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    const fileName = file.originalname;
    const filePath = path.join(__dirname, 'Resumes', fileName);
    fs.renameSync(file.path, filePath);
    const fileInfo = {
        path: filePath,
        name: fileName
    };

    // Save the fileInfo object to a JSON file
    fs.writeFile('Resumes/file_info.json', JSON.stringify(fileInfo), (err) => {
        if (err) throw err;
        console.log('File info saved!');
    });
    res.type('text/html').send(`
    File uploaded successfully! You will be redirected in <span id="countdown">5</span> seconds.
    <script>
        var count = 5;
        setInterval(function() {
            count--;
            document.getElementById('countdown').innerHTML = count;
            if (count == 0) {
                window.location.href = "http://localhost:63342/New%20folder/DH2023/index.html"; // Replace "/" with the URL of your desired redirect page
            }
        }, 1000);
    </script>
`);});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});