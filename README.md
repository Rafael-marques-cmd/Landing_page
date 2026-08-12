# 🍕 Forno di Napoli — Landing Page

Landing page de uma pizzaria artesanal, desenvolida com **React 18 + TypeScript** e **Vite**.

## ✨ Funcionalidades

- 🎨 Layout responsivo (mobile-first)
- 🍕 Cardápio com filtro por categoria (Tradicionais / Especiais / Doces)
- 📱 Integração direta com WhatsApp (mensagens pré-preenchidas por sabor)
- 🧭 Menu fixo com scroll spy (link ativo conforme a seção visível)
- ♿ Acessibilidade (semântica HTML, ARIA labels, contraste, foco visível, `prefers-reduced-motion`)
- ⚡ Performance: imagens com `loading="lazy"`, código dividido
- 🛠️ Tipagem forte em todo o código (strict mode)

## 🧱 Stack

- **React 18** + **TypeScript 5** (modo strict)
- **Vite 5** (build e dev server rápidos)
- **CSS Modules** com CSS Variables (sem dependências extras de UI)
- **react-icons** (ícones leves e tree-shakeable)
- **ESLint** + **Prettier** (lint e formatação)

## 📁 Estrutura do projeto

```
src/
├── components/        # Componentes de UI (cada um em sua pasta)
│   ├── Header/
│   ├── Hero/
│   ├── Features/
│   ├── Menu/
│   ├── About/
│   ├── Testimonials/
│   ├── CallToAction/
│   ├── Contact/
│   └── Footer/
├── data/              # Dados estáticos (cardápio, restaurante)
├── hooks/             # Hooks customizados (useMediaQuery, useScrollSpy)
├── types/             # Tipos de domínio
├── utils/             # Funções utilitárias (formatCurrency, etc.)
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Como rodar

### Pré-requisitos
- Node.js 18+ e npm (ou pnpm/yarn)

### Instalação
```bash
npm install
```

### Dev server
```bash
npm run dev
```
Abre em `http://localhost:3000`.

### Build de produção
```bash
npm run build
npm run preview   # serve a build localmente
```

### Lint e formatação
```bash
npm run lint      # roda o ESLint
npm run format    # formata com Prettier
```

## 🎨 Customização

Todas as cores, fontes e espaçamentos são definidos em CSS Variables em [`src/index.css`](src/index.css).
Para alterar a identidade visual, basta ajustar essas variáveis.

Os dados do restaurante, cardápio, horários, redes sociais e WhatsApp ficam em
[`src/data/restaurant.ts`](src/data/restaurant.ts) — também funciona como ponto único para
i18n futura.

## 📝 Boas práticas aplicadas

- **Componentes funcionais** + hooks, sem classes
- **CSS Modules** para escopo local de estilos
- **Tipos centralizados** em `src/types/domain.ts`
- **Separação de responsabilidades**: dados, utilitários, hooks, UI
- **Acessibilidade**: `aria-label`, `aria-current`, `aria-expanded`, `role="tab"`, ordem de foco
- **Mobile-first** com `clamp()`, `grid`, `flexbox`
- **SEO básico**: meta `description`, `theme-color`, `lang`, título semântico
- **Strict mode** do TypeScript (`noUnusedLocals`, `noUnusedParameters`, etc.)
- **`createRoot`** + `<StrictMode>` na entrada da aplicação

## 📄 Licença

MIT — use como quiser.

