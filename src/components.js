/**
 * Shared components & utilities for BF Fencing
 */

export const CONTACT = {
  phone: '0410976570',
  phoneDisplay: '0410 976 570',
  email: 'brentonfyffe@gmail.com',
  location: 'South Australia',
}

export const NAV_ITEMS = [
  { href: 'index.html', label: 'Home', id: 'home' },
  { href: 'gallery.html', label: 'Gallery', id: 'gallery' },
  { href: 'about.html', label: 'About Us', id: 'about' },
  { href: 'contact.html', label: 'Contact', id: 'contact' },
]

export function getHeader(currentPageId = '') {
  return `
    <header class="navbar min-h-[80px] md:min-h-[90px] bg-white shadow-lg sticky top-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden p-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-lg dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-60 text-lg">
            ${NAV_ITEMS.map(item => `
              <li><a href="${item.href}" class="${currentPageId === item.id ? 'active font-semibold' : ''} py-3">${item.label}</a></li>
            `).join('')}
          </ul>
        </div>
        <a href="index.html" class="btn btn-ghost px-3 py-2">
          <img src="/images/Logo.png" alt="BF Fencing" class="h-14 md:h-[72px] w-auto" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 gap-1">
          ${NAV_ITEMS.map(item => `
            <li><a href="${item.href}" class="${currentPageId === item.id ? 'active font-semibold' : ''} text-lg px-4 py-2">${item.label}</a></li>
          `).join('')}
        </ul>
      </div>
      <div class="navbar-end">
        <a href="contact.html" class="btn btn-primary btn-lg text-base md:text-lg px-6">Get a Quote</a>
      </div>
    </header>
  `
}

export function getFooter() {
  return `
    <footer class="footer footer-center bg-neutral-100 text-[#0e121d] p-12 md:p-16">
      <aside>
        <a href="index.html" class="block mb-4">
          <img src="/images/Logo.png" alt="BF Fencing" class="h-20 md:h-24 w-auto mx-auto" />
        </a>
        <p class="max-w-xl mx-auto text-center mb-6 text-base md:text-lg">
          At BF Fencing, we deliver strong, stylish, and affordable Colorbond and Colourbond fencing solutions across South Australia.
        </p>
        <div class="flex gap-6 flex-wrap justify-center text-base md:text-lg">
          <a href="tel:${CONTACT.phone}" class="link link-hover font-medium">${CONTACT.phoneDisplay}</a>
          <a href="mailto:${CONTACT.email}" class="link link-hover font-medium">${CONTACT.email}</a>
        </div>
        <p class="mt-2 opacity-80 text-base">${CONTACT.location}</p>
        <p class="mt-4 text-sm opacity-70">© ${new Date().getFullYear()} BF Fencing. All rights reserved.</p>
      </aside>
    </footer>
  `
}

export function initCarousel(containerId, interval = 5000) {
  const container = document.getElementById(containerId)
  if (!container) return

  const slides = container.querySelectorAll('.carousel-slide')
  if (slides.length <= 1) return

  let current = 0
  function showSlide(index) {
    slides.forEach((s, i) => {
      const isVisible = i === index
      s.classList.toggle('opacity-0', !isVisible)
      s.classList.toggle('pointer-events-none', !isVisible)
    })
    current = index
  }

  function next() {
    showSlide((current + 1) % slides.length)
  }

  showSlide(0)
  return setInterval(next, interval)
}
