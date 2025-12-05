import About from '@/sections/about';

export default function Home() {
  const sections = [About];

  return (
    <div className="flex flex-col items-start justify-center">
      {sections.map((SectionComponent, index) => (
        <div key={index} className="p-desktop py-section w-full">
          <SectionComponent />
        </div>
      ))}
    </div>
  );
}
