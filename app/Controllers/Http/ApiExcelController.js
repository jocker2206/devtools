'use strict'

const conversionFactory = require('html-to-xlsx')

class ApiExcelController {

    generateExcel = () => {
        return conversionFactory({
            
        });
    }

    handle = async ({ request, response }) => {
        return 'ok';
    }

}

module.exports = ApiExcelController
