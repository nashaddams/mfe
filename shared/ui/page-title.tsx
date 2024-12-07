import React from "react";

export function PageTitle({ title }: { title: string }) {
  React.useEffect(() => {
    globalThis.document.getElementById("page-title")!.textContent = title;
  }, [title]);

  return null;
}
