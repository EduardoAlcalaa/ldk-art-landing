import CollectionCard from './CollectionCard.jsx';

// Shared product grid for the Home highlights and the full catalog.
export default function ProductGrid({ products, className = '' }) {
  return (
    <ul
      className={`mx-auto grid max-w-[420px] gap-6 sm:max-w-none sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6 ${className}`}
    >
      {products.map((p) => (
        <li key={p.id}>
          <CollectionCard {...p} />
        </li>
      ))}
    </ul>
  );
}
