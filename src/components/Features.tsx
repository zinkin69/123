import { motion } from "motion/react";
import { Tv, ShoppingBag, Plane, TrendingUp } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "100% Cashback em Assinaturas",
      description: "Reembolso total em Netflix, Spotify, Amazon Prime e ChatGPT.",
      icon: <Tv className="w-8 h-8 text-bybit-yellow" />,
      colSpan: "md:col-span-2",
      bg: "bg-gradient-to-br from-white/5 to-white/0",
    },
    {
      title: "Descontos no Delivery",
      description: "Aproveite 30% de desconto em pedidos no Rappi.",
      icon: <ShoppingBag className="w-8 h-8 text-electric-blue" />,
      colSpan: "md:col-span-1",
      bg: "bg-gradient-to-br from-electric-blue/10 to-transparent",
    },
    {
      title: "Viagens VIP",
      description: "Acesso exclusivo aos Plaza Premium Lounges no mundo todo.",
      icon: <Plane className="w-8 h-8 text-neon-green" />,
      colSpan: "md:col-span-1",
      bg: "bg-gradient-to-br from-neon-green/10 to-transparent",
    },
    {
      title: "Renda Passiva",
      description: "Até 8% APR sobre saldo parado com Auto-Earn.",
      icon: <TrendingUp className="w-8 h-8 text-bybit-yellow" />,
      colSpan: "md:col-span-2",
      bg: "bg-gradient-to-br from-bybit-yellow/10 to-transparent",
    },
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Muito além do <span className="text-bybit-yellow">Trading</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            O Bybit Card foi desenhado para o seu estilo de vida. Ganhe enquanto gasta e aproveite benefícios exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border border-white/10 backdrop-blur-sm ${feature.bg} ${feature.colSpan} hover:border-white/20 transition-colors group relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-bg-dark/50 rounded-2xl w-fit border border-white/5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
