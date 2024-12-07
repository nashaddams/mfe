# Micro frontends with `Deno`

This repository contains a proof of concept implementation for
[micro frontends](https://martinfowler.com/articles/micro-frontends.html). Any
custom element can be imported to the _shell_ as long as it provides a `default`
exported `HTMLElement`.

## Structure

```sh
┌── services/
│   ├── service-1 # micro frontend 1
│   └── service-2 # micro frontend 2
├── shared/ # shared UI elements, bundling & server
└── shell/ # shell composing the mirco frontends
```

## Run

```sh
service-1 $ deno task run # start the service on port 8001
service-2 $ deno task run # start the service on port 8002
shell $ deno task run # start the shell on port 8000
```

## Stack

- Custom elements
  - [`r2wc`](https://github.com/bitovi/react-to-web-component)
- Inter-service communication
  - [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)
- User interface
  - [`react`](https://github.com/facebook/react)
  - [`react-router`](https://github.com/remix-run/react-router)
  - [`styled-components`](https://github.com/styled-components/styled-components)
  - [`esbuild-deno-loader`](https://github.com/lucacasonato/esbuild_deno_loader)
- Server
  - [`Deno`](https://github.com/denoland/deno)
  - [`Hono`](https://github.com/honojs/hono)
