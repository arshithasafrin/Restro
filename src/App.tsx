import { useCallback, useEffect, useState } from "react";
import { ContactDialog } from "./components/ui";
import Page from "./Page";

export default function App() {
  const [open, setOpen] = useState(false);
  const onDemo = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => {
    setOpen(false);
    if (window.location.hash === "#contact") {
      history.pushState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    const sync = () => {
      if (window.location.hash === "#contact") setOpen(true);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Page onDemo={onDemo} />
      <ContactDialog open={open} onClose={onClose} />
    </>
  );
}
