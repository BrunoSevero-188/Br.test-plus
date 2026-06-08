export interface Product {
  id: string;
  src: string;
  name: string;
  description: string;
  tag: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export const COMPANY_INFO = {
  name: "BR Test+",
  whatsapp: "https://wa.me/556798942177",
  whatsappDisplay: "+55 67 9894-2177",
  instagram: "https://www.instagram.com/br_test_navirai/",
  instagramDisplay: "@br_test_navirai"
};

export const SERVICES: Service[] = [
  { id: "1", title: "Transferência de Dados", description: "Migração completa e segura de arquivos, fotos e contatos entre smartphones." },
  { id: "2", title: "Testes de Aparelhos", description: "Diagnóstico técnico completo de hardware, bateria e performance do sistema." },
  { id: "3", title: "Aplicação de Película", description: "Proteção de alta eficiência aplicada com precisão cirúrgica na tela do seu dispositivo." },
  { id: "4", title: "Acessórios para Celulares", description: "Ampla variedade de produtos homologados e com garantia de qualidade." }
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    src: "@/public/Carregador-Mi-20W-Type-C.jpg",
    name: "Carregador Mi 20W (Type-C)",
    description: "Carregamento rápido original Xiaomi, eficiente e totalmente seguro para o seu smartphone.",
    tag: "Original"
  },
  {
    id: "p2",
    src: "@/public/Capinha-Premium-Space.jpg",
    name: "Capinha Premium Space",
    description: "Material PC+TPU de alta resistência. Drop-Tested com transparência duradoura de 2.5mm.",
    tag: "Drop-Tested"
  },
  {
    id: "p3",
    src: "@/public/Fone-Bluetooth-TWS-Kaidi-KD-790.jpg",
    name: "Fone Bluetooth TWS Kaidi KD-790",
    description: "Áudio de alta fidelidade, excelente autonomia de bateria e homologado pela ANATEL.",
    tag: "Homologado"
  }
];

export const REVIEWS = [
  { id: "r1", name: "Lucas Silva", text: "Atendimento impecável! Fiz a transferência de dados do meu celular antigo para o novo muito rápido.", rating: 5 },
  { id: "r2", name: "Amanda Costa", text: "As capinhas premium da Space são fantásticas. O site me ajudou a consultar o estoque pelo WhatsApp direto.", rating: 5 },
  { id: "r3", name: "Roberto Nunes", text: "Melhor assistência técnica de Navirai. Transparência e honestidade no teste do aparelho.", rating: 5 }
];