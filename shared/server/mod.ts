import { Command } from "@cliffy/command";
import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";

await new Command()
  .option("--port <port:number>", "The server port.", {
    required: true,
  })
  .action(({ port }) => {
    Deno.serve(
      { port },
      new Hono().get("/*", serveStatic({ root: "./public/" })).fetch,
    );
  })
  .parse();
