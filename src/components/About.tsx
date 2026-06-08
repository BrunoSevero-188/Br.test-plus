import style from '@/CSS/About.module.css';

interface AboutProps {
  title?: string;
  description: string;
  highlightText?: string;
  imageUrl?: string; 
}

export default function About({ 
  title = "Sobre a Empresa", 
  description, 
  highlightText = "BR Test+",
  imageUrl = "@/public/LogoBrTest.jpeg" 
}: AboutProps) {
  
  const parts = description.split(highlightText);

  return (
    <section id="sobre" className={style.aboutSection}>
      <div className={style.glowPurple} />
      
      <div className={style.container}>
 
        <div className={style.imageContainer}>
          <img 
            src={imageUrl} 
            alt={`Fachada ou ambiente corporativo da ${highlightText}`} 
            className={style.image}
            loading="lazy"
          />
        </div>

        <div className={style.textWrapper}>
          <h2 className={style.title}>{title}</h2>
          <p className={style.description}>
            {parts.length > 1 ? (
              <>
                {parts[0]}
                <strong className={style.highlight}>{highlightText}</strong>
                {parts[1]}
              </>
            ) : (
              description
            )}
          </p>
        </div>
      </div>
    </section>
  );
}