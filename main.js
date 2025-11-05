// This file contains the JavaScript code that adds interactivity to the website.
// It fetches data from the lessons.json file and dynamically updates the content on the page.

document.addEventListener('DOMContentLoaded', () => {
    fetchLessons();
});

function fetchLessons() {
    fetch('./data/lessons.json')
        .then(response => response.json())
        .then(data => {
            displayLessons(data);
        })
        .catch(error => {
            console.error('Error fetching lessons:', error);
        });
}

function displayLessons(lessons) {
    const lessonsContainer = document.getElementById('lessons-container');
    lessons.forEach(lesson => {
        const lessonCard = createLessonCard(lesson);
        lessonsContainer.appendChild(lessonCard);
    });
}

function createLessonCard(lesson) {
    const card = document.createElement('div');
    card.className = 'lesson-card';
    
    const title = document.createElement('h3');
    title.textContent = lesson.title;
    
    const description = document.createElement('p');
    description.textContent = lesson.description;
    
    const link = document.createElement('a');
    link.href = lesson.url;
    link.textContent = 'Learn More';
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);
    
    return card;
}