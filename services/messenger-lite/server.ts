import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { acceptWebSocket, acceptable } from "https://deno.land/std/ws/mod.ts";

import { chat } from "./chat.ts";

listenAndServe({ port: 3000 }, async (req) => {
  if (req.method === "GET" && req.url === "/") {
    req.respond({
      status: 200,
      headers: new Headers({
        "Content-Type": "text/html",
      }),
      body: await Deno.open("./index.html"),
    });
  }

  if (req.method === "GET" && req.url === "/ws") {
    if (!acceptable(req)) {
      return;
    }

    acceptWebSocket({
      conn: req.conn,
      bufReader: req.r,
      bufWriter: req.w,
      headers: req.headers,
    }).then(chat);
  }
});

console.log("Server running on localhost:3000");
