// Imagens são URLs públicas de previews de templates (unsplash/behance/demo).
// Sinta-se à vontade para trocar pelas suas próprias imagens/templates.

const PRODUCTS = [
  {
    id: 1,
    title: "Template Portfólio Criativo",
    desc: "Ideal para designers, freelancers, artistas. Layout moderno e animado.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    oldPrice: 120.00,
  },
  {
    id: 2,
    title: "Landing Page Startup SaaS",
    desc: "Pronto para startups tech, com integração de formulário.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
    oldPrice: 139.00,
  },
  {
    id: 3,
    title: "Template Blog Minimalista",
    desc: "Visual limpo, responsivo, fácil de customizar para blogs pessoais.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
    oldPrice: 89.00,
  },
  {
    id: 4,
    title: "E-commerce Moderno",
    desc: "Template completo para lojas virtuais, carrinho integrado.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80",
    oldPrice: 229.00,
  },
  {
    id: 5,
    title: "Institucional Profissional",
    desc: "Perfeito para empresas, advogados, contadores e negócios locais.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80",
    oldPrice: 110.00,
  },
  {
    id: 6,
    title: "Restaurante Delivery",
    desc: "Menu digital, integração com WhatsApp, ideal para delivery.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
    oldPrice: 99.00,
  }
];

// Calcula o preço com 10% de desconto (mantém 2 casas)
PRODUCTS.forEach(p => {
  p.price = Math.round((p.oldPrice * 0.9 + Number.EPSILON) * 100) / 100;
});

export default PRODUCTS;