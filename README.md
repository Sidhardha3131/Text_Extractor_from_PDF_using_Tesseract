PDF Text Extractor with Tesseract OCR (Node.js)

This project is a simple Node.js application that extracts text from PDF files using the Tesseract OCR engine. Leveraging the power of Tesseract.js and the Node.js environment, this tool allows users to convert text content from PDF documents into machine-readable text.

Features:
PDF Upload: Users can upload PDF files through a user-friendly interface.

Text Extraction: Tesseract.js processes the uploaded PDF, extracting and displaying the recognized text.

Language Support: The OCR engine supports multiple languages for text recognition.

Usage:
Clone Repository:

bash
Copy code
git clone <repository_url>
Install Dependencies:

bash
Copy code
npm install
Run the Server:

bash
Copy code
node server.js
Access the Application:
Open the web browser and navigate to http://localhost:3000.

Upload PDF:
Choose a PDF file and observe the text extraction process.

Configuration:
Tesseract Language Settings:
The Tesseract OCR engine is configured to recognize text in multiple languages. You can customize the language settings in the server code.
javascript
Copy code
Tesseract.recognize(
    pdfBuffer, // Buffer of the PDF file
    ['eng', 'deu'], // Language codes for OCR
    { logger: info => console.log(info) }
).then(({ data: { text } }) => {
    res.json({ text });
});
Feel free to customize and enhance the project to suit your specific requirements. Contributions and feedback are welcome!
