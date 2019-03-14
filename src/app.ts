import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  cors: true,
  routePrefix: "/api",
  controllers: [__dirname + "/controllers/*.ts"]
});

// run express application on port 3000
app.listen(3000);
