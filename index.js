const express = require("express");
const fileUpload = require("express-fileupload");
const pdfparse = require("pdf-parse");
const path = require("path");

const app = express();

app.use('/', express.static(path.join(__dirname, "public")));
app.use(fileUpload());

app.post("/extract-text", (req, res) => {
    if (!req.files || !req.files.pdfFile) {
        res.status(404);
        res.end();
    }
    pdfparse(req.files.pdfFile.data).then(result => {
        res.send(result.text);
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
