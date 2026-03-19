import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "É realmente grátis? Tem alguma taxa escondida ou anuidade?",
      answer: "Sim, é 100% gratuito. Zero anuidade e zero taxa de manutenção para o cartão virtual. A Bybit lucra com as taxas cobradas dos lojistas pela rede Mastercard, e não tirando dinheiro de você."
    },
    {
      question: "Como eu coloco dinheiro no cartão? É demorado?",
      answer: "É instantâneo via PIX. Você faz um PIX do seu banco tradicional direto para a sua conta Bybit (sem taxas), e o saldo já fica disponível para passar o cartão na mesma hora."
    },
    {
      question: "Eu preciso comprar ou entender de criptomoedas para usar o cartão?",
      answer: "Não! Você não precisa ser um trader. Você pode manter seu saldo em Reais (BRL) ou em Dólar Digital (USDC) para proteger seu dinheiro da inflação, e o cartão faz a conversão automática na hora de pagar o pão na padaria."
    },
    {
      question: "Onde eu posso usar esse cartão no dia a dia?",
      answer: "Em qualquer lugar do mundo que aceite a bandeira Mastercard. Supermercados, iFood, Uber, assinaturas de streaming (com cashback) e até no exterior. Você já pode adicionar o cartão virtual ao seu Apple Pay ou Google Pay hoje mesmo."
    },
    {
      question: "Como eu ganho o bônus de boas-vindas?",
      answer: "Basta solicitar o seu cartão através do botão oficial abaixo, fazer o seu primeiro depósito via PIX e o bônus será creditado na sua conta para você usar como quiser. A promoção é válida apenas para novos usuários cadastrados por este link."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative z-10 bg-bg-dark border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Perguntas <span className="text-bybit-yellow">Frequentes</span> (FAQ)
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] transition-colors hover:bg-white/[0.04]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-bybit-yellow" : "text-white/40"}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5 mt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://partner.bybit.com/b/aff7156321" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-bybit-yellow text-bg-dark font-bold text-lg py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(247,166,0,0.4)]"
          >
            Solicitar Meu Cartão Agora
          </a>
        </div>
      </div>
    </section>
  );
}
