import { Context, helpers } from '../deps.ts';
import { remove } from '../services/user.ts';
import { findById } from '../helpers/doesUserExists.ts';
export async function deleteUser(ctx: Context) {
    const params = helpers.getQuery(ctx, { mergeParams: true });
    const userExists = await findById(params.id);
    if (userExists) {
        try {
            const result = await remove(params);
            console.log(result);
            ctx.response.status = 200;
            ctx.response.body = { message: result.affectedRows > 0 ? 'User deleted' : 'User not deleted' };
        } catch (error) {
            console.log(error);
        }
    }
    else {
        ctx.response.status = 404;
        ctx.response.body = { message: `User with id ${params.id} does not exist` };
    }
}