function downloadResume(){
    const link = document.createElement('a');
    link.href = 'docs/Dhruvansh_Resume.pdf';
    link.download = 'Dhruvansh_Resume.pdf';
    link.click();
}
function scrollToSection() {
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
}
function openWebsite(){
    const link = document.createElement('a');
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.href = 'https://dhruvansh.vercel.app';
    link.click();
}
function openGithub1(){
    const link = document.createElement('a');
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.href = 'https://github.com/DhruvanshKumar/personalPortfoliobootstrap';
    link.click();
}
function openWebsite2(){
    alert("Oops!! Website under development. You can still view its GitHub");
}
function openGithub(){
    const link = document.createElement('a');
    link.href = 'https://github.com/DhruvanshKumar/DineOnTime.git';
    link.target = '_blank';
    link.rel = 'noopener noreferrer'
    link.click();
}