import statsData from './data.json'
import { useRef, useEffect, useState } from 'react';

function useInViewOnce(ref) {
  const [hasIntersected, setHasIntersected] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, hasIntersected]);
  return hasIntersected;
}

function AnimatedCount({ end, trigger }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let endNum = parseInt(end.replace(/\D/g, ''));
    let duration = 1200;
    let startTime = null;
    function animateCount(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * endNum));
      if (progress < 1) requestAnimationFrame(animateCount);
      else setCount(endNum);
    }
    requestAnimationFrame(animateCount);
  }, [trigger, end]);
  let display = end.includes('%') ? `${count}%` : end.includes('+') ? `${count}+` : end.includes('/') ? end : count;
  return <span>{display}</span>;
}

const StatsSection = () => {
  const stats = statsData.stats;
  const sectionRef = useRef();
  const inViewOnce = useInViewOnce(sectionRef);
  return (
    <section ref={sectionRef} className="bg-yellow-50 py-5 md:py-7 lg:py-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-[#FF8C00] mb-2 md:mb-3">
                <AnimatedCount end={stat.number} trigger={inViewOnce} />
              </div>
              <div className="text-gray-800 text-sm md:text-base lg:text-sm xl:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;