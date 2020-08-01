'use strict'

const Route = use('Route');
const Helpers = use('Helpers');
const Drive = use('Drive');


Route.get('/file/public', async ({ request, response }) => {
    let exists = Drive.exists(Helpers.publicPath(request.input('path')))
    if (exists) {
        return response.download(Helpers.publicPath(request.input('path')))
    }
    // response not found
    return 'not found'
});

Route.get('pdf', 'ApiPdfController.handle');
Route.get('excel', 'ApiExcelController.handle');