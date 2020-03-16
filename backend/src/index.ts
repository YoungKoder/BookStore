import dotenv from "dotenv";
import {UserController} from "./features/users/user.controller";
import App from './app';

//import routes
// import routes from "./shared/routes/routes";

import { addConnection } from "./dataAccess/database/databaseConect";
import { AuthController } from "./features/auth/auth.controller";


addConnection();

dotenv.config();
const port = process.env.SERVER_PORT;

// app.use(routes);

const app = new App([
    new UserController(),
    new AuthController()
])

app.listen();


