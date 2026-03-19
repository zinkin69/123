import { motion } from "motion/react";
import { UserPlus, Wallet, CreditCard } from "lucide-react";

export function Onboarding() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 text-bybit-yellow" />,
      title: "Crie sua conta",
      description: "Abra sua conta Bybit em menos de 2 minutos. Rápido e sem burocracia.",
      step: "01",
    },
    {
      icon: <Wallet className="w-8 h-8 text-neon-green" />,
      title: "Deposite via Pix",
      description: "Deposite BRL instantaneamente via Pix, sem taxas ocultas.",
      step: "02",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-electric-blue" />,
      title: "Comece a ganhar",
      description: "Adicione o cartão à sua carteira digital e ganhe cashback em cada compra.",
      step: "03",
    },
  ];

  return (
    <section className="py-24 px-6 relative z-10 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Fricção zero. <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">Lucro máximo.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Três passos simples separam você do cartão cripto mais poderoso do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-bybit-yellow via-neon-green to-electric-blue opacity-20 -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-bg-dark border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-colors group"
            >
              <div className="absolute -top-6 left-8 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                {step.step}
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
