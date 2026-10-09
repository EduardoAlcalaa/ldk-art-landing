import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import Container from './Container.jsx';
import ProductGrid from './ProductGrid.jsx';
import { getFeaturedProducts } from '../data/products.js';

const FEATURED = getFeaturedProducts();

export default function FeaturedCollections() {
  return (
    <section id="produtos" aria-labelledby="products-title" className="pt-14 lg:pt-12">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <h2 id="products-title" className="text-[26px] font-medium tracking-[-0.02em] text-ink lg:text-[28px]">
            Mais Procurados
          </h2>
          <Link
            to="/produtos"
            className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand transition-colors hover:text-brand-hover"
          >
            Ver todos os produtos
            <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <ProductGrid products={FEATURED} className="mt-6 lg:mt-7" />
      </Container>
    </section>
  );
}
