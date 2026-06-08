import style from '@/CSS/CTA.module.css';

interface CTAProps {
  title?: string;
  description?: string;
  whatsappUrl?: string;
  whatsappLabel?: string;
  instagramUrl?: string;
  instagramLabel?: string;
}

export default function CTA({
  title = "Precisa de acessórios ou suporte para seu celular?",
  description = "Fale conosco agora mesmo. Atendimento rápido e personalizado via WhatsApp ou Instagram!",
  whatsappUrl = "https://wa.me/556798942177", 
  whatsappLabel = "Chamar no WhatsApp",
  instagramUrl = "https://www.instagram.com/br_test_navirai/",
  instagramLabel = "Seguir no Instagram"
}: CTAProps) {
  return (
    <section className={style.ctaSection}>
      <div className={style.container}>
        <h2 className={style.title}>{title}</h2>
        
        <p className={style.description}>{description}</p>
        
        <div className={style.buttonContainer}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={style.whatsappButton}
          >
            {whatsappLabel}
          </a>
          
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={style.instagramButton}
          >
            {instagramLabel}
          </a>
        </div>
      </div>
    </section>
  );
}