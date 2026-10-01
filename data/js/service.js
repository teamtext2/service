/**
 * Spac2 Services App - Core Logic & SVG Icon System
 * Path: /service/data/js/service.js
 */

// SVG Icon Library for Spac2 Services
const SPAC2_SERVICE_ICONS = {
  email: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="url(#grad_email)"/>
    <rect x="10" y="14" width="28" height="20" rx="3" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 17L24 26L38 17" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="34" cy="18" r="3" fill="#60A5FA"/>
    <defs>
      <linearGradient id="grad_email" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#2563EB"/>
        <stop offset="1" stop-color="#1D4ED8"/>
      </linearGradient>
    </defs>
  </svg>`,

  website: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="url(#grad_web)"/>
    <rect x="9" y="11" width="30" height="22" rx="3" stroke="#ffffff" stroke-width="2.2"/>
    <line x1="9" y1="17" x2="39" y2="17" stroke="#ffffff" stroke-width="2.2"/>
    <circle cx="13.5" cy="14" r="1.5" fill="#EF4444"/>
    <circle cx="17.5" cy="14" r="1.5" fill="#F59E0B"/>
    <circle cx="21.5" cy="14" r="1.5" fill="#10B981"/>
    <path d="M19 37H29" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M24 33V37" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
    <defs>
      <linearGradient id="grad_web" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4F46E5"/>
        <stop offset="1" stop-color="#7C3AED"/>
      </linearGradient>
    </defs>
  </svg>`,

  cloud: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="url(#grad_cloud)"/>
    <path d="M14 28.5C11.5147 28.5 9.5 26.4853 9.5 24C9.5 21.6888 11.2384 19.7828 13.4883 19.5318C14.0754 15.2891 17.6953 12 22.1 12C26.0469 12 29.3512 14.6309 30.3444 18.2575C30.826 18.0906 31.3418 18 31.875 18C34.7055 18 37 20.2945 37 23.125C37 25.8647 34.8488 28.1017 32.1444 28.2435" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
    <rect x="13" y="27" width="22" height="9" rx="2" stroke="#ffffff" stroke-width="2.2" fill="#0F172A"/>
    <circle cx="17" cy="31.5" r="1.5" fill="#10B981"/>
    <circle cx="21" cy="31.5" r="1.5" fill="#60A5FA"/>
    <defs>
      <linearGradient id="grad_cloud" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0284C7"/>
        <stop offset="1" stop-color="#0F766E"/>
      </linearGradient>
    </defs>
  </svg>`,

  domain: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="url(#grad_domain)"/>
    <circle cx="24" cy="24" r="13" stroke="#ffffff" stroke-width="2.2"/>
    <ellipse cx="24" cy="24" rx="6" ry="13" stroke="#ffffff" stroke-width="2.2"/>
    <line x1="11" y1="24" x2="37" y2="24" stroke="#ffffff" stroke-width="2.2"/>
    <path d="M28 29V26C28 24.8954 28.8954 24 30 24H33C34.1046 24 35 24.8954 35 26V29M27 29H36V36H27V29Z" fill="#10B981" stroke="#ffffff" stroke-width="1.5"/>
    <defs>
      <linearGradient id="grad_domain" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#059669"/>
        <stop offset="1" stop-color="#047857"/>
      </linearGradient>
    </defs>
  </svg>`,

  software: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="url(#grad_soft)"/>
    <path d="M16 19L10 24L16 29" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 19L38 24L32 29" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M26 14L22 34" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="34" cy="14" r="3" fill="#A855F7"/>
    <defs>
      <linearGradient id="grad_soft" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7C3AED"/>
        <stop offset="1" stop-color="#9333EA"/>
      </linearGradient>
    </defs>
  </svg>`,

  seo: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="url(#grad_seo)"/>
    <path d="M12 34L20 25L27 30L36 17" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30 17H36V23" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="34" r="2" fill="#F59E0B"/>
    <circle cx="20" cy="25" r="2" fill="#F59E0B"/>
    <circle cx="27" cy="30" r="2" fill="#F59E0B"/>
    <circle cx="36" cy="17" r="2" fill="#10B981"/>
    <defs>
      <linearGradient id="grad_seo" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#EA580C"/>
        <stop offset="1" stop-color="#D97706"/>
      </linearGradient>
    </defs>
  </svg>`,

  security: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="url(#grad_sec)"/>
    <path d="M24 11L12 16V24C12 31.5 17.2 38.4 24 40C30.8 38.4 36 31.5 36 24V16L24 11Z" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 24L23 27L29 21" stroke="#34D399" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
      <linearGradient id="grad_sec" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DC2626"/>
        <stop offset="1" stop-color="#B91C1C"/>
      </linearGradient>
    </defs>
  </svg>`,

  payment: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="url(#grad_pay)"/>
    <rect x="9" y="14" width="30" height="20" rx="3" stroke="#ffffff" stroke-width="2.2"/>
    <line x1="9" y1="20" x2="39" y2="20" stroke="#ffffff" stroke-width="2.2"/>
    <rect x="14" y="26" width="7" height="4" rx="1" fill="#FDE047"/>
    <circle cx="31" cy="28" r="3" fill="#60A5FA"/>
    <circle cx="34" cy="28" r="3" fill="#F87171" fill-opacity="0.8"/>
    <defs>
      <linearGradient id="grad_pay" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#0D9488"/>
        <stop offset="1" stop-color="#0F766E"/>
      </linearGradient>
    </defs>
  </svg>`,

  default: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="url(#grad_def)"/>
    <circle cx="24" cy="24" r="10" stroke="#ffffff" stroke-width="2.2"/>
    <path d="M24 18V24L28 28" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
    <defs>
      <linearGradient id="grad_def" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4B5563"/>
        <stop offset="1" stop-color="#1F2937"/>
      </linearGradient>
    </defs>
  </svg>`
};

// Helper to get SVG from key
function getServiceSvg(imgKey) {
  if (!imgKey) return SPAC2_SERVICE_ICONS.default;
  if (imgKey.trim().startsWith('<svg')) return imgKey;
  return SPAC2_SERVICE_ICONS[imgKey] || SPAC2_SERVICE_ICONS.default;
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderServicesList();
});

// Render Service Cards Grid
function renderServicesList() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  const services = (typeof SPAC2_SERVICES !== 'undefined') ? SPAC2_SERVICES : [];

  if (!services || services.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: #a1a1aa; padding: 40px;">No services currently available.</div>';
    return;
  }

  grid.innerHTML = services.map(svc => {
    const svgIcon = getServiceSvg(svc.img);
    return `
      <article class="app-service-card" onclick="openServiceDetail('${svc.id}')">
        <div>
          <div class="card-top-row">
            <div class="card-svg-icon" aria-hidden="true">
              ${svgIcon}
            </div>
            <span class="card-badge">${svc.badge || 'Standard'}</span>
          </div>

          <h2 class="card-title">${svc.title}</h2>
          <p class="card-desc">${svc.desc}</p>

          <div class="card-features-chips">
            ${(svc.features || []).slice(0, 3).map(f => `
              <span class="feature-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${f}</span>
              </span>
            `).join('')}
          </div>
        </div>

        <div class="card-bottom-row">
          <span class="card-price-tag">${svc.price || 'Contact us'}</span>
          <button type="button" class="btn-card-action" onclick="event.stopPropagation(); openServiceDetail('${svc.id}')">
            <span>Details</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// Open Service Detail Modal
function openServiceDetail(serviceId) {
  if (typeof SPAC2_SERVICES === 'undefined') return;
  const svc = SPAC2_SERVICES.find(s => s.id === serviceId);
  if (!svc) return;

  const svgIcon = getServiceSvg(svc.img);

  document.getElementById('modalTitle').textContent = svc.title;
  document.getElementById('modalPrice').textContent = svc.price || 'Contact for quotation';
  document.getElementById('modalDesc').textContent = svc.desc;
  document.getElementById('modalIcon').innerHTML = svgIcon;

  const linkBtn = document.getElementById('modalDirectLink');
  if (linkBtn) {
    linkBtn.href = svc.link || `mailto:hi@spac2.com?subject=Inquiry%20${encodeURIComponent(svc.title)}`;
  }

  const detailBtn = document.getElementById('modalDetailPageLink');
  if (detailBtn) {
    if (svc.detailUrl) {
      detailBtn.href = svc.detailUrl;
      detailBtn.style.display = 'inline-flex';
    } else {
      detailBtn.style.display = 'none';
    }
  }

  const featuresContainer = document.getElementById('modalFeatures');
  if (featuresContainer) {
    featuresContainer.innerHTML = (svc.features || []).map(f => `
      <li class="modal-feature-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  const modal = document.getElementById('serviceDetailModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Close Modal
function closeServiceModal() {
  const modal = document.getElementById('serviceDetailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleModalBackdropClick(event) {
  if (event.target.id === 'serviceDetailModal') {
    closeServiceModal();
  }
}
