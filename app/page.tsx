export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          A/B Testing for Newsletters
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing Which Subject Line{' '}
          <span className="text-[#58a6ff]">Actually Works</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          SubjectSplit connects to your email platform, automatically splits your audience, tests subject line variants, and surfaces the winner — all before your next send.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Works with Mailchimp, ConvertKit, Beehiiv &amp; more. Cancel anytime.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6">
          <div>
            <p className="text-2xl font-bold text-white">+34%</p>
            <p className="text-sm text-[#8b949e] mt-1">avg open rate lift</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">2 min</p>
            <p className="text-sm text-[#8b949e] mt-1">setup time</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Real-time</p>
            <p className="text-sm text-[#8b949e] mt-1">winner detection</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 text-center bg-[#161b22]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited A/B tests',
              'Connect up to 3 email platforms',
              'Real-time open rate dashboard',
              'Automatic winner selection',
              'Webhook-based integration',
              'Email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which email platforms are supported?</h3>
            <p className="text-[#8b949e] text-sm">SubjectSplit integrates with Mailchimp, ConvertKit, Beehiiv, and ActiveCampaign via their official APIs and webhooks. More platforms are added regularly.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the automatic winner selection work?</h3>
            <p className="text-[#8b949e] text-sm">We monitor open rates in real time. Once a variant reaches statistical significance, SubjectSplit automatically flags the winner and can trigger the winning send to the remainder of your list.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription at any time?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel from your billing portal with one click. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} SubjectSplit. All rights reserved.
      </footer>
    </main>
  )
}
