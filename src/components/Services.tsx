import { SERVICES } from "@/data/mockData";
import styles from "@/CSS/Services.module.css";

interface ServiceItem {
  id: string | number;
  title: string;
  description: string;
}

interface ServicesProps {
  title?: string;
  services?: ServiceItem[];
}

export default function Services({
  title = "Nossos Serviços Especializados",
  services = SERVICES 
}: ServicesProps) {
  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.content}>

        <h2 className={styles.heading}>
          {title}
        </h2>
        <div className={styles.divider} />
      </div>

      <div className={styles.grid}>

        {services.map((service) => (
          <div 
            key={service.id} 
            className={styles.serviceCard}
          >
            <div className={styles.icon}>
              ✓
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}