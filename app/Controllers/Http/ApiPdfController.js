'use strict'

const pdf = require('html-pdf');

class ApiPdfController {

    _generatePdf = (html) => {
        return new Promise((resolver, reject) => {
            pdf.create(html).toBuffer((err, buffer) => {
                if (err) reject({
                    success: false,
                    err
                })
                else resolver({
                    success: true,
                    buffer
                })
            });
        });
    }

    handle = async ({ request, response }) => {
        let html = `<link rel="stylesheet" href="/file/public?path=/css/reset.css">`
        html += `

            <style>
                * {
                    font-size: 100%;
                    font-family: sans-serif;
                }
            </style>

            <h1>Hello world</h1>
        `;
        let { success, buffer, err } = await this._generatePdf(html);
        if (!success) throw new Error(err);
        response.header('Content-Type', 'application/pdf');
        response.send(buffer);
    }

}

module.exports = ApiPdfController
