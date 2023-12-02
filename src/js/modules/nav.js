import { NAV_MOBIL_WRAPPER, NAV_LINKS, NAV_TOGGLER } from './elements.js'

export function setUpNavActions(){
    NAV_LINKS.forEach( link => {
        link.addEventListener('click', function(){
            toggleActiveLink(link)
        }) 
    })

    NAV_TOGGLER.onclick = toggleMobilNav
}

function toggleMobilNav(){
    NAV_MOBIL_WRAPPER.classList.toggle('visible')
}

const toggleActiveLink = (function(){
    let lastActiveLink = [...NAV_LINKS].find( link => link.classList.contains('active'))

    /**
     * 
     * @param {HTMLAnchorElement} newActiveLink 
     */
    return function(newActiveLink){
        lastActiveLink.classList.remove('active')
        newActiveLink.classList.add('active')

        lastActiveLink= newActiveLink
    }
})()
