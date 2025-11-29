// Datos de programas
const programs = {
    historias: {
        id: 'historias',
        name: 'Historias Mágicas',
        type: 'Ficción',
        description: 'Viaja a mundos imaginarios con nuestras historias llenas de magia, aventura y personajes inolvidables. Cada episodio te transportará a mundos fascinantes donde todo es posible.',
        schedule: 'Lunes y Miércoles - 2:00 PM',
        icon: '📚',
        color: 'historias',
        jingles: [
            { src: 'audio/programas/historias_jingle1.mp3', title: 'Jingle 1' },
            { src: 'audio/programas/historias_jingle3.mp3', title: 'Jingle 2' },
            
        ],
        podcast: 'audio/programas/historias_podcast.mp3'
    },
    sodapop: {
        id: 'sodapop',
        name: 'Zona Pop',
        type: 'Entretenimiento',
        description: '¡La música más fresca, juegos divertidos y las últimas tendencias! Diversión garantizada para tu tarde. Únete a nosotros para pasar momentos inolvidables llenos de energía.',
        schedule: 'Martes y Jueves - 3:00 PM',
        icon: '🎵',
        color: 'sodapop',
        jingles: [
            { src: 'audio/programas/sodapop_jingle1.mp3', title: 'Jingle 1' },
            { src: 'audio/programas/sodapop_jingle2.mp3', title: 'Jingle 2' },
            { src: 'audio/programas/sodapop_jingle3.mp3', title: 'Jingle 3' },
            { src: 'audio/parrilla/lunes_noche.mp3', title: 'Jingle 4' }
        ],
        podcast: 'audio/programas/sodapop_podcast.mp3'
    },
    noticero: {
        id: 'noticero',
        name: 'Noticiero Escolar',
        type: 'Informativo',
        description: 'Mantente al día con las noticias más importantes de nuestra escuela y el mundo que nos rodea. Información veraz, oportuna y relevante para toda la comunidad estudiantil.',
        schedule: 'Viernes - 1:00 PM',
        icon: '📰',
        color: 'noticiero',
        jingles: [
            { src: 'audio/programas/noticiero_jingle1.mp3', title: 'Jingle 1' },
            { src: 'audio/programas/noticiero_jingle2.mp3', title: 'Jingle 2' },
        ],
        podcast: 'audio/programas/noticiero_podcast.mp3'
    }
};

// Datos de la parrilla
const scheduleData = {
    'Lunes': [
        { time: '6:00 - 8:00 AM', program: 'Programa Ficción', audio: 'audio/parrilla/lunes_manana.mp3' },
        { time: '8:00 - 10:00 AM', program: 'Programa Informativo', audio: 'audio/programas/noticiero_jingle1.mp3' },
        { time: '10:00 - 12:00 PM', program: 'Programa Entretenimiento', audio: 'audio/parrilla/lunes_noche.mp3' }
    ],
    'Martes': [
        { time: '6:00 - 8:00 AM', program: 'Programa Informativo', audio: 'audio/parrilla/martes_manana.mp3' },
        { time: '8:00 - 10:00 AM', program: 'Programa Ciencia', audio: 'audio/parrilla/martes_tarde.mp3' },
        { time: '10:00 - 12:00 PM', program: 'Programa Debate', audio: 'audio/parrilla/martes_noche.mp3' }
    ],
    'Miércoles': [
        { time: '6:00 - 8:00 AM', program: 'Programa Informativo', audio: 'audio/parrilla/miercoles_manana.mp3' },
        { time: '8:00 - 10:00 AM', program: 'Programa Deportes', audio: 'audio/parrilla/miercoles_tarde.mp3' },
        { time: '10:00 - 12:00 PM', program: 'Programa Entretenimiento', audio: 'audio/programas/sodapop_jingle1.mp3' }
    ],
    'Jueves': [
        { time: '6:00 - 8:00 AM', program: 'Programa Educativo', audio: 'audio/parrilla/jueves_manana.mp3' },
        { time: '8:00 - 10:00 AM', program: 'Programa Arte', audio: 'audio/parrilla/jueves_tarde.mp3' },
        { time: '10:00 - 12:00 PM', program: 'Programa Ficción', audio: 'audio/parrilla/jueves_noche.mp3' }
    ],
    'Viernes': [
        { time: '6:00 - 8:00 AM', program: 'Programa Entretenimiento', audio: 'audio/programas/sodapop_jingle2.mp3' },
        { time: '8:00 - 10:00 AM', program: 'Programa Música', audio: 'audio/parrilla/viernes_tarde.mp3' },
        { time: '10:00 - 12:00 PM', program: 'Programa Tecnología', audio: 'audio/parrilla/viernes_noche.mp3' }
    ],
    'Sábado': [
        { time: '6:00 - 8:00 AM', program: 'clima-rd', audio: 'audio/parrilla/sabado_manana.mp3' },
        { time: '8:00 - 10:00 AM', program: 'Programa de Entretenimiento', audio: 'audio/parrilla/comunidad visionaria, conectados a ZONA .mp3' },
        { time: '10:00 - 12:00 PM', program: '',  }
    ],
    'Domingo': [
        { time: '6:00 - 8:00 AM', program: 'Programa cultural', audio: 'audio/parrilla/domingo_manana.mp3' },
        { time: '10:00 - 12:00 PM', program: '',  },
        { time: '2:00 - 5:00 PM', program: '',  }
    ]
};

