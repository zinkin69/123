import { motion } from "motion/react";
import { cn } from "../lib/utils";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/70 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-bybit-yellow flex items-center justify-center font-bold text-bg-dark text-xl">
            B
          </div>
          <span className="text-xl font-bold tracking-tight">Bybit Partners</span>
        </div>
        
        <a 
          href="https://partner.bybit.com/b/aff7156321" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-bybit-yellow hover:bg-bybit-yellow/90 text-bg-dark font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(247,166,0,0.3)] hover:shadow-[0_0_25px_rgba(247,166,0,0.5)] transform hover:-translate-y-0.5"
        >
          Ser um Parceiro
        </a>
      </div>
    </motion.header>
  );
}
