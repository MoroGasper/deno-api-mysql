import { Application, bgBrightBlue, brightCyan, green, cyan, yellow, magenta, bold, italic } from './deps.ts';
import router from './routes.ts';

const app = new Application();

app.use(router.routes());

// Logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(
        `${green(ctx.request.method)} ${cyan(ctx.request.url.pathname)} - ${bold(String(rt),)}`,
    );
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.addEventListener("listen", ({ hostname, port, serverType }) => {
    console.log(
        `${bold("Server listen on ")}${yellow(`localhost`)}:${green(`3000`)}`,
    );
    console.log(`${bold("   using HTTP server:")} ${italic(magenta(serverType))}`);
});

await app.listen({ hostname: "127.0.0.1", port: 3000 });
