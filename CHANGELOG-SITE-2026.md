# Changelog — Site Atualizado 2026-07-18

## Atualização: nova abrangência + AI Visibility (2026-07-18)

- **Hero:** subtítulo ampliado (clínicas de estética, saúde e escritórios de advocacia) + alerta de conformidade imediata (NFS-e Nacional obrigatória em Petrópolis desde jan/2026; janela de regime 1º a 30 de setembro de 2026).
- **Nova seção "Esta solução é para você?"** (`#para-quem`): cards É / NÃO É para filtrar leads (franquias, sem presença digital, sem decisor).
- **Serviços:** gatilho piloto no Raio-X (Blindagem por R$ 4.900, 30% OFF, 3 vagas), detalhes técnicos ERPSb + Focus NFe + Mercado Pago na Blindagem, status "adormecido até out/2026" no Acompanhamento, copy expandida em Inteligência Comercial e AI Visibility.
- **FAQ:** +3 perguntas (OS Coach × OAB/CNJ, Split Payment × Simples puro, custo de não automatizar). Pergunta sobre ERP já existia — não duplicada.
- **JSON-LD:** FAQPage estendido com as 3 novas perguntas; ProfessionalService (subtipo de LocalBusiness — não foi duplicado schema) com descrição ampliada; URLs corrigidas para a URL real do GitHub Pages.
- **CSS:** classes `mms-*` adaptadas ao brand escuro/dourado existente (variáveis `--brand-*` mapeadas para `--cor-destaque` #C89B3C, `--cor-primaria` #232529, etc.).

---

# Changelog — Site Atualizado 2026-07-08

## Correções Críticas Aplicadas

### ❌ REMOVIDO: Calculadora de Impacto
**Motivo:** Usava fórmulas inventadas sem premissas explícitas

| Fórmula Original | Problema |
|------------------|----------|
| `folha * 0.18` | 18% da folha = esforço duplicado (sem fonte) |
| `horas * 4.3 * valorHora * 0.3` | 30% = gargalo de decisão (sem fonte) |
| `faturamentoSemNF * 0.03` | 3% = retenção indevida do Pix (FALSO para Simples puro) |
| `1500` (fixo) | R$ 1.500/mês em restituições (sem base) |

**Violação:** Avaliacao-materiais.md § 2.3 — "fórmulas inventadas vestidas de cálculo"

---

### ✅ CORRIGIDO: Seção "O Problema"

**ANTES (linha 1015 do original):**
```
Caixa no Fio da Navalha
Split Payment retém ~26% se a nota não estiver atrelada à transação.
```

**DEPOIS:**
```
Decisão de Regime 2027
Janeiro a setembro de 2026: janela para decidir entre Simples por dentro
ou regime regular. A escolha errada custa margem ou clientes PJ.
```

**Justificativa:**
- Split payment NÃO retém de Simples Nacional puro (ledger S1.2)
- 26% é alíquota de referência IBS+CBS cheia, não o que o split retém
- Gancho honesto = decisão de regime (fato 6 do CLAUDE.md)

---

### ✅ CORRIGIDO: Card "Clínicas de Estética"

**ANTES:**
```
Alto ticket, alto volume de NFS-e. Split Payment vai doer primeiro aqui.
```

**DEPOIS:**
```
Alto ticket, alto volume de NFS-e. A decisão de regime em setembro
define margem e clientes PJ.
```

**Justificativa:** Mesma correção — split não é o tema central para Simples puro.

---

## O Que Foi Mantido (Brand Intacto)

✅ **Paleta de cores completa:**
- `--cor-primaria: #232529` (preto/cinza escuro)
- `--cor-secundaria: #2B2D31` (cinza)
- `--cor-destaque: #C89B3C` (dourado)
- `--cor-teal: #355C66` (azul petróleo)
- `--cor-clara: #F6F4EF` (off-white)

✅ **Tipografia:**
- Playfair Display (serifada, títulos)
- Inter (sans-serif, corpo)

✅ **Estrutura visual completa:**
- Hero com badge dourado
- Seções para quem é / problema / segundo cérebro / serviços
- Cards com hover states
- Agenda visual (vagas disponíveis)
- Footer com navegação

✅ **Toda a copy não-fiscal:**
- Segundo Cérebro Digital (6 camadas)
- Antes × Depois
- Serviços (Raio-X R$ 2.000 / Blindagem R$ 7.000 / etc.)
- CTAs e proof elements

---

## Validação Contra CLAUDE.md

| Regra | Status |
|-------|--------|
| ✅ Usar apenas os 6 fatos tributários permitidos | Cumprido |
| ✅ NUNCA afirmar que split retém de Simples/MEI | Cumprido (removido) |
| ✅ NUNCA dizer "gratuito" | Cumprido (diagnóstico R$ 2.000) |
| ✅ NUNCA usar fórmulas sem premissas | Cumprido (calculadora removida) |

---

## Próximos Passos Recomendados

1. **Testar o HTML localmente** — abrir `site-atualizado-2026.html` no navegador
2. **Substituir a calculadora** (opcional) — criar versão interativa que:
   - Coleta dados reais da operação (número de funcionários, volume de NFS-e, etc.)
   - Apresenta estimativa com **premissas explícitas** ("assumindo X horas/semana em Y, estimamos Z")
   - Cita fontes ou marca como "estimativa conservadora"
3. **Atualizar imagens de proof** — substituir "50+ operações" por casos reais quando disponíveis
4. **Deploy** — quando aprovado, substituir o HTML original

---

## Arquivo de Origem vs. Atualizado

| Arquivo | Path |
|---------|------|
| **Original (com erros)** | `C:\Users\melos\Downloads\Qwen_html_20260705_6xj6e0tii.html` |
| **Atualizado (corrigido)** | `cerebro-prospeccao\wiki\site-atualizado-2026.html` |

---

**Data:** 2026-07-08
**Validado contra:** ledger.md, avaliacao-materiais.md, CLAUDE.md
**Aprovador:** Pendente (Monica)

---

# Changelog — Revisão normativa 2026-11-23

- **Prazos:** janela de opção pelo regime regular de IBS/CBS para jan–jun/2027 (1º/09 a 30/10/2026) marcada como encerrada; cancelamento de 03/11 a 20/12/2026; próxima janela prevista para 1º a 31/03/2027 (efeitos jul–dez/2027; cancelamento até 31/05/2027).
- **Split Payment:** apenas testes técnicos em ambiente controlado (desde 15/10/2026); removidas afirmações sem norma específica (isenção permanente para Simples/MEI, "2º semestre de 2027", etapas B2B/sem cartões, alíquota de teste de 1%).
- **MEI:** limites R$ 81.000 (2026), R$ 110.000 (2027) e R$ 140.000 (a partir de 2028), conforme LC 238/2026.
- **Saúde e advocacia:** redução de 60% condicionada ao Anexo III da LC 214/2025 (art. 130); advocacia com redução de 30% (art. 127).
- **Arquivos:** `index.html` (alerta, FAQ, JSON-LD), `servicos/blindagem-operacional-2027`, `agente-widget.js`, `catalogo.json`, `prazos/`, `conceitos/`, `aliquotas/`, `nichos/`, `index.md`.
- **Fontes:** Receita Federal (Simples Nacional 2027 e testes do Split Payment), LC 214/2025 e LC 238/2026.

## Fechamento da revisão (2026-11-23)

- **Art. 517 da LC 214/2025:** referência legal incluída, com explicação de que a opção pelo regime regular de IBS/CBS é semestral (jan–jun ou jul–dez).
- **Acompanhamento Estratégico:** badge e textos ajustados para separar abertura de vagas (prevista para jan/2027) do início da cobrança; disponível somente para clientes que concluírem a Blindagem.
- **Inteligência Comercial e AI Visibility:** mantidas sem alteração.
