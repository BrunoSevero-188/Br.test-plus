"use client";
import { COMPANY_INFO } from "@/data/mockData";
import styles from "@/CSS/Header.module.css";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logoLeft?: string;        
  logoHighlight?: string;   
  navItems?: NavItem[];     
  whatsappUrl?: string;     
  whatsappLabel?: string;   
}

export default function Header({
  logoLeft = "BR",
  logoHighlight = "TEST+",
  navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Produtos", href: "#produtos" },
    { label: "Sobre", href: "#sobre" },
  ],
  whatsappUrl = COMPANY_INFO.whatsapp,
  whatsappLabel = "WhatsApp"
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          {logoLeft} <span className={styles.highlight}>{logoHighlight}</span>
        </a>

        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
        >
          {whatsappLabel}
        </a>
      </div>
    </header>
  );
}