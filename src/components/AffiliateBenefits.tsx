import { motion } from "motion/react";
import { DollarSign, Repeat, Zap } from "lucide-react";

export function AffiliateBenefits() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Monetize sua <span className="text-bybit-yellow">Audiência</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            O Bybit Card é a máquina de conversão definitiva para parceiros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-bybit-yellow/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <DollarSign className="w-7 h-7 text-bybit-yellow" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Até 50% de Revenue Share Vitalício</h3>
                <p className="text-white/60 leading-relaxed">
                  Ganhe uma porcentagem de todas as taxas de trading geradas pelos seus indicados, para sempre. Sem limites de ganhos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-electric-blue/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-electric-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Pagamentos Diários em USDT</h3>
                <p className="text-white/60 leading-relaxed">
                  Receba suas comissões todos os dias, diretamente na sua conta Bybit, em stablecoin. Liquidez imediata.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-neon-green/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Repeat className="w-7 h-7 text-neon-green" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Retenção Automática</h3>
                <p className="text-white/60 leading-relaxed">
                  O uso diário do cartão cria um hábito. Seus indicados continuam usando a plataforma, maximizando suas comissões a longo prazo.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative rounded-[2rem] bg-gradient-to-br from-bg-dark to-gray-900 border border-white/10 p-8 shadow-2xl overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-bybit-yellow/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-blue/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">
                Simulador de Ganhos
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/60">Indicados Ativos</span>
                    <span className="font-mono font-bold text-xl">1.000</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-bybit-yellow rounded-full" />
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/60">Volume Médio Mensal</span>
                    <span className="font-mono font-bold text-xl">$5.000</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-electric-blue rounded-full" />
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <div className="text-white/60 mb-2">Potencial de Ganhos Mensais</div>
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-bybit-yellow to-electric-blue">
                    $15.000+
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
