import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center z-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-bybit-yellow" />
            <span className="text-sm font-medium text-white/80">
              Novos usuários ganham <strong className="text-bybit-yellow">R$150 de bônus</strong> ao gastar 100 USDT em 14 dias
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
            Domine o mercado cripto no <span className="text-transparent bg-clip-text bg-gradient-to-r from-bybit-yellow to-electric-blue">Brasil</span> com o Bybit Card.
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
            Promova o cartão definitivo para o dia a dia. Zero taxas anuais, compatível com Apple Pay e Google Pay.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a 
              href="https://partner.bybit.com/b/aff7156321" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => (window as any).fbq?.('track', 'Lead')}
              className="group relative flex items-center justify-center gap-2 bg-bybit-yellow text-bg-dark font-bold text-lg py-4 px-8 rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(247,166,0,0.4)]"
            >
              <span className="relative z-10">Pegar meu Bônus de R$150</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center perspective-1000"
        >
          {/* Card 3D Effect */}
          <motion.div
            animate={{
              rotateY: [0, 10, -10, 0],
              rotateX: [0, -5, 5, 0],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[320px] h-[200px] md:w-[480px] md:h-[300px] rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/20 shadow-2xl overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Card Texture/Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-bybit-yellow/20 via-transparent to-electric-blue/20 opacity-50" />
            
            {/* Card Chip */}
            <div className="absolute top-8 left-8 w-12 h-10 rounded bg-gradient-to-br from-yellow-200 to-yellow-500 opacity-80" />
            
            {/* Card Logo */}
            <div className="absolute top-8 right-8 text-2xl font-black italic text-white/90">
              BYBIT
            </div>
            
            {/* Card Details */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="flex gap-4">
                <div className="w-12 h-8 rounded bg-white/10 backdrop-blur-sm" />
                <div className="w-12 h-8 rounded bg-white/10 backdrop-blur-sm" />
              </div>
              <div className="text-right">
                <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Mastercard</div>
                <div className="flex gap-1">
                  <div className="w-6 h-6 rounded-full bg-red-500/80 mix-blend-screen" />
                  <div className="w-6 h-6 rounded-full bg-yellow-500/80 mix-blend-screen -ml-3" />
                </div>
              </div>
            </div>
            
            {/* Shine Effect */}
            <motion.div
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "linear",
              }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </motion.div>
          
          {/* Glow behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-bybit-yellow/20 blur-[100px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
