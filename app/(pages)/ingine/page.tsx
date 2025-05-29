import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ingine',
  description: 'Lorem Ipsum',
}


export default function InginePage() {
  return (
    <div>
      <h1>Ingine</h1>
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  );
}