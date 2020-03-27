import dotenv from "dotenv";
import App from './app';
import pino from "pino";
import expressPino from "express-pino-logger";

//import routes
// import routes from "./shared/routes/routes";

import { addConnection } from "./dataAccess/database/databaseConect";
import { AuthController } from "./features/auth/auth.controller";
import { PrintingEditionsController } from "./features/printing-editions/printing-edition.controller";
import { UserController } from "./features/user/user.controller";
import { AuthorController } from "./features/author/author.controller";
import { OrderController } from "./features/orders/orders.controller";


addConnection();

dotenv.config();
const port = process.env.SERVER_PORT;


// app.use(routes);

const app = new App([
    new AuthController(),
    new PrintingEditionsController(),
    new UserController(),
    new AuthorController(),
    new OrderController()
])
app.listen();


