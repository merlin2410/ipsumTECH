const body = document.getElementsByTagName('body')[0];
body.innerHTML += `  <nav class="nav-bar">
        
<div class="home-menu">
    <a href="../index.html">Home</a>
</div>
<div class="courses" id="courses">
    <p onClick="clicked()">Courses</p>
    <ul class="course-list" id="course-list">
        <li><a href="./home.html">Kinematics, Dynamcis and Control of Robots</a></li>
        <li><a href="">Circuits and Measurement Lab</a></li>
        <li><a href="">Electrical and Electronic Workshop</a></li>
    </ul>
</div>
<div class="About">
    <a href="">About</a>
</div>     
</nav>

<aside class="side-bar" id="side-bar">
<div class="intro-to-robotics section" id="intro-to-robotics">
    <h3><a href="./intro.html">Introduction to Robotics</a></h3>
    <div class="sub-section definition" id="definition">
        <a href="./intro.html">Introduction</a>
    </div>
    <div class="sub-section history" id="history">
        <a href="./history.html">History of Robotics</a>
    </div>
</div>

<div class="line"></div>

<div class="key-aspects-robotics section" id="key-aspects-robotics">
    <h3><a href="./roboticsVsAutomation.html">Key Concepts in Robotics</a></h3>
    <div class="sub-section definition" id="definition">
        <a href="./roboticsVsAutomation.html">Automation vs Robotics</a>
    </div>
    <div class="sub-section history" id="history">
        <a href="">Robot vs Autonomous System</a>
    </div>
    <div class="sub-section history" id="history">
        <a href="">Interdisciplinary Nature of Robotics</a>
    </div>
</div>

 <div class="line"></div>


</aside>
`

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

console.log(this)

// this.addEventListener('click',()=>{
//     if(courseList.style.display==='flex'){
//         courseList.style.display = 'none';
//     }
// })

