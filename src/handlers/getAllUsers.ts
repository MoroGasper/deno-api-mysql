import { Context } from '../deps.ts';
import { search } from '../services/user.ts';

export async function getAllUsers(ctx: Context) {
    try {
        const result = await search();
        ctx.response.body = result.rows;
    } catch (error) {
        console.log(error);
    }
}