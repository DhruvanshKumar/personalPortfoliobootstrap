function downloadResume(){
    const link = document.createElement('a');
    link.href = 'docs/Dhruvansh_Resume.pdf';
    link.download = 'Dhruvansh_Resume.pdf';
    link.click();
}