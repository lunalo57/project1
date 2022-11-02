// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const rounds = document.querySelectorAll(".round");
window.addEventListener('mousemove', (e) => {
    rounds.forEach((round) => {
        round.style.top = e.pageY + "px";
        round.style.left = e.pageX + "px";
    })
})