// Datos del equipo
const teamMembers = [
    { name: 'Alejandra Agamez', role: 'Editora-productora-locutora-guionista-voz', image: 'images/team/andrea.jpg', color: 'pink' },
    { name: 'Jaider Carrascal', role: 'Director-Editor-Voz', image: 'images/team/daniel.jpg', color: 'cyan' },
    { name: 'Vanessa Gulfo', role: 'Presentadora-voz-Editor de Sonido y Efectos Especiales', image: 'images/team/gabriel.jpg', color: 'orange' },
    { name: 'Cristian Castaño', role: 'Productor-Editor', image: 'images/team/maria.jpg', color: 'purple' },
   
];

// Estado global
let currentAudio = null;
let currentPage = 'home';

// Navegación
function navigateTo(page) {
    console.log('Navegando a:', page); // Para debug
    
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    navLinks.forEach(link => link.classList.remove('active'));

    currentPage = page;

    if (page === 'home') {
        document.getElementById('homePage').classList.add('active');
    } else if (page === 'credits') {
        document.getElementById('creditsPage').classList.add('active');
    } else if (programs[page]) {
        renderProgramPage(page);
        const programPage = document.getElementById(`${page}Page`);
        if (programPage) {
            programPage.classList.add('active');
        }
    }

    window.scrollTo(0, 0);
}

// Toggle menú móvil
function toggleMenu() {
    const menuMobile = document.getElementById('navMenuMobile');
    const menuIcon = document.getElementById('menuIcon');
    
    menuMobile.classList.toggle('active');
    
    if (menuMobile.classList.contains('active')) {
        menuIcon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
    } else {
        menuIcon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
    }
}

// Renderizar página de programa
function renderProgramPage(programId) {
    const program = programs[programId];
    const pageElement = document.getElementById(`${programId}Page`);

    if (!pageElement || !program) {
        console.error('No se encontró la página o el programa:', programId);
        return;
    }

    pageElement.innerHTML = `
        <div class="container">
            <button class="back-btn" onclick="navigateTo('home')" style="margin-bottom: 1.5rem;">
                ← Volver al inicio
            </button>

            <div class="program-detail-body">
                <div class="program-detail-header ${program.color}">
                    <div class="program-detail-content">
                        <div class="program-detail-icon">${program.icon}</div>
                        <h1 class="program-detail-title">${program.name}</h1>
                        <p class="program-detail-type">${program.type}</p>
                    </div>
                </div>

                <div class="detail-section">
                    <h2 class="detail-title">Sobre el programa</h2>
                    <p class="detail-description">${program.description}</p>
                    <div class="program-schedule">
                        <svg class="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>${program.schedule}</span>
                    </div>
                </div>

                <div class="detail-section">
                    <h3 class="detail-title">
                        <svg class="mic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                        Podcast del programa
                    </h3>
                    <div class="audio-player podcast" data-src="${program.podcast}">
                        <div class="player-content">
                            <button class="play-btn">
                                <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </button>
                            <div class="player-info">
                                <p class="player-title">Podcast de ${program.name}</p>
                                <p class="player-type">Podcast</p>
                            </div>
                            <svg class="volume-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            </svg>
                        </div>
                        <div class="progress-bar">
                            <div class="progress"></div>
                        </div>
                    </div>
                </div>

                <div class="detail-section">
                    <h3 class="detail-title">Jingles del programa</h3>
                    <div class="jingles-grid">
                        ${program.jingles.map(jingle => `
                            <div class="audio-player jingle" data-src="${jingle.src}">
                                <div class="player-content">
                                    <button class="play-btn">
                                        <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </button>
                                    <div class="player-info">
                                        <p class="player-title">${jingle.title}</p>
                                        <p class="player-type">Jingle</p>
                                    </div>
                                    <svg class="volume-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                    </svg>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Reinicializar reproductores de audio después de renderizar
    setTimeout(() => {
        initializeAudioPlayers();
    }, 100);
}

