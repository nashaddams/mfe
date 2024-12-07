// deno-lint-ignore no-unused-vars verbatim-module-syntax
import * as React from "react";
import r2wc from "@r2wc/react-to-web-component";
import { DocumentTitle, H1, H2, PageTitle } from "@mfe/shared/ui";

function Service2() {
  return (
    <>
      <DocumentTitle title="Service two" />
      <PageTitle title="Service two" />
      <H1>Hello from service two 🐼</H1>
      <H2>http://0.0.0.0:8002/public/main.js</H2>
    </>
  );
}

export default r2wc(Service2);
