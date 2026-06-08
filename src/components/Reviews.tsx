"use client";

import React from "react";
import { COMPANY_INFO, REVIEWS } from "@/data/mockData";
import styles from "@/CSS/Reviews.module.css";

interface Review {
  id: string | number;
  rating: number;
  text: string;
  name: string;
}

export default function Reviews({
}: {
  title?: string;
  reviews?: Review[];
}) {
  const [message, setMessage] = React.useState<string>("");

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    // COMPANY_INFO.whatsapp já vem no formato: https://wa.me/<telefone>
    // Vamos adicionar o parâmetro text= para a mensagem aparecer na caixa de texto do WhatsApp.
    const url = `${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(trimmed)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.section}>

      <div className={styles.formWrapper}>
        <h3 className={styles.formTitle}>Deixe sua mensagem</h3>
        <textarea
          className={styles.textarea}
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
        <button
          className={styles.sendButton}
          type="button"
          onClick={handleSend}
          disabled={!message.trim()}
        >
          Enviar para o WhatsApp
        </button>

        <p className={styles.formHint}>
          Ao enviar, sua mensagem vai direto para o WhatsApp e aparece na caixa
          de texto.
        </p>
      </div>
    </section>
  );
}
