/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionOrbs } from "./components/MotionOrbs";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Features } from "./components/Features";
import { Tomorrowland } from "./components/Tomorrowland";
import { Onboarding } from "./components/Onboarding";
import { AffiliateBenefits } from "./components/AffiliateBenefits";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark text-white font-sans selection:bg-bybit-yellow selection:text-bg-dark">
      <MotionOrbs />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <TrustBar />
        <Features />
        <Tomorrowland />
        <Onboarding />
        <AffiliateBenefits />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
