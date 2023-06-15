function darkMode(){

    const dark = document.querySelector('#btn--dark');

    dark.addEventListener('click', function(){
        document.body.classList.toggle('dark--theme');
        if (document.body.classList.contains('dark--theme')) {
            dark.src = "./assets/img/sun.png";
        }else{
            dark.src = "./assets/img/moon.png";
        }
    })
}

export default darkMode