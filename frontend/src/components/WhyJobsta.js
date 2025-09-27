import React from 'react';
import { CheckCircle, Smartphone } from 'react-feather';

function WhyJobsta() {
  return (
    <section 
        id="why-jobsta"
        className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Why Use Jobsta
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="text-center space-y-4">
            <CheckCircle className="h-12 w-12 text-[#25D366] mx-auto" />
            <h3 className="text-xl font-semibold">100% free to use</h3>
          </div>

          {/* Item 2 */}
          <div className="text-center space-y-4">
            <Smartphone className="h-12 w-12 text-[#25D366] mx-auto" />
            <h3 className="text-xl font-semibold">No app install | works via WhatsApp</h3>
          </div>

          {/* Item 3 */}
          <div className="text-center space-y-4">
            <span className="text-5xl block">🇿🇦</span>
            <h3 className="text-xl font-semibold">Built for SA youth</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyJobsta;