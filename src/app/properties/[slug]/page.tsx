import { properties } from '@/data/properties';
import PropertyDetail from './PropertyDetail';

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug) ?? null;
  return <PropertyDetail property={property} allProperties={properties} />;
}
