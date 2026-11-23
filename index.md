# Mapa de Nichos — Prospecção Clínicas Petrópolis/RJ

> Fonte: `raw/clinicas_petropolis_completo.csv` (80 clínicas, lidas em 2026-07-08).
> Decisões travadas vigentes: Raio-X **PAGO R$ 2.000** (nunca dizer "gratuito") · Blindagem R$ 7.000 (piloto 3 vagas R$ 4.900) · Inteligência Comercial R$ 2.500 · teto MEI R$ 81k em 2026 (R$ 110k em 2027, LC 238/2026) · **split payment só em testes técnicos em 2026 — não antecipar regra sem norma (revisão 23/11/2026)** — gancho é a DECISÃO de regime, com a próxima janela prevista para 1º a 31/03/2027.
> As mensagens prontas do CSV (coluna `mensagem_prospeccao`) estão **PROIBIDAS**: gancho derrubado pela S1.2 + mail-merge que denuncia automação.

## Distribuição geral (80 clínicas)

| Nicho | Qtde | Urgência predominante | Ângulo | Telefones | Página |
|---|---|---|---|---|---|
| Estética avançada (pura + micropigmentação) | 24 | ALTO (21A/3M) | G1 | 9 | [nichos/estetica-avancada.md](nichos/estetica-avancada.md) |
| Dermatologia (médicas) | 13 | BAIXO | G2 (produto: Intel. Comercial) | 1 | [nichos/dermatologia.md](nichos/dermatologia.md) |
| Harmonização facial | 6 | MÉDIO (5M/1A) | G2 | 1 | [nichos/harmonizacao-facial.md](nichos/harmonizacao-facial.md) |
| Massoterapia e terapias corporais | 6 | ALTO | G2 | 2 | [nichos/massoterapia.md](nichos/massoterapia.md) |
| Depilação / laser | 5 | ALTO | G1 | 0 | [nichos/depilacao.md](nichos/depilacao.md) |
| **Subtotal nichos piloto** | **54** | — | — | **13** | — |
| Cirurgia plástica / maxilofacial (fora do piloto) | 10 | MÉDIO | G2 | 8 | — |
| Híbridas fisio/bem-estar (fora do piloto) | 9 | MÉDIO | G2 | 1 | — |
| Clínicas médicas / emagrecimento (fora do piloto) | 5 | MÉDIO/BAIXO | G2 | 4 | — |
| Outros (nutricionista, "sala de espera VIP") | 2 | BAIXO/incerto | — | 0 | — |
| **Total** | **80** | — | — | **26** | — |

## Distribuição de urgência (CSV, 80 clínicas)

| Urgência | Qtde |
|---|---|
| ALTO | 33 |
| MÉDIO | 32 |
| BAIXO | 14 |
| Nicho incerto | 1 |

## Ângulos de abordagem (definição)

- **G1 — Decisão de regime:** estética pura. "Continuar no Simples como está × migrar para o regime regular de IBS/CBS — a escolha errada custa margem ou cliente PJ. Próxima janela prevista: 1º a 31/03/2027."
- **G2 — Enquadramento 60%:** fronteira saúde×estética. "A redução de 60% vale só para serviços de saúde do Anexo III da LC 214/2025; o que está fora da lista não recebe o benefício automaticamente — o enquadramento define a margem."

## Regras transversais (herdadas do briefing batch 1)

1. Primeira mensagem: máx. 4 linhas, 1 pergunta fácil no fim, sem link/PDF/áudio/oferta.
2. Nunca dizer "gratuito"; nunca afirmar regra de split payment sem norma específica; nunca falar mal de contador.
3. **Franquias fora do funil direto** (decisão não é da unidade): Espaçolaser, Pello Menos, Maislaser, Emagrecentro.
4. 10 clínicas já estão no **batch 1** (ver briefing) — marcadas nas páginas de nicho para evitar contato duplicado.
5. Só 26 de 80 têm telefone — enriquecimento de contato (Instagram/site) é a tarefa nº 1 antes de qualquer batch novo.

## Backlog (nichos ainda sem página — criar após validação do piloto)

- `cirurgia-plastica.md` (10 clínicas, 8 telefones — melhor cobertura de contato da lista, produto Intel. Comercial)
- `hibridas-fisio-bem-estar.md` (9 clínicas, G2 forte)
- `clinicas-medicas.md` (5 clínicas)
