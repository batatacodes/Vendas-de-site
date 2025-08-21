```md
# TemplatesStore — Loja de templates (React)

Projeto: loja de templates de sites (HTML/CSS/React/JS). Visual moderno e chamativo. Todos os produtos têm 10% de desconto aplicado automaticamente.

Características
- Listagem de templates com preview, categorias e tags.
- Busca, filtro por categoria e ordenação.
- Preço original riscado + preço com 10% OFF.
- Carrinho persistente via localStorage.
- Checkout simulado com validação.
- Responsivo (desktop + mobile).
- Projeto pronto para desenvolvimento com Parcel.

Como rodar
1. Instale dependências:
   npm install

2. Rode em desenvolvimento (abre navegador automaticamente):
   npm start

3. Build para produção:
   npm run build

Estrutura principal
- index.html
- src/
  - index.jsx
  - App.jsx
  - styles.css
  - components/
    - Header.jsx
    - ProductList.jsx
    - ProductCard.jsx
    - Cart.jsx
    - CheckoutModal.jsx
  - data/
    - products.js

Publicação no GitHub
1. Inicie git na pasta:
   git init
   git add .
   git commit -m "Initial commit — TemplatesStore"

2. Crie repo chamado `Calculadora` (ou outro) no GitHub e empurre:
   git remote add origin https://github.com/SEU_USUARIO/Calculadora.git
   git branch -M main
   git push -u origin main

Observações
- Os pagamentos são simulados (mock). Para integrar gateway real, substitua o fluxo do CheckoutModal pelo endpoint do seu provedor.
- Se quiser, eu posso criar o repositório remoto para você — preciso de autorização e (opcionalmente) um token para criar no seu nome.
```