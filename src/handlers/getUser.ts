import { Context, helpers } from '../deps.ts';
import { search } from '../services/user.ts';
import { findById } from '../helpers/doesUserExists.ts';

export async function getUser(ctx: Context) {
    const params = helpers.getQuery(ctx, { mergeParams: true });
    const userExists = await findById(params.id);
    if (userExists) {
        try {
            const result = await search(params);
            ctx.response.status = 200;
            ctx.response.body = result.rows;
        } catch (error) {
            console.log(error);
        }
    }
    else {
        ctx.response.status = 404;
        ctx.response.body = { message: `User with id ${params.id} does not exist` };
    }
}