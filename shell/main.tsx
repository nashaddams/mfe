import * as React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  DocumentTitle,
  EventService,
  PageTitle,
  type UpdateAvailableEvent,
} from "@mfe/shared/ui";
import { GlobalStyle, theme } from "./global.tsx";
import { Remote } from "./remote.tsx";
import { Header, Link, Main, Nav } from "./components.tsx";

function App() {
  const [updateReceived, setUpdateReceived] = React.useState<boolean>(false);

  const updateNotification = (e: Event) => {
    const { detail } = e as CustomEvent<UpdateAvailableEvent>;
    setUpdateReceived(detail.show);
  };

  React.useEffect(() => {
    EventService.subscribe("UPDATE_EVENT", updateNotification);
    return () => {
      EventService.unsubscribe("UPDATE_EVENT", updateNotification);
    };
  }, []);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Header>
          <Link to="/">MFE</Link>
          <div id="page-title"></div>
          {updateReceived ? <div>Received: UPDATE_EVENT</div> : null}
        </Header>
        <Nav>
          <Link to="/service-1">Service one</Link>
          <Link to="/service-2">Service two</Link>
        </Nav>
        <Main>
          <Routes>
            <Route
              index={true}
              element={
                <>
                  <DocumentTitle title="MFE" />
                  <PageTitle title="/" />
                </>
              }
            />
            <Route
              path="/service-1"
              element={<Remote url="http://localhost:8001/main.js" />}
            />
            <Route
              path="/service-2"
              element={<Remote url="http://localhost:8002/main.js" />}
            />
          </Routes>
        </Main>
        <GlobalStyle />
      </ThemeProvider>
    </HashRouter>
  );
}

const node = document.getElementById("root");
const root = createRoot(node!);
root.render(<App />);
