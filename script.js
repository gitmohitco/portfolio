const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el))
const hiddenLogo = document.querySelectorAll('.logo');
hiddenLogo.forEach((el)=> observer.observe(el))
const hiddenSk = document.querySelectorAll('.sk');
hiddenSk.forEach((el)=> observer.observe(el))
const hiddenAbout = document.querySelectorAll('.abbox');
hiddenAbout.forEach((el)=> observer.observe(el))
const hiddenText = document.querySelectorAll('.text');
hiddenText.forEach((el)=> observer.observe(el))

