/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import 'App/Routes/salas'

Route.get('/', ({ response }) => {
  return response.ok({
    message: 'Practica de encriptacion API',
    data: null
  })
})

Route.get('api/v1', ({ response }) => {
  return response.ok({
    message: 'API V1',
    data: {
      version: '1.0.0'
    }
  })
})

Route.any('*', ({ request, response }) => {
  return response.notFound({
    message: 'Ruta no encontrada',
    data: {
      url: request.url(),
      method: request.method()
    }
  })
})
