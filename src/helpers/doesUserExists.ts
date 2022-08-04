import client from '../services/db.ts';

export async function findById(id: number | string): Promise<boolean> {
    const result = await client.query(`SELECT COUNT(*) count FROM users WHERE id = ?`, [id]);
    return result[0].count >= 1;
}