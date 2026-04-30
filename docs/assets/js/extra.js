/**
 * Vishal Sen — DevOps & MLOps Learning Portal
 * Custom JavaScript — Production
 */

// ── Smooth Scroll for anchor links ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// ── Dynamic year in footer ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  var yearSpans = document.querySelectorAll('.current-year');
  var currentYear = new Date().getFullYear();
  yearSpans.forEach(function (span) {
    span.textContent = currentYear;
  });
});

// ── External links open in new tab ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    if (!link.hostname || link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
