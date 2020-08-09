import { Client } from 'pg';
const client = new Client({
  user: 'shop',
  database: 'shop',
  password: 'myPassword',
  host: '127.0.0.1',
  port: 5432
})

let dbIsConnect = false;
export const connectToDb = async (next) => {
  if (!dbIsConnect) {
    console.log('start connect to db');
    await client.connect();
    const res = await client.query('SELECT $1::text as message', ['db connected***'])
    console.log(res.rows[0].message) // Hello world!
    await client.end();
    dbIsConnect = true;
  }
  next();
}