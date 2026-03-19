import { motion } from "motion/react";
import { Music, Ticket } from "lucide-react";

export function Tomorrowland() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-purple-900/40 via-bg-dark to-electric-blue/20 border border-white/10 p-12 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center gap-12"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/festival/1920/1080')] opacity-10 mix-blend-overlay bg-cover bg-center" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <Music className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-bold tracking-wider uppercase text-white/90">
                Tomorrowland Brasil 2027
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              A batida perfeita para o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-purple-400">dinheiro</span>.
            </h2>
            
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
              A Bybit é a parceira oficial de pagamentos do Tomorrowland Brasil. Garanta acesso antecipado ao pré-registro (início em 30 de abril de 2026) e ganhe até <strong className="text-white">20% de cashback</strong> nos ingressos.
            </p>
            
            <a 
              href="https://partner.bybit.com/b/aff7156321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-bg-dark font-bold text-lg py-4 px-8 rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <Ticket className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Garantir Vantagem VIP</span>
              <div className="absolute inset-0 bg-electric-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>
          
          {/* Visual Element */}
          <div className="relative w-full md:w-1/3 aspect-square max-w-[300px] flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-white/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-electric-blue/30"
            />
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-electric-blue to-purple-500 blur-xl opacity-50 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-black italic text-white/90 drop-shadow-2xl">
              TML
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
