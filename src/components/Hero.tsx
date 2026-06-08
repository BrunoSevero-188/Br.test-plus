import { COMPANY_INFO } from "@/data/mockData";
import styles from "@/CSS/Hero.module.css";

interface HeroProps {
  tagLabel?: string;
  titleNormal?: string;
  titleGradient?: string;
  description?: string;
  productButtonLabel?: string;
  productButtonHref?: string;
  whatsappUrl?: string;
  whatsappButtonLabel?: string;
}

export default function Hero({
  tagLabel = "Assistência & Vitrine Digital",
  titleNormal = "Celulares, acessórios e",
  titleGradient = "assistência especializada",
  description = "Qualidade, confiança e atendimento especializado para o seu smartphone. Encontre os melhores acessórios e suporte técnico.",
  productButtonLabel = "Ver Produtos",
  productButtonHref = "#produtos",
  whatsappUrl = COMPANY_INFO.whatsapp,
  whatsappButtonLabel = "Falar no WhatsApp"
}: HeroProps) {
  return (
    <section className={styles.section}>

      <div className={styles.glow} />

      <div className={styles.content}>

        <span className={styles.tag}>
          {tagLabel}
        </span>

        <h1 className={styles.heading}>
          {titleNormal} <br />
          <span className={styles.gradientText}>
            {titleGradient}
          </span>
        </h1>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.buttonContainer}>
          <a
            href={productButtonHref}
            className={styles.productButton}
          >
            {productButtonLabel}
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            {whatsappButtonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}