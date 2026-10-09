import { useDeferredValue, useMemo, useState } from 'react';
import { ChevronDown, MessageCircle, Search, SearchX, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';
import Container from '../components/Container.jsx';
import CTAButton from '../components/CTAButton.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import { CATEGORIES, PRICE_RANGES, PRODUCTS } from '../data/products.js';
import { CUSTOM_PROJECT_MESSAGE } from '../data/projects.js';
import { BRAND, whatsappLink } from '../data/content.js';

// Products rendered per step; "Carregar mais" reveals the next batch instead of rendering the whole catalog.
const PAGE_SIZE = 8;

const SORTS = [
  { id: 'relevancia', label: 'Relevância' },
  { id: 'menor-preco', label: 'Menor preço' },
  { id: 'maior-preco', label: 'Maior preço' },
  { id: 'a-z', label: 'Nome: A a Z' },
  { id: 'z-a', label: 'Nome: Z a A' },
];

const collator = new Intl.Collator('pt-BR', { sensitivity: 'base' });
const SORTERS = {
  'menor-preco': (a, b) => a.price - b.price,
  'maior-preco': (a, b) => b.price - a.price,
  'a-z': (a, b) => collator.compare(a.title, b.title),
  'z-a': (a, b) => collator.compare(b.title, a.title),
};

// Case- and accent-insensitive, so "robo" finds "Robô".
const normalize = (text) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();

const COUNT_BY_CATEGORY = PRODUCTS.reduce((acc, p) => ({ ...acc, [p.category]: (acc[p.category] ?? 0) + 1 }), {});

const FIELD =
  'h-12 w-full rounded-full border border-ink/10 bg-card text-[15px] text-ink transition-colors hover:border-ink/25 focus:border-ink/40 focus:outline-none focus-visible:outline-2';
const OUTLINE_BUTTON =
  'inline-flex h-12 cursor-pointer items-center justify-center rounded-full border border-ink/15 bg-white px-7 text-[14px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white';

function Select({ id, label, value, onChange, options }) {
  return (
    <div className="relative w-full sm:w-auto">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${FIELD} cursor-pointer appearance-none pl-5 pr-11 sm:min-w-[190px]`}
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={18}
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-body"
      />
    </div>
  );
}

export default function ProductsPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const category = CATEGORIES.some((c) => c.id === params.get('categoria')) ? params.get('categoria') : '';
  const priceRange = PRICE_RANGES.find((r) => r.id === params.get('preco'));
  const sort = SORTERS[params.get('ordem')] ? params.get('ordem') : 'relevancia';
  const deferredQuery = useDeferredValue(query);

  // Filters live in the URL so results can be shared, bookmarked and restored with the back button.
  const setParam = (key, value, { replace = false } = {}) =>
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value) next.set(key, value);
        else next.delete(key);
        return next;
      },
      { replace, preventScrollReset: true },
    );

  const results = useMemo(() => {
    const q = normalize(deferredQuery);
    const filtered = PRODUCTS.filter(
      (p) =>
        (!category || p.category === category) &&
        (!priceRange || (p.price >= priceRange.min && p.price < priceRange.max)) &&
        (!q || normalize(p.title).includes(q)),
    );
    return SORTERS[sort] ? [...filtered].sort(SORTERS[sort]) : filtered;
  }, [deferredQuery, category, priceRange, sort]);

  // Start over at the first batch whenever the filters change.
  const filterKey = `${deferredQuery}|${category}|${priceRange?.id}|${sort}`;
  const [pagination, setPagination] = useState({ key: filterKey, visible: PAGE_SIZE });
  const visible = pagination.key === filterKey ? pagination.visible : PAGE_SIZE;
  const shown = results.slice(0, visible);

  const hasFilters = Boolean(query || category || priceRange);
  const clearFilters = () => setParams({}, { preventScrollReset: true });

  return (
    <>
      <title>{`Produtos — ${BRAND.name}`}</title>

      <section aria-labelledby="catalog-title" className="pb-16 pt-10 lg:pb-24 lg:pt-12">
        <Container>
          <nav aria-label="Trilha de navegação" className="text-[14px] text-body">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="transition-opacity hover:opacity-60">
                  Início
                </Link>
              </li>
              <li aria-hidden="true" className="text-ink/30">
                /
              </li>
              <li aria-current="page" className="font-medium text-ink">
                Produtos
              </li>
            </ol>
          </nav>

          <h1
            id="catalog-title"
            className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-[40px]"
          >
            Todos os produtos
          </h1>
          <p className="mt-3 max-w-[560px] text-[16px] leading-relaxed text-body">
            Explore nosso catálogo de peças impressas em 3D. Encontrou algo que gostou? Encomende direto pelo WhatsApp.
          </p>

          {/* Toolbar */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-nowrap">
            <div className="relative sm:min-w-[260px] sm:flex-1">
              <label htmlFor="catalog-search" className="sr-only">
                Pesquisar produtos pelo nome
              </label>
              <Search
                size={18}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-body"
              />
              <input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(e) => setParam('q', e.target.value, { replace: true })}
                placeholder="Pesquisar produtos..."
                autoComplete="off"
                className={`${FIELD} pl-11 pr-11 placeholder:text-placeholder [&::-webkit-search-cancel-button]:hidden`}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setParam('q', '')}
                  aria-label="Limpar pesquisa"
                  className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-body hover:bg-ink/5"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              )}
            </div>
            <Select
              id="catalog-price"
              label="Faixa de preço"
              value={priceRange?.id ?? ''}
              onChange={(v) => setParam('preco', v)}
              options={[{ id: '', label: 'Todos os preços' }, ...PRICE_RANGES]}
            />
            <Select
              id="catalog-sort"
              label="Ordenar por"
              value={sort}
              onChange={(v) => setParam('ordem', v === 'relevancia' ? '' : v)}
              options={SORTS}
            />
          </div>

          {/* Categories */}
          <div role="group" aria-label="Categorias" className="mt-4 flex flex-wrap gap-2">
            {[{ id: '', label: 'Todas', count: PRODUCTS.length }, ...CATEGORIES.map((c) => ({ ...c, count: COUNT_BY_CATEGORY[c.id] ?? 0 }))].map(
              (c) => {
                const active = category === c.id;
                return (
                  <button
                    key={c.id || 'todas'}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setParam('categoria', c.id)}
                    className={`inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-full px-4 text-[14px] font-medium transition-colors ${
                      active ? 'bg-ink text-white' : 'bg-card text-ink hover:bg-ink/10'
                    }`}
                  >
                    {c.label}
                    <span className={active ? 'text-white/60' : 'text-placeholder'}>{c.count}</span>
                  </button>
                );
              },
            )}
          </div>

          <div className="mt-8 flex min-h-6 items-center justify-between gap-4 text-[14px] text-body">
            <p aria-live="polite">
              {results.length === 1 ? '1 produto encontrado' : `${results.length} produtos encontrados`}
            </p>
            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="cursor-pointer font-semibold text-brand transition-colors hover:text-brand-hover"
              >
                Limpar filtros
              </button>
            )}
          </div>

          {results.length > 0 ? (
            <>
              <ProductGrid products={shown} className="mt-4" />

              {results.length > PAGE_SIZE && (
                <div className="mt-10 flex flex-col items-center gap-4">
                  <p className="text-[14px] text-body">
                    Mostrando {shown.length} de {results.length} produtos
                  </p>
                  {shown.length < results.length && (
                    <button
                      type="button"
                      onClick={() => setPagination({ key: filterKey, visible: visible + PAGE_SIZE })}
                      className={OUTLINE_BUTTON}
                    >
                      Carregar mais produtos
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="mt-4 flex flex-col items-center rounded-3xl bg-card px-6 py-14 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-white text-ink">
                <SearchX size={26} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-[22px] font-semibold tracking-[-0.02em] text-ink">Nenhum produto encontrado</h2>
              <p className="mt-2 max-w-[440px] text-[15px] leading-relaxed text-body">
                Não encontramos produtos com {query ? <>“{query}”</> : 'esses filtros'}. Tente outro termo ou limpe os
                filtros. Se não achar o que procura, a gente cria sob medida!
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={clearFilters} className={OUTLINE_BUTTON}>
                  Limpar filtros
                </button>
                <CTAButton
                  href={whatsappLink(CUSTOM_PROJECT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  className="h-12 gap-2 px-6"
                >
                  <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
                  Pedir sob medida
                </CTAButton>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
