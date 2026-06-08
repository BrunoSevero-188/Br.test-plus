import { PRODUCTS, COMPANY_INFO } from "@/data/mockData";
import style from "@/CSS/FeaturedProducts.module.css";

interface Product {
  id: string | number;
  src: string;
  name: string;
  description: string;
  tag: string;
}

interface FeaturedProductsProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
  whatsappUrl?: string;
}

export default function FeaturedProducts({
  title = "Produtos em Destaque",
  subtitle = "Acessórios premium selecionados para você",
  products = PRODUCTS, 
  whatsappUrl = COMPANY_INFO.whatsapp 
}: FeaturedProductsProps) {
  return (
    <section id="produtos" className={style.productsSection}>
      <div className={style.container}>
        
        <div className={style.headerRow}>
          <div>
            <h2 className={style.title}>{title}</h2>
            <p className={style.subtitle}>{subtitle}</p>
          </div>
          <div className={style.decoratorLine} />
        </div>

        <div className={style.grid}>
          {products.map((product) => (
            <div key={product.id} className={style.card}>
              <div>
                <div className={style.imageWrapper}>
                  <span className={style.tag}>
                    {product.tag}
                  </span>
                  <div className={style.image}>
                    <img src={product.src} alt={product.name} />
                  </div>
                  <div className={style.productNamePlaceholder}>
                    {product.name}
                  </div>
                </div>
                <h3 className={style.productName}>{product.name}</h3>
                <p className={style.description}>
                  {product.description}
                </p>
              </div>

              <div className={style.ctaButton}>
                <a
                  href={`${whatsappUrl}?text=Olá,%20gostaria%20de%20consultar%20disponibilidade%20do%20produto:%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.ctaLink}
                >
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}