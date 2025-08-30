(function() {
	// Theme toggle
	const themeToggle = document.getElementById('themeToggle');
	if (themeToggle) {
		themeToggle.addEventListener('click', () => {
			document.documentElement.classList.toggle('light');
		});
	}

	// Smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});

	// Button click animations
	document.querySelectorAll('.btn, .download-btn').forEach(button => {
		button.addEventListener('click', function() {
			this.style.transform = 'translateY(2px)';
			setTimeout(() => {
				this.style.transform = 'translateY(0)';
			}, 100);
		});
	});

	// Scroll reveal for landing page
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, observerOptions);

	document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

	// Scroll reveal for documentation page
	const docsObserverOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -100px 0px'
	};

	const docsObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, docsObserverOptions);

	// Only run on documentation page
	if (document.querySelector('.docs-content')) {
		document.querySelectorAll('.docs-content section:not(:first-child)').forEach(section => {
			docsObserver.observe(section);
		});
	}

	// Programmatic smooth scrolling for buttons
	document.querySelectorAll('[data-scroll]').forEach(button => {
		button.addEventListener('click', function() {
			const target = document.querySelector(this.getAttribute('data-scroll'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});

	// Set current year in footer
	document.getElementById('year').textContent = new Date().getFullYear();
})();
