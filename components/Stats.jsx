"use client";

import CountUp from "react-countup";
import { stats } from "@/lib/data";

const Stats = () => {
  return (
    <section className="py-6 xl:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-6 flex flex-col items-center xl:items-start gap-1"
            >
              <div className="flex items-end gap-1">
                <CountUp
                  end={item.num}
                  duration={4}
                  delay={2}
                  className="text-3xl xl:text-4xl font-extrabold text-white"
                />
                <span className="text-accent text-2xl font-bold leading-none mb-0.5">+</span>
              </div>
              <p className="text-sm text-white/60 leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

