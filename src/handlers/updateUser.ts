import { Context, helpers } from '../deps.ts';
import { update } from '../services/user.ts';
import { findById } from '../helpers/doesUserExists.ts';
export async function updateUser(ctx: Context) {
    const params = helpers.getQuery(ctx, { mergeParams: true });
    const userExists = await findById(params.id);
    if (userExists) {
        try {
            const body = ctx.request.body();
            const bodyValue = await body.value;
            bodyValue.id = params.id;
            const result = await update(bodyValue);
            console.log(result);
            ctx.response.status = 202;
            ctx.response.body = { message: result.affectedRows > 0 ? 'User updated' : 'User not updated' };
        } catch (error) {
            console.log(error);
        }
    }
    else {
        ctx.response.status = 404;
        ctx.response.body = { message: `User with id ${params.id} does not exist` };
    }
}