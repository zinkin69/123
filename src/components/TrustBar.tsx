import { motion } from "motion/react";

export function TrustBar() {
  const logos = [
    "Mastercard",
    "Pix",
    "Apple Pay",
    "Google Pay",
    "Tomorrowland",
    "Mastercard",
    "Pix",
    "Apple Pay",
    "Google Pay",
    "Tomorrowland",
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-sm font-semibold text-white/40 uppercase tracking-widest">
          Aceito em milhões de estabelecimentos
        </p>
      </div>
      
      <div className="flex overflow-hidden relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-dark to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 items-center whitespace-nowrap px-8"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-2xl md:text-3xl font-black text-white/20 uppercase tracking-tighter"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
