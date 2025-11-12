// Attendre que le DOM soit chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DONNÉES DE TRADUCTION (RÉSUMÉE) ---
    const translations = {
        'en': {
            'pageTitle': 'Lilian Benard | Gameplay Programmer',
            'logo': 'Lilian Benard',
            'langToggleTitle': 'Switch to French',
            'themeToggleTitleLight': 'Switch to Dark Mode',
            'themeToggleTitleDark': 'Switch to Light Mode',
            'navHome': 'Home',
            'navAbout': 'About',
            'navProjects': 'Projects',
            'navContact': 'Contact',
            'heroName': 'Lilian Benard',
            'heroTitle': 'Gameplay Programmer',
            'heroSubtitle': '2nd year student at ISART Digital',
            'heroButton': 'View my Projects',
            'aboutTitle': 'About Me',
            'aboutButton': 'Download my CV',
            'projectsTitle': 'Projects',
            'filterTitle': 'Filter by tag:',
            'filterAll': 'All Projects',
            'filterTagGodot': 'Godot',
            'filterTagUnity': 'Unity',
            'filterTagCsharp': 'C#',
            'filterTagPuzzle': 'Puzzle',
            'filterTagSokoban': 'Sokoban',
            'filterTagVisualNovel': 'Visual Novel',
            'filterTagTools': 'Tools',
            'projectButtonBack': 'Learn More',
            'contactTitle': 'Contact',
            'contactP': "I'm currently looking for an internship. Feel free to contact me!",
            'formSubmitButton': 'Send Message',
            'formStatusSending': 'Sending...',
            'formStatusSuccess': 'Sent!',
            'formStatusError': 'Error!',
            'footerText': '© 2025 Lilian Benard. All rights reserved.',
            'modalDefaultTitle': 'Project Title',
            'modalDefaultPitch': 'Game pitch.',
            'modalDefaultInfo': 'Key info inserted by JS',
            'modalContribTitle': 'My Contribution',
            'modalChallengesTitle': 'Challenges Faced',
            'projects': {
                '1': {
                    'title': 'Kinisi',
                    'pitch': 'A 2D Sokoban-style puzzle game where each block has unique properties.',
                    'info': `<span><strong>Engine:</strong> Godot</span>
                             <span><strong>Language:</strong> C#</span>
                             <span><strong>Team:</strong> Student Project (2 months)</span>`,
                    'contributions': [
                        'Implemented player controller and block mechanics.',
                        'Built undo/redo system.',
                        'Optimized grid logic.'
                    ],
                    'challenges': [
                        'Perfect grid collision.',
                        'Scalable structure for new block types.'
                    ],
                    'videoEmbedUrl': 'video/KinisiVideo.mp4',
                    'links': `<a href="#" class="btn" target="_blank">Play on itch.io</a>`
                },
                '2': {
                    'title': 'The Last Haven',
                    'pitch': 'A humanitarian Visual Novel for The Red Cross created in 72 hours.',
                    'info': `<span><strong>Engine:</strong> Godot</span>
                             <span><strong>Language:</strong> C#</span>
                             <span><strong>Team:</strong> Game Jam (72h)</span>`,
                    'contributions': [
                        'Programmed branching dialogue system.',
                        'Implemented scene transitions and multiple endings.'
                    ],
                    'challenges': [
                        'Developed JSON-driven parser under time pressure.',
                        'Handled complex state management.'
                    ],
                    'videoEmbedUrl': 'video/The Last Haven.mp4',
                    'links': `<a href="#" class="btn" target="_blank">Play on itch.io</a>`
                },
                '3': {
                    'title': 'food wise',
                    'pitch': 'An educational one-button mobile game about nutrition.',
                    'info': `<span><strong>Engine:</strong> Unity</span>
                             <span><strong>Language:</strong> C#</span>
                             <span><strong>Platform:</strong> Mobile</span>`,
                    'contributions': [
                        'Designed one-button gameplay mechanic.',
                        'Built responsive UI with health bar and score.'
                    ],
                    'challenges': [
                        'Balancing difficulty and spawn speed.',
                        'Optimizing performance for mobile devices.'
                    ],
                    'videoEmbedUrl': 'https://www.youtube.com/embed/VIDEO_ID_HERE',
                    'links': `<a href="#" class="btn" target="_blank">Play Store / App Store Link</a>`
                }
            }
        },
        'fr': {
            'pageTitle': 'Lilian Benard | Gameplay Programmeur',
            'logo': 'Lilian Benard',
            'langToggleTitle': 'Passer en Anglais',
            'themeToggleTitleLight': 'Passer au thème sombre',
            'themeToggleTitleDark': 'Passer au thème clair',
            'navHome': 'Accueil',
            'navAbout': 'À Propos',
            'navProjects': 'Projets',
            'navContact': 'Contact',
            'heroName': 'Lilian Benard',
            'heroTitle': 'Gameplay Programmeur',
            'heroSubtitle': 'Étudiant en 2ème année à ISART Digital',
            'heroButton': 'Voir mes Projets',
            'aboutTitle': 'À Propos de Moi',
            'aboutButton': 'Télécharger mon CV',
            'projectsTitle': 'Projets',
            'filterTitle': 'Filtrer par tag :',
            'filterAll': 'Tous les projets',
            'filterTagGodot': 'Godot',
            'filterTagUnity': 'Unity',
            'filterTagCsharp': 'C#',
            'filterTagPuzzle': 'Puzzle',
            'filterTagSokoban': 'Sokoban',
            'filterTagVisualNovel': 'Visual Novel',
            'filterTagTools': 'Outils',
            'projectButtonBack': 'En savoir plus',
            'contactTitle': 'Contact',
            'contactP': "Je suis actuellement à la recherche d'un stage. N'hésitez pas à me contacter !",
            'formSubmitButton': 'Envoyer le Message',
            'formStatusSending': 'Envoi...',
            'formStatusSuccess': 'Envoyé !',
            'formStatusError': 'Erreur !',
            'footerText': '© 2025 Lilian Benard. Tous droits réservés.',
            'modalContribTitle': 'Ma Contribution',
            'modalChallengesTitle': 'Défis Rencontrés',
        'projects': {
            '1': {
                'title': 'Kinisi',
                'pitch': 'Un jeu Sokoban 2D innovant avec des mécaniques uniques.',
                'info': `<span><strong>Moteur :</strong> Godot</span>
                             <span><strong>Langage :</strong> C#</span>
                             <span><strong>Équipe :</strong> Projet étudiant (2 mois)</span>`,
                'contributions': [
                    'Système de grille et contrôleur du joueur.',
                    'Système Undo/Redo complet.'
                ],
                'challenges': [
                    'Détection de collisions parfaite.',
                    'Structure extensible pour nouveaux blocs.'
                ],
                'videoEmbedUrl': 'video/KinisiVideo.mp4',
                'links': `<a href="#" class="btn" target="_blank">Jouer sur itch.io</a>`
            },
            '2': {
                'title': 'The Last Haven',
                'pitch': 'Un visual novel humanitaire créé pour la Croix-Rouge en 72 heures.',
                'info': `<span><strong>Moteur :</strong> Godot</span>
                             <span><strong>Langage :</strong> C#</span>
                             <span><strong>Équipe :</strong> Game Jam (72h)</span>`,
                'contributions': [
                    'Programmation du système de dialogues à embranchements.',
                    'Mise en place des transitions et des fins multiples.'
                ],
                'challenges': [
                    'Création d’un parseur piloté par JSON sous contrainte de temps.',
                    'Gestion d’états complexes pour suivre les choix du joueur.'
                ],
                'videoEmbedUrl': 'video/The Last Haven.mp4',
                'links': `<a href="#" class="btn" target="_blank">Jouer sur itch.io</a>`
            },
            '3': {
                'title': 'food wise',
                'pitch': 'Un jeu mobile éducatif à un seul bouton sur la nutrition.',
                'info': `<span><strong>Moteur :</strong> Unity</span>
                             <span><strong>Langage :</strong> C#</span>
                             <span><strong>Plateforme :</strong> Mobile</span>`,
                'contributions': [
                    'Conception de la mécanique de jeu à un seul bouton.',
                    'Développement d’une interface réactive avec barre de santé et score.'
                ],
                'challenges': [
                    'Équilibrage de la difficulté et de la vitesse d’apparition.',
                    'Optimisation des performances pour les appareils mobiles.'
                ],
                'videoEmbedUrl': 'https://www.youtube.com/embed/VIDEO_ID_HERE',
                'links': `<a href="#" class="btn" target="_blank">Lien Play Store / App Store</a>`
            }
        }
        }
    };

    // --- GESTION DU THÈME ---
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const iconMoon = document.getElementById('theme-icon-moon');
    const iconSun = document.getElementById('theme-icon-sun');
    const docElement = document.documentElement;

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            iconMoon.style.display = 'none';
            iconSun.style.display = 'block';
        } else {
            iconMoon.style.display = 'block';
            iconSun.style.display = 'none';
        }
        updateThemeTooltip();
    }

    function updateThemeTooltip() {
        const currentThemeForTitle = docElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const currentLangForTitle = localStorage.getItem('language') || 'en';
        const tooltipKey = (currentThemeForTitle === 'light') ? 'themeToggleTitleLight' : 'themeToggleTitleDark';
        themeToggleButton.title = translations[currentLangForTitle][tooltipKey] || '';
    }

    const defaultTheme = 'light';
    const currentTheme = localStorage.getItem('theme') || defaultTheme;
    if (currentTheme === 'light') docElement.setAttribute('data-theme', 'light');
    else docElement.removeAttribute('data-theme');
    updateThemeIcon(currentTheme);

    themeToggleButton.addEventListener('click', () => {
        if (docElement.getAttribute('data-theme') === 'light') {
            docElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        } else {
            docElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        }
    });

    // --- GESTION LANGUE ---
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('language') || 'en';

    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        const langData = translations[lang];
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (langData[key]) el.textContent = langData[key];
        });
        langToggle.textContent = (lang === 'en') ? 'EN' : 'FR';
        langToggle.title = langData['langToggleTitle'];
        updateThemeTooltip();
    }

    langToggle.addEventListener('click', () => {
        const newLang = (currentLang === 'en') ? 'fr' : 'en';
        updateLanguage(newLang);
    });
    updateLanguage(currentLang);

    // --- NAVBAR HIDE ON SCROLL ---
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    const scrollThreshold = 70;
    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) header.classList.add('header-hidden');
        else header.classList.remove('header-hidden');
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // --- MODAL DES PROJETS ---
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const filterContainer = document.getElementById('project-filters');
    const filterButtons = filterContainer ? filterContainer.querySelectorAll('.filter-btn') : [];
    let activeFilterTag = 'all';
    const modalTitle = document.getElementById('modal-title');
    const modalVideoContainer = document.getElementById('modal-video-container');
    const modalPitch = document.getElementById('modal-pitch');
    const modalInfo = document.getElementById('modal-info');
    const modalContributionList = document.getElementById('modal-contribution-list');
    const modalChallengesList = document.getElementById('modal-challenges-list');
    const modalLinks = document.getElementById('modal-links');

    function openModal(projectId) {
        let data = translations[currentLang]?.projects?.[projectId];
        if (!data) data = translations['en']?.projects?.[projectId];
        if (!data) return console.error("Aucune donnée trouvée pour le projet ID:", projectId);

        modalTitle.textContent = data.title;
        modalPitch.textContent = data.pitch;
        modalInfo.innerHTML = data.info;
        modalLinks.innerHTML = data.links || '';

        modalContributionList.innerHTML = '';
        (data.contributions || []).forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item;
            modalContributionList.appendChild(li);
        });

        modalChallengesList.innerHTML = '';
        (data.challenges || []).forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item;
            modalChallengesList.appendChild(li);
        });

        modalVideoContainer.innerHTML = '';
        if (data.videoEmbedUrl) {
            const videoSrc = data.videoEmbedUrl.trim();
            if (videoSrc.toLowerCase().endsWith('.mp4')) {
                const video = document.createElement('video');
                video.controls = true;
                video.playsInline = true;
                video.preload = 'auto';
                video.style.width = '100%';
                video.style.height = '100%';
                video.style.objectFit = 'contain';
                
                video.addEventListener('error', (e) => {
                    console.error('Erreur de chargement vidéo:', e);
                    console.error('Chemin vidéo:', videoSrc);
                    modalVideoContainer.innerHTML = `<p style="color: var(--error-color); padding: 2rem; text-align: center;">Erreur de chargement de la vidéo. Vérifiez que le fichier existe : ${videoSrc}</p>`;
                });
                
                const source = document.createElement('source');
                source.src = videoSrc;
                source.type = 'video/mp4';
                video.appendChild(source);
                video.appendChild(document.createTextNode('Your browser does not support the video tag.'));
                modalVideoContainer.appendChild(video);
            } else {
                modalVideoContainer.innerHTML = `
                    <iframe src="${videoSrc}" title="Project Video" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }
        }

        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
        modalVideoContainer.innerHTML = '';
    }

    projectCards.forEach(card => {
        const projectId = card.getAttribute('data-project-id');
        card.addEventListener('click', () => openModal(projectId));
    });
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    function applyProjectFilter(tag) {
        activeFilterTag = tag;
        projectCards.forEach(card => {
            const cardTags = (card.dataset.tags || '').split(',').map(t => t.trim()).filter(Boolean);
            const matches = tag === 'all' || cardTags.includes(tag);
            card.style.display = matches ? '' : 'none';
        });
    }

    if (filterContainer) {
        filterButtons.forEach(btn => {
            if (btn.dataset.filter === activeFilterTag) {
                btn.classList.add('active');
            }

            btn.addEventListener('click', (event) => {
                event.preventDefault();
                const tag = btn.dataset.filter;
                if (!tag || tag === activeFilterTag) return;
                filterButtons.forEach(b => b.classList.toggle('active', b === btn));
                applyProjectFilter(tag);
            });
        });

        applyProjectFilter(activeFilterTag);
    }

    // --- FORMULAIRE ---
    const form = document.getElementById('contact-form');
    const submitButton = form.querySelector('button[type="submit"]');
    const submitText = translations[currentLang]['formSubmitButton'];

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitButton.classList.add('loading');
        try {
            const res = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            submitButton.classList.remove('loading');
            if (res.ok) {
                submitButton.classList.add('success');
                submitButton.textContent = translations[currentLang]['formStatusSuccess'];
                form.reset();
            } else throw new Error();
        } catch {
            submitButton.classList.add('error');
            submitButton.textContent = translations[currentLang]['formStatusError'];
        }
        setTimeout(() => {
            submitButton.className = 'btn';
            submitButton.textContent = submitText;
        }, 3000);
    });

    // === ANIMATION TEMPÊTE DE SABLE ===
    const canvas = document.getElementById('starfield');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const PARTICLE_COUNT = 240;
        const particles = [];

        function createParticle(x = Math.random() * canvas.width) {
            return {
                x,
                y: Math.random() * canvas.height,
                size: 0.8 + Math.random() * 1.7,
                speed: 0.6 + Math.random() * 1.4,
                verticalSpeed: (Math.random() - 0.5) * 0.2,
                swayAmplitude: 8 + Math.random() * 18,
                swaySpeed: 0.0015 + Math.random() * 0.0035,
                swayOffset: Math.random() * Math.PI * 2,
                alpha: 0.15 + Math.random() * 0.35
            };
        }

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(createParticle());
        }

        let lastTime = performance.now();

        function updateParticles(delta) {
            const speedFactor = delta / 16.67; // Normalise par rapport à 60fps
            particles.forEach(particle => {
                particle.x += particle.speed * speedFactor;
                particle.y += particle.verticalSpeed * speedFactor;

                if (particle.x > canvas.width + 40) {
                    Object.assign(particle, createParticle(-40));
                }

                if (particle.y > canvas.height + 40) {
                    particle.y = -40;
                } else if (particle.y < -40) {
                    particle.y = canvas.height + 40;
                }
            });
        }

        function drawParticles(time) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const particleColor = getComputedStyle(document.documentElement).getPropertyValue('--storm-particle-color').trim() || 'rgba(217, 170, 102, 0.3)';

            particles.forEach(particle => {
                const sway = Math.sin(time * particle.swaySpeed + particle.swayOffset + particle.x * 0.01) * particle.swayAmplitude;
                const y = particle.y + sway;

                ctx.globalAlpha = particle.alpha;
                ctx.fillStyle = particleColor;
                ctx.beginPath();
                ctx.ellipse(particle.x, y, particle.size * 3.5, particle.size, Math.PI / 12, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
        }

        function animate(time) {
            const delta = time - lastTime;
            lastTime = time;

            updateParticles(delta);
            drawParticles(time);

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }
});
