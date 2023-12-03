import {setUpNavActions} from './modules/nav.js';
import {onLoaded} from './modules/loader.js'

setUpNavActions()
document.addEventListener('readystatechange', (e)=>{
    // if(document.readyState == 'loading') 
    if(document.readyState == 'complete') onLoaded()
})