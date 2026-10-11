'use client'

import { useState } from 'react'
import { ArrowDown, ArrowRight, Check, Menu, Plus, ShoppingBag, Snowflake, X } from 'lucide-react'

const products = [
  { name: 'Ledová vichřice', detail: 'Mentol & eukalyptus', price: '89 Kč', image: '/hero-mint-candy.png', tone: 'mint' },
  { name: 'Zmrznutá máta', detail: 'Černý rybíz & mentol', price: '149 Kč', image: '/product-sorbet.png', tone: 'berry' },
  { name: 'Melounový nářez', detail: 'Mentol & šťavnatý meloun', price: '89 Kč', image: '/product-melon.png', tone: 'lime' },
]

export default function Page() {
  const [cart, setCart] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [added, setAdded] = useState<string | null>(null)

  function addToCart(name: string) {
    setCart((count) => count + 1)
    setAdded(name)
    window.setTimeout(() => setAdded(null), 1800)
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="announcement"><Snowflake aria-hidden="true" /> Doprava zdarma od 700 Kč <span>•</span> Vyrobeno v Česku</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mráz domů">MRÁZ<span>.</span></a>
        <nav className="desktop-nav" aria-label="Hlavní navigace">
          <a href="#shop">Shop</a><a href="#why">Proč mráz?</a><a href="#story">Náš příběh</a>
        </nav>
        <div className="header-actions"><a className="find-link" href="#footer">Najdi nás</a><button className="cart-button" onClick={() => setCart((count) => count + 1)} aria-label={`Košík, ${cart} položek`}><ShoppingBag aria-hidden="true" /><span>{cart}</span></button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}>{menuOpen ? <X /> : <Menu />}</button></div>
      </header>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobilní navigace"><a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a><a href="#why" onClick={() => setMenuOpen(false)}>Proč mráz?</a><a href="#story" onClick={() => setMenuOpen(false)}>Náš příběh</a></nav>}

      <section id="top" className="hero">
        <div className="hero-copy"><p className="eyebrow">Ručně vyrobené osvěžení / 01</p><h1>Ledový šok,<br /><em>který tě probudí.</em></h1><p className="hero-description">Sladkosti s extrémní porcí mentolu a svěžesti. Jeden kous a víš, že žiješ.</p><div className="hero-actions"><a href="#shop" className="button button-primary">Chci zažít šok <ArrowRight aria-hidden="true" /></a><a href="#shop" className="text-link">Objev příchutě <ArrowDown aria-hidden="true" /></a></div></div>
        <div className="hero-image"><img src="/hero-mint-candy.png" alt="Ledové mentolové bonbóny s čerstvou mátou" /><div className="hero-stamp">Až<br /><strong>3×</strong><br />intenzivnější</div><p className="image-caption">Ledová vichřice<br /><span>Mentol & Eukalyptus</span></p></div>
      </section>

      <section id="why" className="marquee"><div>NEJDEME NA POLOVIČNÍ VÝKON <span>✳</span> NEJDEME NA POLOVIČNÍ VÝKON <span>✳</span></div></section>
      <section className="why-section"><div className="section-intro"><p className="eyebrow">Proč mráz? / 02</p><h2>Vstup do<br /><em>chladnější zóny.</em></h2></div><div className="benefit-grid"><article><span>01</span><h3>Silná vlna svěžesti</h3><p>Až 3× intenzivnější mentolový náraz než u běžných bonbónů. Nejdřív překvapí, pak nepustí.</p></article><article><span>02</span><h3>Poctivá řemeslná výroba</h3><p>Přírodní esenciální oleje, mentolové krystaly a poctivé ovocné šťávy. Žádná chemická pachuť.</p></article><article><span>03</span><h3>Pročistí všechny cesty</h3><p>Na dálnici, před tréninkem nebo během zkouškového. Když potřebuješ zůstat ve hře.</p></article></div></section>

      <section id="shop" className="shop-section"><div className="shop-heading"><div><p className="eyebrow">Vyber si svůj nářez / 03</p><h2>Naše <em>ledové</em><br />klasiky.</h2></div><a href="#shop" className="text-link">Všechny produkty <ArrowRight aria-hidden="true" /></a></div><div className="product-grid">{products.map((product, index) => <article className={`product-card ${product.tone}`} key={product.name}><div className="product-visual"><img src={product.image} alt={product.name} /><span className="product-number">0{index + 1}</span></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.detail}</p></div><strong>{product.price}</strong></div><button className="add-button" onClick={() => addToCart(product.name)}>{added === product.name ? <><Check aria-hidden="true" /> Přidáno</> : <><Plus aria-hidden="true" /> Přidat do košíku</>}</button></article>)}</div></section>

      <section id="story" className="story-section"><div className="story-image"><img src="/product-melon.png" alt="Barevné mentolové bonbóny na ledu" /></div><div className="story-copy"><p className="eyebrow">Mráz v kostce / 04</p><h2>Není to jen<br /><em>sladkost.</em></h2><p>Vznikli jsme, protože obyčejné už nám nestačilo. Chtěli jsme vyrobit sladkost, která se nedrží zpátky — která tě praští svěžestí a na chvíli zastaví čas.</p><p>Malá česká výroba, velký ledový charakter. Každou várku mícháme ručně a bez zkratek.</p><a className="button button-dark" href="#shop">Poznej náš příběh <ArrowRight aria-hidden="true" /></a></div></section>

      <section className="newsletter"><p className="eyebrow">Ledový klub / 05</p><h2>Buď první, kdo<br /><em>ucítí mráz.</em></h2><p>Nové příchutě, limitované várky a občasný ledový chaos přímo do schránky.</p><form onSubmit={(event) => { event.preventDefault(); alert('Vítej v ledovém klubu.') }}><input type="email" placeholder="tvůj@email.cz" aria-label="E-mail" required /><button type="submit" aria-label="Přihlásit se"><ArrowRight aria-hidden="true" /></button></form></section>
      <footer id="footer"><div className="footer-brand">MRÁZ<span>.</span><small>Sladké. Ledové. Bez kompromisů.</small></div><div className="footer-links"><div><p>Prozkoumat</p><a href="#shop">Shop</a><a href="#why">Proč mráz?</a><a href="#story">Náš příběh</a></div><div><p>Sleduj nás</p><a href="#footer">Instagram</a><a href="#footer">TikTok</a><a href="#footer">Kontakt</a></div></div><div className="footer-bottom"><span>© 2025 Mráz s.r.o.</span><span>Vyrobeno v Česku</span><span>Obchodní podmínky</span></div></footer>
    </main>
  )
}

function _UnusedQuantityControl() { return <div><Minus /><Plus /></div> }

void _UnusedQuantityControl

