import { COMPANY_INFO } from "@/data/mockData";
import styles from "@/CSS/Footer.module.css";

interface FooterProps {
  companyNameLeft?: string;      
  companyNameHighlight?: string; 
  whatsappUrl?: string;
  whatsappDisplay?: string;
  instagramUrl?: string;
  instagramDisplay?: string;
}

export default function Footer({
  companyNameLeft = "BR",
  companyNameHighlight = "TEST+",
  whatsappUrl = COMPANY_INFO.whatsapp,
  whatsappDisplay = COMPANY_INFO.whatsappDisplay,
  instagramUrl = COMPANY_INFO.instagram,
  instagramDisplay = COMPANY_INFO.instagramDisplay,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
   
          <span className={styles.companyName}>
            {companyNameLeft} <span className={styles.highlight}>{companyNameHighlight}</span>
          </span>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {companyNameLeft} {companyNameHighlight.toLowerCase() === "test+" ? "Test+" : companyNameHighlight}. Todos os direitos reservados.
          </p>
        </div>
        
        <div className={styles.contactInfo}>
   
            <div>
            <span className={styles.contactLabel}>Contato</span>
            <a href={whatsappUrl} className={styles.contactLink}>
              {whatsappDisplay}
            </a>
          </div>
 
          <div>
            <span className={styles.contactLabel}>Instagram</span>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className={styles.contactLink}>
              {instagramDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}