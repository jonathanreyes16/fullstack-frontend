import { Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Header title="Jonathan Reyes">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/admin">Admin</Link>
      </Header>
      <Container fixed>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}
