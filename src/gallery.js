import { GALLERY_CATEGORIES, getImageUrl, getVideoUrl } from './gallery-config.js'

const GALLERY_BASE = '/images/gallery'

export function initGallery() {
  const categoriesGridEl = document.getElementById('gallery-categories-grid')
  const categoriesSectionEl = document.getElementById('gallery-categories')
  const imagesEl = document.getElementById('gallery-images')
  const lightboxEl = document.getElementById('gallery-lightbox')
  const breadcrumbEl = document.getElementById('gallery-breadcrumb')
  const videoLightboxEl = document.getElementById('gallery-video-lightbox')

  if (!categoriesGridEl || !imagesEl) return

  let currentCategory = null

  function openVideoLightbox(index, category) {
    const videos = category.videos
    const folder = category.folder
    const player = document.getElementById('video-lightbox-player')
    const closeBtn = document.getElementById('video-lightbox-close')
    const prevBtn = document.getElementById('video-lightbox-prev')
    const nextBtn = document.getElementById('video-lightbox-next')
    const counterEl = document.getElementById('video-lightbox-counter')

    let currentIndex = index

    function playVideo(i) {
      currentIndex = (i + videos.length) % videos.length
      player.src = getVideoUrl(folder, videos[currentIndex])
      player.load()
      player.play()
      if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${videos.length}`
    }

    function close() {
      player.pause()
      player.src = ''
      videoLightboxEl.classList.add('hidden')
      document.removeEventListener('keydown', keyHandler)
    }

    function keyHandler(e) {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') { e.preventDefault(); playVideo(currentIndex - 1) }
      else if (e.key === 'ArrowRight') { e.preventDefault(); playVideo(currentIndex + 1) }
    }

    closeBtn.onclick = close
    prevBtn.onclick = e => { e.stopPropagation(); playVideo(currentIndex - 1) }
    nextBtn.onclick = e => { e.stopPropagation(); playVideo(currentIndex + 1) }
    const navEl = document.getElementById('video-lightbox-nav')
    if (navEl) navEl.onclick = e => e.stopPropagation()
    videoLightboxEl.onclick = e => { if (e.target === videoLightboxEl) close() }
    player.onclick = e => e.stopPropagation()

    document.addEventListener('keydown', keyHandler)
    playVideo(index)
    videoLightboxEl.classList.remove('hidden')
  }

  window.galleryOpenVideo = (index, categoryId) => {
    const cat = GALLERY_CATEGORIES.find(c => c.id === categoryId)
    if (cat?.type === 'video' && cat.videos) openVideoLightbox(index, cat)
  }

  function renderCategories() {
    categoriesGridEl.innerHTML = GALLERY_CATEGORIES.map(cat => {
      if (cat.type === 'video') {
        return `
          <button onclick="window.galleryShowCategory('${cat.id}')" class="card bg-white shadow-xl border border-neutral-100 overflow-hidden hover:shadow-2xl transition-shadow text-left">
            <figure class="relative h-56 bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center">
              <div class="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center">
                <svg class="w-10 h-10 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </figure>
            <div class="card-body p-5">
              <h3 class="card-title text-primary text-lg">${cat.name}</h3>
              <p class="text-base opacity-70">${cat.videos.length} videos</p>
            </div>
          </button>
        `
      }
      return `
        <button onclick="window.galleryShowCategory('${cat.id}')" class="card bg-white shadow-xl border border-neutral-100 overflow-hidden hover:shadow-2xl transition-shadow text-left">
          <figure>
            <img src="${getImageUrl(cat.folder, cat.images[0])}" alt="${cat.name}" class="w-full h-56 object-cover" loading="lazy" />
          </figure>
          <div class="card-body p-5">
            <h3 class="card-title text-primary text-lg">${cat.name}</h3>
            <p class="text-base opacity-70">${cat.images.length} images</p>
          </div>
        </button>
      `
    }).join('')
  }

  function renderContent(category) {
    const cat = GALLERY_CATEGORIES.find(c => c.id === category)
    if (!cat) return

    currentCategory = cat
    categoriesSectionEl.classList.add('hidden')
    imagesEl.classList.remove('hidden')
    breadcrumbEl.classList.remove('hidden')
    breadcrumbEl.innerHTML = `<span class="cursor-pointer hover:underline" onclick="window.galleryShowAll()">Gallery</span> / ${cat.name}`

    if (cat.type === 'video') {
      imagesEl.innerHTML = `
        <div class="container mx-auto px-4">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-primary">${cat.name}</h2>
            <p class="opacity-70">${cat.description}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
            ${cat.videos.map((vid, i) => `
              <button onclick="window.galleryOpenVideo(${i}, '${cat.id}')" class="group block w-full rounded-xl overflow-hidden bg-neutral-200 border border-neutral-200 hover:border-primary/50 transition-all hover:shadow-xl text-left">
                <div class="relative aspect-video flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-800">
                  <div class="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                    <div class="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg class="w-10 h-10 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div class="p-4">
                  <span class="text-sm font-semibold text-neutral-800">Video ${i + 1}</span>
                </div>
              </button>
            `).join('')}
          </div>
        </div>
      `
    } else {
      imagesEl.innerHTML = `
        <div class="container mx-auto px-4">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-primary">${cat.name}</h2>
            <p class="opacity-70">${cat.description}</p>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" id="gallery-grid">
            ${cat.images.map((img, i) => `
              <button onclick="window.galleryOpenLightbox(${i})" class="block w-full aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity">
                <img src="${getImageUrl(cat.folder, img)}" alt="${img.replace(/\.[^.]+$/, '')}" class="w-full h-full object-cover" loading="lazy" />
              </button>
            `).join('')}
          </div>
        </div>
      `
    }
  }

  function showAll() {
    currentCategory = null
    categoriesSectionEl.classList.remove('hidden')
    imagesEl.classList.add('hidden')
    breadcrumbEl.classList.add('hidden')
  }

  function openLightbox(index) {
    if (!currentCategory) return
    const lightboxImg = document.getElementById('lightbox-img')
    const lightboxPrev = document.getElementById('lightbox-prev')
    const lightboxNext = document.getElementById('lightbox-next')
    const lightboxClose = document.getElementById('lightbox-close')

    let currentIndex = index
    const images = currentCategory.images

    function showImg(i) {
      currentIndex = (i + images.length) % images.length
      lightboxImg.src = getImageUrl(currentCategory.folder, images[currentIndex])
      lightboxImg.alt = images[currentIndex]
    }

    function close() {
      lightboxEl.classList.add('hidden')
      document.removeEventListener('keydown', keyHandler)
    }

    function keyHandler(e) {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') { e.preventDefault(); showImg(currentIndex - 1) }
      else if (e.key === 'ArrowRight') { e.preventDefault(); showImg(currentIndex + 1) }
    }

    lightboxImg.onclick = e => e.stopPropagation()
    lightboxPrev.onclick = e => { e.stopPropagation(); showImg(currentIndex - 1) }
    lightboxNext.onclick = e => { e.stopPropagation(); showImg(currentIndex + 1) }
    lightboxClose.onclick = close
    lightboxEl.onclick = close

    document.addEventListener('keydown', keyHandler)
    showImg(index)
    lightboxEl.classList.remove('hidden')
  }

  window.galleryShowCategory = id => renderContent(id)
  window.galleryShowAll = () => showAll()
  window.galleryOpenLightbox = index => openLightbox(index)

  renderCategories()
}
