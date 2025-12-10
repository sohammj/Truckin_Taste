import { SectionHeader } from './SectionHeader';
import { GalleryCard } from './GalleryCard';
import { Divider } from './Divider';

const galleryImages = [
  {
    image: 'https://images.unsplash.com/photo-1763219805214-91fa634e6006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJlcGFyYXRpb24lMjBraXRjaGVufGVufDF8fHx8MTc2NTM4MzUzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Crafting magic in the kitchen'
  },
  {
    image: 'https://images.unsplash.com/photo-1760822401824-4b06fa74e3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMGZvb2QlMjBzdGFsbHxlbnwxfHx8fDE3NjUzODk3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Festival vibes'
  },
  {
    image: 'https://images.unsplash.com/photo-1607541266707-d87fc7ec23c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHN0cmluZyUyMGxpZ2h0c3xlbnwxfHx8fDE3NjUzODk3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Lighting up the night'
  },
  {
    image: 'https://images.unsplash.com/photo-1728364283053-b1e2abe71611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHJlZXQlMjBmb29kJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzY1Mzg5NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Street food festival energy'
  },
  {
    image: 'https://images.unsplash.com/photo-1697898109582-40f15c65f174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNoZWYlMjBjb29raW5nfGVufDF8fHx8MTc2NTM4OTcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Passion in every dish'
  },
  {
    image: 'https://images.unsplash.com/photo-1706381068085-29fe6c2afe51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc3RhZmYlMjBzbWlsaW5nfGVufDF8fHx8MTc2NTM4OTcyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Smiles & service'
  }
];

export function GallerySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fdf8f3] to-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Behind the Scenes" 
          subtitle="Moments captured from our journey"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryImages.map((item, index) => (
            <GalleryCard
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>

        <Divider />
      </div>
    </section>
  );
}
