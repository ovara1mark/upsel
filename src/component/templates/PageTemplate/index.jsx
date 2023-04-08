import react from "react";
import { Navbar } from "../../molecules";

export const PageTemplate = ({ header, children, footer }) => {
  return (
    <main>
      <nav className="nav-bar">{/* <Navbar /> */}</nav>
      <section>{children}</section>
      <footer>{footer}</footer>
    </main>
  );
};
