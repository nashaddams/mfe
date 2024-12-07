import * as React from "react";
import r2wc from "@r2wc/react-to-web-component";
import { DocumentTitle, EventService, H1, H2, PageTitle } from "@mfe/shared/ui";

function Service1() {
  React.useEffect(() => {
    (async () => {
      await new Promise((r) => setTimeout(r, 5_000));
      EventService.dispatch("UPDATE_EVENT", { detail: { show: true } });
    })();
  }, []);

  return (
    <>
      <DocumentTitle title="Service one" />
      <PageTitle title="Service one" />
      <H1>Hello from service one 🐶</H1>
      <H2>http://0.0.0.0:8001/public/main.js</H2>
      <p>Sending UPDATE_EVENT in 5 seconds...</p>
    </>
  );
}

export default r2wc(Service1);
