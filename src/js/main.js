import {setUpNavActions} from './modules/nav.js';
import {onLoaded} from './modules/loader.js'
import {setUpScrollSpy} from './modules/scrollspy.js'

setUpNavActions()
document.addEventListener('readystatechange', (e)=>{
    // if(document.readyState == 'loading') 
    if(document.readyState == 'complete') {
        onLoaded()
        setUpScrollSpy()
    }
})