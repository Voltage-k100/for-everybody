# For Everybody — Design Brainstorm

## Três abordagens estilísticas

### 1. Civic Square
Tema: Praça pública moderna com tons quentes cívicos (âmbar/terracota), manchetes em serifa e sensação editorial limpa.
Probabilidade: 0.07

### 2. Neon Commons
Tema: Plataforma dark-mode-first com acentos vibrantes elétricos (verde-limão / ciano), painéis de glassmorphism e tipografia geométrica ousada.
Probabilidade: 0.04

### 3. Warm Horizon
Tema: Interface clara e arejada com coral suave e azul-marinho profundo, cartões arredondados e tipografia humanista amigável. Ênfase em acessibilidade e calor comunitário.
Probabilidade: 0.06

---

## Abordagem escolhida: Warm Horizon

### Design Movement
Modern Humanist — uma estética que combina calor orgânico com clareza digital, inspirada em interfaces de produtos comunitários como Medium e Are.na, mas com personalidade própria.

### Core Principles
1. **Inclusão visual**: Layouts que priorizam legibilidade e contraste para todos os usuários
2. **Calor comunitário**: Cores e microinterações que transmitem pertencimento
3. **Respiração**: Espaçamento generoso que evita claustrofobia digital
4. **Autenticidade**: Tipografia e elementos que se sentem feitos à mão, não genéricos

### Color Philosophy
- **Fundo principal**: Branco quente (`oklch(0.99 0.004 80)`) — não branco puro, evita fadiga visual
- **Texto principal**: Azul-marinho profundo (`oklch(0.25 0.03 260)`) — mais suave que preto puro
- **Cor de marca**: Coral vibrante (`oklch(0.68 0.19 35)`) — quente, acolhedor, distinto do azul frio do Twitter
- **Acento secundário**: Turquesa suave (`oklch(0.75 0.12 180)`) — para links e interações
- **Superfícies**: Cartões com fundo levemente off-white e sombras suaves
- **Bordas**: Tons quentes neutros, nunca cinza frio

### Layout Paradigm
Three-column desktop layout (sidebar esquerda + feed central + painel direito), colapsando para single-column com bottom navigation no mobile. O feed central é assimétrico — posts têm tamanhos variados baseados em engajamento, quebrando a monotonia do grid uniforme.

### Signature Elements
1. **Coral pulse**: Um pulso sutil de coral em interações (like, follow) — feedback tátil
2. **Warm cards**: Cartões com bordas levemente arredondadas (12px) e sombras quentes
3. **Horizon divider**: Divisores horizontais com gradiente coral→turquesa representando o horizonte

### Interaction Philosophy
Interações devem sentir-se como conversas — não cliques mecânicos. Hover revela contexto, likes pulsam, reposts deslizam. Tudo responde em menos de 200ms.

### Animation
- Entrada de posts: fade-in + slide-up de 8px, 180ms ease-out, stagger de 40ms
- Like: scale 0.95→1.05→1 com pulso coral, 300ms total
- Transições de página: cross-fade 200ms
- Sidebar: hover expande label com slide-in 150ms
- Scroll: header compacta suavemente com base na posição

### Typography System
- **Display/Headlines**: "Plus Jakarta Sans" (700-800) — geométrica mas amigável
- **Body**: "Inter" (400-500) — legível e neutra
- **Monospace**: "JetBrains Mono" para handles e timestamps
- Hierarquia: 28px → 20px → 16px → 14px → 12px

### Brand Essence
For Everybody é a praça digital onde todas as vozes cabem — aberta, quente e sem barreiras. Para criadores, comunidades e curiosos. Diferente porque acolhe em vez de polarizar.

**3 adjetivos de personalidade**: Acolhedor, Vivo, Direto

### Brand Voice
Headlines diretas e humanas. CTAs em primeira pessoa. Microcopy com personalidade mas sem ser forçado.

Exemplos:
- "Diga o que pensas. Todos te ouvem."
- "Encontra a tua gente."

### Wordmark & Logo
Logotype "FE" em uma cápsula coral com cantos suavemente arredondados. O "E" tem um ponto turquesa — representando a diversidade de vozes. Símbolo independente: um horizonte estilizado (semicírculo coral sobre linha turquesa).

### Signature Brand Color
Coral `oklch(0.68 0.19 35)` — inconfundivelmente For Everybody.
