const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'brands');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const brands = [
  {
    name: 'vertex.svg',
    svg: `<svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 10L22 38L36 10H28L22 26L16 10H8Z" fill="currentColor"/>
  <path d="M22 18L30 38H38L26 10H18L22 18Z" fill="currentColor" opacity="0.6"/>
  <text x="48" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="18" font-weight="800" letter-spacing="3" fill="currentColor">VERTEX</text>
  <text x="142" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="9" font-weight="700" letter-spacing="2" fill="currentColor" opacity="0.5">LABS</text>
</svg>`
  },
  {
    name: 'aura.svg',
    svg: `<svg viewBox="0 0 190 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="24" r="10" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="24" cy="24" r="10" stroke="currentColor" stroke-width="2.5" opacity="0.7" stroke-dasharray="2 2"/>
  <circle cx="19" cy="24" r="3.5" fill="currentColor"/>
  <text x="46" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="18" font-weight="800" letter-spacing="4" fill="currentColor">AURA</text>
  <text x="122" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="9" font-weight="600" letter-spacing="1.5" fill="currentColor" opacity="0.5">SOUND</text>
</svg>`
  },
  {
    name: 'kroma.svg',
    svg: `<svg viewBox="0 0 190 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,6 34,18 34,34 20,42 6,34 6,18" stroke="currentColor" stroke-width="2.5" fill="none"/>
  <polygon points="20,13 29,20 29,30 20,35 11,30 11,20" fill="currentColor" opacity="0.4"/>
  <text x="46" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="18" font-weight="800" letter-spacing="4" fill="currentColor">KROMA</text>
</svg>`
  },
  {
    name: 'nexus.svg',
    svg: `<svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="10" width="26" height="26" rx="4" stroke="currentColor" stroke-width="2"/>
  <circle cx="13" cy="17" r="3" fill="currentColor"/>
  <circle cx="25" cy="17" r="3" fill="currentColor" opacity="0.5"/>
  <circle cx="13" cy="29" r="3" fill="currentColor" opacity="0.5"/>
  <circle cx="25" cy="29" r="3" fill="currentColor"/>
  <line x1="13" y1="17" x2="25" y2="29" stroke="currentColor" stroke-width="1.5"/>
  <text x="44" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="17" font-weight="800" letter-spacing="3" fill="currentColor">NEXUS</text>
  <text x="122" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="9" font-weight="600" letter-spacing="2" fill="currentColor" opacity="0.5">ROBOTICS</text>
</svg>`
  },
  {
    name: 'valence.svg',
    svg: `<svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="16" r="6" stroke="currentColor" stroke-width="2"/>
  <circle cx="26" cy="28" r="6" stroke="currentColor" stroke-width="2"/>
  <path d="M18 19L22 25" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="14" cy="16" r="2" fill="currentColor"/>
  <circle cx="26" cy="28" r="2" fill="currentColor"/>
  <text x="44" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="18" font-weight="800" letter-spacing="3" fill="currentColor">VALENCE</text>
  <text x="148" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="9" font-weight="700" letter-spacing="1" fill="currentColor" opacity="0.5">BIO</text>
</svg>`
  },
  {
    name: 'lumen.svg',
    svg: `<svg viewBox="0 0 190 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="24" r="12" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="20" cy="24" r="5" fill="currentColor"/>
  <line x1="20" y1="6" x2="20" y2="10" stroke="currentColor" stroke-width="2"/>
  <line x1="20" y1="38" x2="20" y2="42" stroke="currentColor" stroke-width="2"/>
  <line x1="2" y1="24" x2="6" y2="24" stroke="currentColor" stroke-width="2"/>
  <line x1="34" y1="24" x2="38" y2="24" stroke="currentColor" stroke-width="2"/>
  <text x="48" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="18" font-weight="800" letter-spacing="4" fill="currentColor">LUMEN</text>
  <text x="132" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="9" font-weight="600" letter-spacing="2" fill="currentColor" opacity="0.5">ARCH</text>
</svg>`
  },
  {
    name: 'hyperion.svg',
    svg: `<svg viewBox="0 0 210 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 34L20 10L34 34H26L20 20L14 34H6Z" fill="currentColor"/>
  <polygon points="12,28 20,14 28,28" fill="currentColor" opacity="0.35"/>
  <line x1="10" y1="38" x2="30" y2="38" stroke="currentColor" stroke-width="2"/>
  <text x="44" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="16" font-weight="800" letter-spacing="2.5" fill="currentColor">HYPERION</text>
</svg>`
  },
  {
    name: 'synapse.svg',
    svg: `<svg viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="24" r="4" fill="currentColor"/>
  <circle cx="24" cy="13" r="3.5" fill="currentColor" opacity="0.7"/>
  <circle cx="24" cy="35" r="3.5" fill="currentColor" opacity="0.7"/>
  <circle cx="34" cy="24" r="4.5" fill="currentColor"/>
  <line x1="10" y1="24" x2="24" y2="13" stroke="currentColor" stroke-width="1.5"/>
  <line x1="10" y1="24" x2="24" y2="35" stroke="currentColor" stroke-width="1.5"/>
  <line x1="24" y1="13" x2="34" y2="24" stroke="currentColor" stroke-width="1.5"/>
  <line x1="24" y1="35" x2="34" y2="24" stroke="currentColor" stroke-width="1.5"/>
  <text x="48" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="17" font-weight="800" letter-spacing="3" fill="currentColor">SYNAPSE</text>
  <text x="150" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="9" font-weight="700" letter-spacing="2" fill="currentColor" opacity="0.5">AI</text>
</svg>`
  },
  {
    name: 'vela.svg',
    svg: `<svg viewBox="0 0 190 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 34C16 34 26 24 34 10C24 16 14 26 6 34Z" fill="currentColor"/>
  <path d="M14 36C22 36 30 28 36 18" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
  <text x="46" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="18" font-weight="800" letter-spacing="5" fill="currentColor">VELA</text>
  <text x="116" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="9" font-weight="600" letter-spacing="2" fill="currentColor" opacity="0.5">STUDIO</text>
</svg>`
  },
  {
    name: 'orbital.svg',
    svg: `<svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(-25 20 24)">
    <ellipse cx="20" cy="24" rx="14" ry="7" stroke="currentColor" stroke-width="2"/>
  </g>
  <circle cx="20" cy="24" r="4.5" fill="currentColor"/>
  <circle cx="31" cy="17" r="2.5" fill="currentColor"/>
  <text x="44" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="17" font-weight="800" letter-spacing="3" fill="currentColor">ORBITAL</text>
</svg>`
  },
  {
    name: 'monolith.svg',
    svg: `<svg viewBox="0 0 210 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="10" width="6" height="28" fill="currentColor"/>
  <rect x="18" y="16" width="6" height="22" fill="currentColor" opacity="0.7"/>
  <rect x="28" y="8" width="6" height="30" fill="currentColor" opacity="0.4"/>
  <text x="44" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="17" font-weight="800" letter-spacing="3.5" fill="currentColor">MONOLITH</text>
</svg>`
  },
  {
    name: 'solaris.svg',
    svg: `<svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="24" r="8" fill="currentColor"/>
  <path d="M20 8V12M20 36V40M4 24H8M32 24H36M9 13L12 16M28 32L31 35M9 35L12 32M28 16L31 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <text x="46" y="30" font-family="Space Grotesk, Inter, sans-serif" font-size="17" font-weight="800" letter-spacing="3.5" fill="currentColor">SOLARIS</text>
</svg>`
  }
];

for (const b of brands) {
  fs.writeFileSync(path.join(dir, b.name), b.svg.trim());
  console.log('Wrote ' + b.name);
}
console.log('All 12 brand SVGs generated successfully!');