const loader = document.getElementById('loader')
const logo = document.querySelector('#loader #logo')

export function onLoaded(){
    logo.onanimationiteration = () =>{
        loader.classList.add('loaded')        
    }

    loader.onanimationend = () => { 
        loader.classList.add('hidden') 
    }
}