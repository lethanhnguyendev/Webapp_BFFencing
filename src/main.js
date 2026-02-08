import './style.css'
import { getHeader, getFooter, initCarousel } from './components.js'
import { initGallery } from './gallery.js'

// Inject header & footer
document.addEventListener('DOMContentLoaded', () => {
  const pageId = document.body.dataset.page || 'home'
  const headerEl = document.getElementById('site-header')
  const footerEl = document.getElementById('site-footer')

  if (headerEl) headerEl.innerHTML = getHeader(pageId)
  if (footerEl) footerEl.innerHTML = getFooter()

  if (pageId === 'home') {
    initCarousel('hero-carousel', 5000)
  }
  if (pageId === 'gallery') {
    initGallery()
  }
})
