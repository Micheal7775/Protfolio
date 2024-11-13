// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Delay skill bar animation slightly to ensure smooth scroll finishes
        setTimeout(animateSkillBars, 500);
    });
});

// Function to animate skill bars
function animateSkillBars() {
    const skills = [
        { id: 'core-java', width: '90%' },
        { id: 'sql', width: '80%' },
        { id: 'spring-boot', width: '70%' },
        { id: 'html5', width: '85%' },
        { id: 'css3', width: '75%' },
        { id: 'javascript', width: '65%' }
    ];

    skills.forEach(skill => {
        const element = document.getElementById(skill.id);
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            element.style.width = skill.width;
        }
    });
}

// Trigger skill bar animation on scroll or load if in view
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);