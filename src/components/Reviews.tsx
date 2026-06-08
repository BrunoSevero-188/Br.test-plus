import { REVIEWS } from "@/data/mockData";
import styles from "@/CSS/Reviews.module.css";

interface Review {
  id: string | number;
  rating: number;
  text: string;
  name: string;
}

interface ReviewsProps {
  title?: string;
  reviews?: Review[];
}

export default function Reviews({
  title = "O que dizem nossos clientes",
  reviews = REVIEWS 
}: ReviewsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>{title}</h2>
      </div>
      
      <div className={styles.grid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.rating}>
              {"★".repeat(review.rating)}
            </div>
            <p className={styles.reviewText}>"{review.text}"</p>
            <span className={styles.reviewName}>— {review.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}