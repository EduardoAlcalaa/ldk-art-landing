import Container from './Container.jsx';
import CollectionCard from './CollectionCard.jsx';
import { PRODUCTS } from '../data/content.js';

export default function FeaturedCollections() {
  return (
    <section id="produtos" aria-labelledby="products-title" className="pt-14 lg:pt-12">
      <Container>
        <h2 id="products-title" className="text-[26px] font-medium tracking-[-0.02em] text-ink lg:text-[28px]">
          Produtos em Destaque
        </h2>
        <ul className="mx-auto mt-6 grid max-w-[420px] gap-6 sm:max-w-none sm:grid-cols-2 sm:gap-4 lg:mt-7 lg:grid-cols-4 lg:gap-6">
          {PRODUCTS.map((p) => (
            <li key={p.title}>
              <CollectionCard {...p} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
