import { Router } from "./deps.ts";
import { getAllUsers } from "./handlers/getAllUsers.ts";
import { getUser } from "./handlers/getUser.ts";
import { addUser } from "./handlers/addUser.ts";
import { updateUser } from "./handlers/updateUser.ts";
import { deleteUser } from "./handlers/deleteUser.ts";
import { welcome } from "./handlers/helloword.ts";

const router = new Router();
router
    .get('/', welcome)
    .get('/users/:id', getUser)
    .get('/users', getAllUsers)
    .post('/users', addUser)
    .put('/users/:id', updateUser)
    .delete('/users/:id', deleteUser);

export default router;