import { Client } from '../deps.ts';

const client = await new Client().connect({
    hostname: '10.20.30.12',
    username: 'root',
    password: '+s3Cr3t+',
    db: 'dbusers',
})

export default client;