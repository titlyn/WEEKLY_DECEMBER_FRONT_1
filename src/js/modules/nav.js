/**
 * 
 * @param {HTMLAnchorElement[]} links 
 */
export function setUpNavLinkClick(links){
    links.forEach( link => {
        link.addEventListener('click', function(){
            toggleActiveLink(link)
        }) 
    })
}