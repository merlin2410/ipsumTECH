const courses = document.getElementById('courses');
const courseList = document.getElementById('course-list');

courses.addEventListener('mouseenter',()=>{
    courseList.style.display = 'flex';
})

courseList.addEventListener('mouseleave',()=>{
    courseList.style.display='none';
})