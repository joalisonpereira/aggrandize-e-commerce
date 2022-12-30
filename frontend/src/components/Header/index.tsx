import { Cinzel } from "@next/font/google";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { Container } from "./styles";

export interface HeaderProps {}

const titleFont = Cinzel({ subsets: ["latin"] });

function Header({}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((state) => !state);
  }

  return (
    <Container isOpen={isOpen}>
      <div className="container">
        <h1 className={titleFont.className}>
          <Link href="/">Aggrandize E-Commerce</Link>
        </h1>
        <button type="button" onClick={toggle}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
        <div className="right">
          <nav>
            <ul>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/">Loja</Link>
              </li>
              <li>
                <Link href="/">Sobre</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Contato</Link>
              </li>
            </ul>
          </nav>
          <ul className="social-links">
            <li>
              <Link href="/">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaPinterestP />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Header;
