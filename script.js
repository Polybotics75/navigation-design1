//NAV 1 SCRIPTS
function removeNav1Active(){
    var allNavTabs = document.querySelectorAll('.nav1');
    allNavTabs.forEach(navTab => {
        if(navTab.classList.contains('active')){
            navTab.classList.remove('active');
        }
    });
}

function switchNav1(e){
    var anchor = e.target.closest('.nav1');
    var clickId = anchor.getAttribute('id');
    
    //CLEAR ACTIVE
    removeNav1Active();
    
    //MAKE CLICKED ACTIVE
    var clickedNav = document.querySelector(`.nav1#${clickId}`);
    clickedNav.classList.add('active');
}




//NAV 2 SCRIPTS
function removeNav2Active(){
    var allNavTabs = document.querySelectorAll('.nav2');
    allNavTabs.forEach(navTab => {
        if(navTab.classList.contains('active')){
            navTab.classList.remove('active');
        }
    });
}

function switchNav2(e){
    var anchor = e.target.closest('.nav2');
    var clickId = anchor.getAttribute('id');
    
    //CLEAR ACTIVE
    removeNav2Active();
    
    //MAKE CLICKED ACTIVE
    var clickedNav = document.querySelector(`.nav2#${clickId}`);
    clickedNav.classList.add('active');
}




//NAV 3 SCRIPTS
function removeNav3Active(){
    var allNavTabs = document.querySelectorAll('.nav3');
    allNavTabs.forEach(navTab => {
        if(navTab.classList.contains('active')){
            navTab.classList.remove('active');
        }
    });
}

function switchNav3(e){
    var anchor = e.target.closest('.nav3');
    var clickId = anchor.getAttribute('id');

    //CLEAR ACTIVE
    removeNav3Active();
    
    //MAKE CLICKED ACTIVE
    var clickedNav = document.querySelector(`.nav3#${clickId}`);
    clickedNav.classList.add('active');
}






//NAV 4 SCRIPTS
function removeNav4Active(){
    var allNavTabs = document.querySelectorAll('.nav4');
    allNavTabs.forEach(navTab => {
        if(navTab.classList.contains('active')){
            navTab.classList.remove('active');
        }
    });
}

function switchNav4(e){
    var anchor = e.target.closest('.nav4');
    var clickId = anchor.getAttribute('id');

    //CLEAR ACTIVE
    removeNav4Active();
    
    //MAKE CLICKED ACTIVE
    var clickedNav = document.querySelector(`.nav4#${clickId}`);
    clickedNav.classList.add('active');
}





