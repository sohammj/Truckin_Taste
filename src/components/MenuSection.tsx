import { SectionHeader } from './SectionHeader';
import { MenuCard } from './MenuCard';
import { Button } from './Button';
import { Divider } from './Divider';
import { ChevronRight } from 'lucide-react';

const menuItems = [
  {
    name: 'Fusion Tacos',
    description: 'Mexican shells meet Indian spices in perfect harmony',
    price: '₹120',
    image: 'https://images.unsplash.com/photo-1707603571504-86c1ea50903e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc2NTM0Njc0M3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Desi Burger',
    description: 'Gourmet burger with a spicy Indian twist',
    price: '₹150',
    image: 'https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NjUzMDI2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Masala Pasta',
    description: 'Italian pasta tossed in aromatic Indian masala',
    price: '₹130',
    image: 'https://images.unsplash.com/photo-1749169337822-d875fd6f4c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc2NTM4MjUxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Tandoori Pizza',
    description: 'Wood-fired pizza with tandoori chicken topping',
    price: '₹180',
    image: 'https://images.unsplash.com/photo-1667422542005-eb6909ac24c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlJTIwZm9vZHxlbnwxfHx8fDE3NjUzNTE0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Samosa Chaat',
    description: 'Classic Indian samosas with tangy toppings',
    price: '₹80',
    image: 'https://images.unsplash.com/photo-1697155836252-d7f969108b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW1vc2ElMjBzbmFja3xlbnwxfHx8fDE3NjUzMjg0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Loaded Fries',
    description: 'Crispy fries topped with cheese and special sauce',
    price: '₹100',
    image: 'https://images.unsplash.com/photo-1682613886162-49f5e074c092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmcmllcyUyMGZvb2R8ZW58MXx8fHwxNzY1MzI2MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Asian Noodle Bowl',
    description: 'Stir-fried noodles with fresh veggies and spices',
    price: '₹140',
    image: 'https://images.unsplash.com/photo-1652937916838-09b9c2ff8b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG5vb2RsZXMlMjBib3dsfGVufDF8fHx8MTc2NTMyODU0N3ww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Festival Special',
    description: 'Chef&apos;s surprise creation for Epicuria&apos;25',
    price: '₹160',
    image: 'https://images.unsplash.com/photo-1728364283053-b1e2abe71611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHJlZXQlMjBmb29kJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzY1Mzg5NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-[#fdf8f3] to-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="What We're Serving" 
          subtitle="A delicious blend of cultures on every plate"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            See Full Menu
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <Divider />
      </div>
    </section>
  );
}
