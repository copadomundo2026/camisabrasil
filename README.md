# 🇧🇷 Brasil Copa 2026 – Landing Page de Vendas

Landing page profissional para venda de camisas da Seleção Brasileira para a Copa do Mundo 2026.

## 📋 Funcionalidades

- **Hero** com efeitos animados, ticker e badges flutuantes
- **Galeria de Camisas** (Titular Amarela + Reserva Azul/Preta)
- **Personalizador** com prévia em tempo real (nome + número)
- **3 Planos de Promoção** com desconto progressivo:
  - Individual: R$ 149,90/un
  - Dupla: R$ 119,90/un (Economize R$ 60)
  - Família (3+): R$ 109,90/un (Economize R$ 120)
- **Contador regressivo** de promoção
- **Depoimentos** de clientes
- **Seção de Garantias** (segurança, entrega, troca, qualidade)
- **CTA Final** poderoso
- **Design 100% responsivo** (mobile, tablet, desktop)
- **Animações** scroll reveal, float, ticker, glow

## 🚀 Como usar

### 1. Clone ou faça download do repositório

```bash
git clone https://github.com/seu-usuario/brasil-copa-2026.git
cd brasil-copa-2026
```

### 2. Estrutura de arquivos

```
brasil-copa-2026/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos completos
├── js/
│   └── main.js         # Lógica e interações
├── images/
│   ├── camisa-amarela.webp   # Camisa titular
│   ├── camisa-azul.webp      # Camisa reserva
│   └── modelos.jpg           # Foto com modelos
└── README.md
```

### 3. Abra no navegador

Basta abrir o `index.html` no navegador, ou use um servidor local:

```bash
# Com Python
python -m http.server 8000

# Com Node.js (npx)
npx serve .

# Com VS Code: instale a extensão Live Server
```

Acesse: `http://localhost:8000`

## 🛒 Integração com sistema de pagamento

No arquivo `js/main.js`, na função `addToCart()`, substitua pelo código do seu gateway:

### Hotmart
```javascript
function addToCart() {
  window.open('https://pay.hotmart.com/SEU_PRODUTO?off=OFERTA', '_blank');
}
```

### Shopify
```javascript
function addToCart() {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: VARIANT_ID, quantity: 1 })
  });
}
```

### WhatsApp (mais simples)
```javascript
function addToCart() {
  const msg = `Olá! Quero comprar a camisa ${state.model} - Número ${state.number} - Nome: ${state.name} - Tamanho: ${state.size}`;
  window.open(`https://wa.me/55SEUNUMERO?text=${encodeURIComponent(msg)}`, '_blank');
}
```

## 🌐 Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça push dos arquivos
3. Vá em **Settings → Pages**
4. Em "Source", selecione **Deploy from a branch → main → / (root)**
5. Seu site estará em: `https://seu-usuario.github.io/brasil-copa-2026`

## ✏️ Personalização

### Cores (css/style.css)
```css
:root {
  --yellow: #F2C20A;    /* Amarelo principal */
  --green:  #009C3B;    /* Verde principal */
  --blue:   #002776;    /* Azul CBF */
}
```

### Preços (index.html)
Procure pelas seções `promo-card` e altere os valores de `promo-price` e `promo-old-price`.

### Imagens
Substitua os arquivos em `images/` pelas suas fotos.

### WhatsApp / contato
Atualize os links `href="#"` da seção de atendimento e redes sociais no footer.

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (versões modernas)
- ✅ Mobile iOS e Android
- ✅ Tablet
- ✅ Desktop

## 📜 Licença

Este projeto é de uso livre para fins comerciais pessoais.

---

Feito com 🇧🇷 para a Copa do Mundo 2026
