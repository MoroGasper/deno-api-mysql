import { Context } from '../deps.ts';
import { insert } from '../services/user.ts';

export async function addUser(ctx: Context) {
    const body = ctx.request.body();
    const user = await body.value;
    console.log(user);
    if (user.hasOwnProperty('name') && user.hasOwnProperty('country')) {
        try {
            const result = await insert(user);
            ctx.response.status = 201;
            ctx.response.body = { message: result.affectedRows > 0 ? 'User added' : 'User not added' };
        } catch (error) {
            console.log(error);
        }
    } else {
        ctx.response.status = 400;
        ctx.response.body = { message: 'Invalid request' };
    }
}