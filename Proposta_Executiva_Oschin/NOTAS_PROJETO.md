# 🌿 NOTAS DO PROJETO — Parque Oschin (Site Oficial)
**Cliente:** Fillipe Holding / Parque Oschin — Canela, Serra Gaúcha  
**Proposta:** `index-cf-dark-v2.html`  
**Responsável:** Creative Flow (ANA)  
**Última atualização:** 2026-05-07

---

## ⚠️ REGRAS OPERACIONAIS
- Orçamentos são HTML puro. **NÃO subir servidor** (Live Server, http-server, etc.)
- Abrir diretamente via `file:///` ou clique duplo no arquivo
- DOM deve sempre estar balanceado (verificar via PowerShell `[regex]::Matches`)

---

## 📋 ESTRUTURA DO SITE — Tudo que será entregue

### 🏠 HOMEPAGE (Página Principal)
- [ ] **Navbar sticky** — Logo + Menu (O Parque, Atrações, Visita, Infraestrutura, Contato) + CTA "Comprar Ingressos"
- [ ] **Hero Section** — Vídeo de fundo com natureza do parque, headline imersiva, 2 CTAs (Garantir Ingresso / Conhecer o Parque)
- [ ] **Trust Bar** — Rating Google/TripAdvisor automático, SSL badge, contador de visitantes
- [ ] **Seção Atrações** — Grid 3-col com foto, título e CTA por atração
- [ ] **Bilheteria Online** — Seleção de data, tipo de ingresso (Adulto/Criança/Família), integração pagamento
- [ ] **Depoimentos** — Reviews reais do Google (Places API) ou curadas manualmente
- [ ] **Galeria de Fotos** — Grid masonry ou carrossel com as melhores fotos do parque
- [ ] **Seção Infraestrutura** — O que tem no parque (estacionamento, lanchonete, trilhas, banheiros, etc.)
- [ ] **Mapa Interativo** — Google Maps embutido com localização e rota
- [ ] **Newsletter / WhatsApp CTA** — Captação de contato para campanhas
- [ ] **Instagram Feed** — Widget com últimas postagens (@parqueoschin)
- [ ] **Footer** — Links, redes sociais, horários, WhatsApp, copyright

### 📄 PÁGINAS INTERNAS
- [ ] **Atrações** — Página mãe listando todas as atrações com filtros
- [ ] **Página por Atração** — Detalhe: fotos, descrição, horários, como chegar, CTA ingresso
- [ ] **Ingresso / Bilheteria** — Fluxo completo de compra (seleção → checkout → confirmação)
- [ ] **Infraestrutura** — Estrutura do parque, facilidades, acessibilidade
- [ ] **Sobre o Parque** — História, missão, sustentabilidade
- [ ] **Galeria** — Fotos e vídeos categorizados
- [ ] **Blog / Novidades** — Eventos, temporadas, notícias
- [ ] **FAQ** — Perguntas frequentes (horários, pets, acessibilidade, etc.)
- [ ] **Contato** — Formulário, mapa, telefone, WhatsApp

### 🎯 LANDING PAGES (para Ads)
- [ ] LP — Temporada de Inverno
- [ ] LP — Dia das Crianças
- [ ] LP — Feriados / Semana Santa
- [ ] LP — Escola / Grupos
- [ ] LP — Casamentos / Eventos Privativos

---

## 🔌 INTEGRAÇÕES TÉCNICAS

### Google Reviews
- **API:** Google Places API (Maps Platform)
- **Endpoint:** `place/details?fields=reviews,rating`
- **Retorna:** Até 5 reviews mais relevantes
- **Custo:** Gratuito dentro do crédito $200/mês Google
- **Estratégia:** Script diário → salva JSON → site lê estático
- **Alternativa:** Elfsight Widget ($9/mês, zero código)
- **Decisão pendente:** ⏳ Aguardando revisão do cliente

### Outras Integrações
- [ ] **Google Maps** — Embed + Place ID do Oschin
- [ ] **WhatsApp Business API** — Float button + redirect com mensagem pré-definida
- [ ] **Instagram Basic Display API** — Feed dinâmico (últimos 9 posts)
- [ ] **TripAdvisor Widget** — Badge de avaliação embeddable
- [ ] **Google Analytics 4** — Tracking de eventos (compra, clique CTA, etc.)
- [ ] **Meta Pixel** — Para campanhas de remarketing
- [ ] **Schema.org / JSON-LD** — TouristAttraction, Event, FAQPage
- [ ] **GEO (llms.txt)** — Visibilidade em IAs de busca (ChatGPT, Perplexity, Google AI)

---

## 🎨 DESIGN
- Paleta: Verde natureza (`#10B981`), Branco, Preto profundo
- Tipografia: Display bold + body clean
- Atmosfera: Mata Atlântica, imersivo, premium ecológico
- Mobile-First — Otimizado para decisão rápida no celular

---

## 💰 ORÇAMENTO
- **Pacote 1 — Fundação:** Site completo + integrações base
- Ver detalhes em: `index-cf-dark-v2.html` slides S3, S4, S4.5

---

## 📝 DECISÕES DE SESSÃO

### 2026-05-07
- Wireframe técnico (blueprint SVG) adicionado ao slide S4 — substitui mockup colorido
- Background da proposta alterado para `#EDE8DC` (bege claro) — diferencia do orçamento Veneza
- S2 refatorado para layout horizontal (strip) — mais limpo que grid vertical
- Google Reviews: decisão pendente entre Places API (grátis, técnico) vs Elfsight ($9/mês, simples)
- **REGRA PERMANENTE:** Nunca subir servidor para visualizar orçamentos HTML puros

---

## ⏳ PENDÊNCIAS
- [ ] Reviews reais do Google do Parque Oschin (o Phelippe precisa passar 2-3 avaliações)
- [ ] Place ID do Parque Oschin no Google Maps
- [ ] Decisão sobre método de integração das reviews
- [ ] Fotos reais do parque para galeria
- [ ] Definir categorias de ingressos e preços
- [ ] Confirmar domínio: `parqueoschin.com.br` (está disponível?)
