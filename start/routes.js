'use strict'

const Route = use('Route');


Route.get('pdf', 'ApiPdfController.handle');
Route.get('excel', 'ApiExcelController.handle');