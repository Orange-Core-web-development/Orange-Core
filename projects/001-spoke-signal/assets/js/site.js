(() => {
  document.documentElement.classList.add('has-js');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
        menuButton.focus();
      }
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const revealItems = document.querySelectorAll('[data-reveal]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const form = document.getElementById('service-form');
  const output = document.getElementById('request-output');
  const requestText = document.getElementById('request-text');
  const copyButton = document.getElementById('copy-request');
  const printButton = document.getElementById('print-request');
  const copyStatus = document.getElementById('copy-status');

  if (form && output && requestText) {
    const serviceSelect = document.getElementById('service');
    const params = new URLSearchParams(window.location.search);
    const requestedService = params.get('service');
    const serviceMap = {
      'once-over': 'The Once-Over',
      'everyday': 'Everyday Service',
      'deep': 'Deep Service',
      'workplace': 'Workplace or group visit'
    };
    if (requestedService && serviceMap[requestedService] && serviceSelect) {
      serviceSelect.value = serviceMap[requestedService];
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const summary = [
        'SPOKE & SIGNAL — SERVICE REQUEST (FICTIONAL DEMO)',
        '',
        'Name: ' + data.get('name'),
        'Email: ' + data.get('email'),
        'Postcode: ' + data.get('postcode'),
        'Bike: ' + data.get('bike'),
        'Service starting point: ' + data.get('service'),
        'Preferred visit spot: ' + data.get('location'),
        'Preferred timing: ' + data.get('timing'),
        '',
        'What is happening:',
        data.get('issue'),
        '',
        'This is a locally generated demo summary. It has not been sent or stored.'
      ].join('\n');
      requestText.textContent = summary;
      output.hidden = false;
      output.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      if (copyStatus) copyStatus.textContent = 'Summary created in this page. Nothing has been sent.';
    });

    if (copyButton) {
      copyButton.addEventListener('click', async () => {
        const text = requestText.textContent || '';
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            if (copyStatus) copyStatus.textContent = 'Copied. You can paste the summary wherever you need it.';
          } else {
            const temporary = document.createElement('textarea');
            temporary.value = text;
            temporary.setAttribute('readonly', '');
            temporary.style.position = 'absolute';
            temporary.style.left = '-9999px';
            document.body.appendChild(temporary);
            temporary.select();
            const copied = document.execCommand('copy');
            temporary.remove();
            if (copyStatus) copyStatus.textContent = copied ? 'Copied. You can paste the summary wherever you need it.' : 'Select the summary above and copy it manually.';
          }
        } catch (error) {
          if (copyStatus) copyStatus.textContent = 'Copy was unavailable. Select the summary above and copy it manually.';
        }
      });
    }

    if (printButton) {
      printButton.addEventListener('click', () => window.print());
    }
  }
})();
