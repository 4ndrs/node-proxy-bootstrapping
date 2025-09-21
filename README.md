Node support for env variables setting a proxy config (`HTTP_PROXY`/`HTTPS_PROXY`) was recently added, but older versions need to be bootstrapped with `global-agent` and `undici`'s proxy global dispatcher. This script bootstraps proxy config in node apps, so that it can be used with `mitmproxy` (e.g.: for server side network activity in react server components)

## Usage

Run `mitmproxy`

```bash
mitmproxy
```

Set the following env variables where you will be running the node app

```bash
export HTTP_PROXY="http://127.0.0.1:8080"
export HTTPS_PROXY="http://127.0.0.1:8080"
export GLOBAL_AGENT_HTTP_PROXY="http://127.0.0.1:8080"

export NODE_OPTIONS="$NODE_OPTIONS --require /path/to/node-proxy-bootstrapping/bootstrap.js"
export NODE_EXTRA_CA_CERTS="$HOME/.mitmproxy/mitmproxy-ca-cert.pem"
```
