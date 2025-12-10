import { SectionHeader } from './SectionHeader';
import { TeamCard } from './TeamCard';
import { Divider } from './Divider';


const teamMembers = [
  { name: 'Mehek Jagasia', image: '/team/mehek.jpg' },
  { name: 'Raashi Bangera', image: '/team/raashi.jpg' },
  { name: 'Krishna Ladwa', image: '/team/krishna.jpg' },
  { name: 'Evangelina Fernandes', image: '/team/evangelina.jpg' },
  { name: 'Dikshita Kanchan', image: '/team/dikshita.jpg' },
  { name: 'Srushti Mhatre', image: '/team/srushti.jpg' },
  { name: 'Jash Parmar', image: '/team/jash.jpg' }
];


export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#fdf8f3] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#ff8c42]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#2d9cca]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Meet the Team" 
          subtitle="The passionate crew behind Truckin' Taste"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              {...member}
              index={index}
            />
          ))}
        </div>

        <Divider />
      </div>
    </section>
  );
}
