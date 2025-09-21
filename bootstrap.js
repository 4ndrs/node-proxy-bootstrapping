import { bootstrap } from "global-agent";
import { ProxyAgent, setGlobalDispatcher } from "undici";

bootstrap();

const proxy = process.env.HTTP_PROXY || process.env.HTTPS_PROXY || null;

if (proxy) {
  setGlobalDispatcher(new ProxyAgent(proxy));
}
