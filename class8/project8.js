console.log("Javascript is connected")
const year= new Date().getFullYear();
document.querySelector('.site-footer p').innerHTML=
    `&copy;${year} Keerthan. All rights reserved.`;
function getGreeeting(){
    const hour= new Date().getHours();
    if(hour < 12) return "Good Morning";
    if (hour< 17) return "Good Afternoon";
    return "Good Evening";
}
const heroTitle =document.querySelector('.hero-section h1');
if (heroTitle){
    heroTitle.textContent = `${getGreeeting()},Hi, I'm Keerthan 👋`;
}