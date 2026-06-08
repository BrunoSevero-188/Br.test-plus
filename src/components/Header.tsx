"use client";
import { useEffect, useRef, useState } from "react";
import { COMPANY_INFO } from "@/data/mockData";
import styles from "@/CSS/Header.module.css";

interface NavItem {
  label: string;
  href: string;
  imageUrl?: string;
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
  whatsappLabel = "WhatsApp",
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (!isMenuOpen) return;
      const el = rootRef.current;
      if (!el) return;
      const target = e.target as Node | null;
      if (target && el.contains(target)) return;
      setIsMenuOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isMenuOpen) return;
      if (e.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container} ref={rootRef}>
        <a href="#" className={styles.logo}>
          {logoLeft} <span className={styles.highlight}>{logoHighlight}</span>
        </a>

        <div className={styles.nav}>
          <button
            type="button"
            className={styles.optionsButton}
            aria-label={isMenuOpen ? "Fechar opções" : "Abrir opções"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            ⋮
          </button>

          {isMenuOpen && (
            <div className={styles.dropdown} role="menu" aria-label="Opções">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  role="menuitem"
                  className={styles.dropdownLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

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
