interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-script text-5xl md:text-6xl text-[#ff8c42] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#717182] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
