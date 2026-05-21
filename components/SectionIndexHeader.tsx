interface SectionIndexHeaderProps {
  title: string;
  description: string;
}

export default function SectionIndexHeader({ title, description }: SectionIndexHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white rounded-xl p-6 lg:p-8 mb-8">
      <h1 className="text-2xl lg:text-3xl font-bold mb-3">{title}</h1>
      <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-3xl">{description}</p>
    </div>
  );
}
