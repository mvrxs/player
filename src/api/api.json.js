import { connectToDatabase } from './db'

const id = urlObject.searchParams.get('id');

export async function connectToDatabase() {

    try {
        await client.connect()
        console.log('Conectado a la bbdd', dbName);
        return client.db(dbName);
    } catch (error) {
        console.error('Error al conectar a la bbdd', error)
    }
}

