import client from './db.ts';
import { UserModel, UserParams } from '../models/user.ts';

export async function search(params: UserParams = {}) {
    const isSpecificUser = Object.keys(params).length !== 0;
    if (isSpecificUser) {
        return await client.execute(`SELECT * FROM users WHERE id = ?`, [params.id]);
    } else {
        return await client.execute(`SELECT * FROM users`);
    }
}
export async function insert({ name, country }: UserModel) {
    return await client.query(`INSERT INTO users (name, country) VALUES (?, ?)`, [name, country]);
}
export async function update({ name, country, id }: UserModel) {
    return await client.query(`UPDATE users SET name = ?, country = ? WHERE id = ?`, [name, country, id]);
}
export async function remove(params: UserParams = {}) {
    return await client.query(`DELETE FROM users WHERE id = ?`, [params.id]);
}