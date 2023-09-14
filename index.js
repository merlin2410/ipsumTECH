const courses = document.getElementById('courses');
const courseList = document.getElementById('course-list');

function clicked(){
    if(courseList.style.display==='none'){
        courseList.style.display = 'flex';
    }
    else{
        courseList.style.display = 'none';
    }
}

// this.addEventListener('click',()=>{
//     if(courseList.style.display==='flex'){
//         courseList.style.display = 'none';
//     }
// })