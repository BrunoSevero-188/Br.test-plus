import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header
        whatsappLabel="Fale Conosco"
        navItems={[
          { label: "Início", href: "#" },
          { label: "O que Fazemos", href: "#servicos" },
          { label: "Nossa Vitrine", href: "#produtos" },
          { label: "História", href: "#sobre" }
        ]}
      />

      <main>
        <Hero
          tagLabel="Promoção Especial de Inauguração"
          titleNormal="As melhores películas e"
          titleGradient="acessórios premium"
          productButtonLabel="Ir para Vitrine"
        />

        <Services title="Soluções para seu Smartphone" />

        <FeaturedProducts
          title="Ofertas da Semana"
          subtitle="Confira os acessórios que acabaram de chegar na nossa vitrine"
        />

        <About
          title="Sobre a Empresa"
          highlightText="BR Test+"
          imageUrl="/LogoBrTest.jpeg"
          description="A BR Test+ é referência em soluções inteligentes para o seu smartphone. Atuamos com a venda de acessórios premium homologados, suporte especializado e rotinas técnicas minuciosas para garantir o melhor desempenho e segurança dos seus dados. Nosso compromisso é entregar confiança, transparência e agilidade em cada atendimento."
        />

        <Reviews title="Depoimentos de Quem Confia na BR Test+" />

        <CTA
          title="Gostou de algum produto ou quer tirar uma dúvida?"
          description="Nossa equipe está pronta para te atender agora mesmo. Escolha sua rede favorita!"
          whatsappLabel="Conversar com Técnico"
          instagramLabel="Ver Novidades no Insta"
        />
      </main>

      <Footer
        whatsappDisplay="(67) 9894-2177"
        instagramDisplay="@br_test_navirai"
      />
    </>
  );
}