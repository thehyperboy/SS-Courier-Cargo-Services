import { useEffect, useState } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

const stats: Stat[] = [
  {
    label: 'Successful Transportations',
    value: 50000,
    suffix: '+',
  },
  {
    label: 'Air Freight Transportations',
    value: 256,
  },
  {
    label: 'Years of Operation',
    value: 25,
    suffix: '+',
  },
  {
    label: 'Train Freight Transportations',
    value: 125,
  },
];

function AnimatedCounter({ value, duration = 1500 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const totalFrames = Math.round(duration / 16);
    const increment = value / totalFrames;

    const id = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(id);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(id);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

/**
 * StatsStrip – full-width dark bar displaying animated business stats.
 * Keep all textual content unchanged, purely visual enhancement.
 */
export default function StatsStrip() {
  return (
    <section className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center animate-slide-up">
            <div className="text-3xl md:text-4xl font-bold mb-2">
              <AnimatedCounter value={stat.value} /> {stat.suffix ?? ''}
            </div>
            <p className="text-sm md:text-base opacity-90 whitespace-pre-line leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
