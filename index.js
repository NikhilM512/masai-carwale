const jsonServer=require("json-server");
const app=jsonServer.create();
const router=jsonServer.router("db.json");
const middlewares=jsonServer.defaults();
const port = process.env.PORT || 7894;

app.use(middlewares);
app.use(router);
app.use(cors({
    origin :"*"
}))
app.listen(port)