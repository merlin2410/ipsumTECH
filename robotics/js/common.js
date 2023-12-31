const body = document.getElementsByTagName('body')[0];
body.innerHTML += `  <nav class="nav-bar">

<div class="topics-icon" id="topics-icon">
        <span class="material-symbols-outlined">
            menu
            </span>
</div>

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
    <div class="sub-section robot-types" id="robot-types">
        <a href="./robotTypes.html">Types of Robots</a>
    </div>
</div>

<div class="line"></div>

<div class="key-aspects-robotics section" id="key-aspects-robotics">
    <h3><a href="./roboticsVsAutomation.html">Key Concepts in Robotics</a></h3>
    <div class="sub-section automationVsRobotics" id="automationVsRobotics">
        <a href="./roboticsVsAutomation.html">Automation vs Robotics</a>
    </div>
    <div class="sub-section hardSoft" id="hardSoft">
        <a href="./hardVsSoftAutomation.html">Hard vs Soft Automation</a>
    </div>
    <div class="sub-section interdisciplinary" id="interdisciplinary">
        <a href="./interdisciplinary.html">Interdisciplinary Nature of Robotics</a>
    </div>

    <div class="sub-section dof" id="dof">
        <a href="./dof.html">Degrees of Freedom</a>
    </div>
</div>

 <div class="line"></div>

 <div class="robot-anatomy section" id="robot-anatomy">
    <h3><a href="./anatomy.html">Robot Anatomy</a></h3>
    <div class="sub-section links" id="links">
        <a href="./links.html">Links</a>
    </div>
    <div class="sub-section joints" id="joints">
        <a href="./joints.html">Joints</a>
    </div>
    <div class="sub-section end-effector" id="end-effector">
        <a href="./endEffectors.html">End Effectors</a>
    </div>
    <div class="sub-section kinematic-chain" id="kinematic-chain">
        <a href="./kinematicChain.html">Open vs Closed Kinematic Chain</a>
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

const head = document.getElementsByTagName("head")[0];
head.innerHTML += `<link
rel="stylesheet"
href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>`


const sideBar = document.getElementById("side-bar");
topicsIcon = document.getElementById("topics-icon");
topicsIcon.addEventListener('click',()=>{
    if(screen.width<=820){
        if(sideBar.style.display==='none'){
            sideBar.style.display = 'flex';
        }
        else{
            sideBar.style.display = 'none';
        }
    
    }
    
})