const content = {
    en: {
        title: "Christellaa - DevOps & Cybersecurity",
        desc: "Student in DevOps / Cybersecurity, automation and system security, with a growing interest for AI.",
        about: {
            title: "About Me",
            desc: [
                "I completed my first year of university studying languages (English and Japanese), but realized it was not the path I wanted to pursue.",
                "I then joined an OpenClassrooms training program to explore web development and confirm my interest in this field. I earned the “Intégrateur Développeur Web” RNCP Level 5 (Bac+2) certification.",
                "This experience led me to join 42, where I am currently pursuing the RNCP Level 7 “Expert en Architecture Informatique” program, with a focus on DevOps and cybersecurity, and a strong interest in AI.",
                "I am now looking for a 4-6 month internship to apply my skills in a professional environment."
            ]
        },
        hardSkills: [
            { type: "DevOps", skills: ["Docker", "Docker Compose", "Bash", "Linux", "Virtualization", "Microservices", "CI/CD pipeline"] },
            { type: "Monitoring", skills: ["Grafana", "Prometheus", "ELK Stack"] },
            { type: "Security", skills: ["SSL/TLS", "System & Network Security", "2FA", "Hashing", "Vault", "Tokens"] },
            { type: "Scripting", skills: ["Bash"] }
        ],
        projects_title: "Projects",
    },
    fr: {
        title: "Christellaa - DevOps & Cybersécurité",
        desc: "Étudiante en DevOps / Cybersécurité, automatisation et sécurité des systèmes, avec un intérêt croissant pour l'IA.",
        about: {
            title: "À propos de moi",
            desc: [
                "J'ai complété ma première année d'université en étudiant les langues (anglais et japonais), mais j'ai réalisé que ce n'était pas le chemin que je voulais suivre.",
                "J'ai ensuite rejoint une formation OpenClassrooms pour explorer le développement web et confirmer mon intérêt pour ce domaine. J'ai obtenu la certification RNCP Niveau 5 “Intégrateur Développeur Web” (Bac+2).",
                "Cette expérience m'a conduit à rejoindre 42, où je poursuis actuellement le programme RNCP Niveau 7 “Expert en Architecture Informatique”, avec une spécialisation en DevOps et cybersécurité, et un fort intérêt pour l'IA.",
                "Je suis maintenant à la recherche d'un stage de 4 à 6 mois pour appliquer mes compétences dans un environnement professionnel."
            ]
        },
        hardSkills: [
            { type: "DevOps", skills: ["Docker", "Docker Compose", "Bash", "Linux", "Virtualisation", "Microservices", "Pipeline CI/CD"] },
            { type: "Monitoring", skills: ["Grafana", "Prometheus", "ELK Stack"] },
            { type: "Sécurité", skills: ["SSL/TLS", "Sécurité Système & Réseau", "2FA", "Hashing", "Vault", "Tokens"] },
            { type: "Scripting", skills: ["Bash"] }
        ],
        projects_title: "Projets",
    }
};

let currentLang = 'en';

function showLang(lang) {
    currentLang = lang;
    const data = content[lang];

    document.getElementById('title').textContent = data.title;
    document.getElementById('desc').textContent = data.desc;

    document.getElementById('about').textContent = data.about.title;
    document.getElementById('about-desc').innerHTML = data.about.desc.map(line => `<p>${line}</p>`).join('');

    document.getElementById('skills').innerHTML = '';
    data.hardSkills.forEach(category => {
        const categoryElem = document.createElement('span');
        categoryElem.classList.add('skill');
        categoryElem.innerHTML = `<h3>${category.type}</h3><ul>${category.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>`;
        document.getElementById('skills').appendChild(categoryElem);
    });

    document.getElementById('projects').textContent = data.projects_title;
}

document.addEventListener('DOMContentLoaded', () => {
    showLang(currentLang);
});
