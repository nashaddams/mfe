import React from "react";

export function DocumentTitle({ title }: { title: string }) {
  React.useEffect(() => {
    globalThis.document.title = title;
  }, [title]);

  return null;
}
