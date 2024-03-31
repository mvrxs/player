import { MongoClient } from 'mongodb'

const express = require('express')
const mysql = require('mysql')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3306

export async function connectToDatabase() {

    try {
        await client.connect()
        console.log('Conectado a la bbdd', dbName);
        return client.db(dbName);
    } catch (error) {
        console.error('Error al conectar a la bbdd', error)
    }
}