// Inicializar reproductores de audio
function initializeAudioPlayers() {
    const players = document.querySelectorAll('.audio-player');
    
    players.forEach(player => {
        const playBtn = player.querySelector('.play-btn');
        const audioSrc = player.getAttribute('data-src');
        
        // Remover eventos anteriores para evitar duplicados
        const newPlayBtn = playBtn.cloneNode(true);
        playBtn.parentNode.replaceChild(newPlayBtn, playBtn);
        
        newPlayBtn.addEventListener('click', () => {
            if (currentAudio && currentAudio.player === player) {
                if (currentAudio.audio.paused) {
                    currentAudio.audio.play();
                    updatePlayButton(newPlayBtn, true);
                } else {
                    currentAudio.audio.pause();
                    updatePlayButton(newPlayBtn, false);
                }
            } else {
                if (currentAudio) {
                    currentAudio.audio.pause();
                    updatePlayButton(currentAudio.player.querySelector('.play-btn'), false);
                }
                
                const audio = new Audio(audioSrc);
                currentAudio = { audio, player };
                
                audio.play().catch(err => {
                    console.error('Error al reproducir audio:', err);
                });
                updatePlayButton(newPlayBtn, true);
                
                audio.addEventListener('timeupdate', () => {
                    const progress = (audio.currentTime / audio.duration) * 100;
                    const progressBar = player.querySelector('.progress');
                    if (progressBar) {
                        progressBar.style.width = `${progress}%`;
                    }
                });
                
                audio.addEventListener('ended', () => {
                    updatePlayButton(newPlayBtn, false);
                    const progressBar = player.querySelector('.progress');
                    if (progressBar) {
                        progressBar.style.width = '0%';
                    }
                });
            }
        });
    });
}

function updatePlayButton(button, isPlaying) {
    const icon = button.querySelector('svg');
    if (icon) {
        if (isPlaying) {
            icon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
            icon.classList.remove('play-icon');
            icon.classList.add('pause-icon');
        } else {
            icon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
            icon.classList.remove('pause-icon');
            icon.classList.add('play-icon');
        }
    }
}

// Generar tabla de programación
function generateScheduleTable() {
    const tbody = document.getElementById('scheduleBody');
    if (!tbody) return;
    
    const days = Object.keys(scheduleData);
    
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');
        
        // Columna de tiempo
        const timeCell = document.createElement('td');
        timeCell.className = 'schedule-time';
        timeCell.textContent = scheduleData[days[0]][i].time;
        row.appendChild(timeCell);
        
        // Columnas de programas
        days.forEach(day => {
            const cell = document.createElement('td');
            cell.className = 'schedule-cell';
            
            const programData = scheduleData[day][i];
            cell.innerHTML = `
                <div class="program-name">${programData.program}</div>
                <div class="audio-player compact" data-src="${programData.audio}">
                    <button class="play-btn">
                        <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </button>
                    <div class="progress-bar">
                        <div class="progress"></div>
                    </div>
                    <button class="more-btn">
                        <svg class="more-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                    </button>
                </div>
            `;
            
            row.appendChild(cell);
        });
        
        tbody.appendChild(row);
    }
}

// Generar tarjetas de equipo
function generateTeamCards() {
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) return;
    
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="team-photo-wrapper ${member.color}">
                <div class="team-photo-container">
                    <img src="${member.image}" alt="${member.name}" class="team-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="team-placeholder">👤</div>
                </div>
            </div>
            <h3 class="team-name">${member.name}</h3>
            <p class="team-role">${member.role}</p>
        `;
        teamGrid.appendChild(card);
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento cargado, inicializando...');
    generateScheduleTable();
    generateTeamCards();
    initializeAudioPlayers();
    navigateTo('home');
});