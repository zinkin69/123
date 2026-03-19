export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/50 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center font-bold text-white/60">
            18+
          </div>
          <div className="text-left">
            <p className="text-xs text-white/40 font-semibold uppercase tracking-widest">
              Para maiores de 18 anos
            </p>
          </div>
        </div>

        <div className="max-w-3xl border border-white/10 rounded-xl p-6 bg-white/5">
          <p className="text-xs text-white/50 leading-relaxed">
            <strong className="text-white/70">Aviso de Risco:</strong> Criptoativos são altamente voláteis. Não há garantia de lucro ou sucesso financeiro. Invista com responsabilidade. O desempenho passado não é indicativo de resultados futuros. A Bybit não fornece aconselhamento financeiro ou de investimento.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white/40">
          <a href="#" className="hover:text-bybit-yellow transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-bybit-yellow transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-bybit-yellow transition-colors">Regras do Programa de Afiliados</a>
          <a href="#" className="hover:text-bybit-yellow transition-colors">Suporte</a>
        </div>
        
        <div className="text-xs text-white/30 mt-4">
          &copy; {new Date().getFullYear()} Bybit. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
