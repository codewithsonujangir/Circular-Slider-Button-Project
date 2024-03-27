// My Project no. #4




document.addEventListener ("DOMContentLoaded", ()=> {
    // get all circle-div elements
    const all_circle_el = document.querySelectorAll (".circle-div");
    // forEach loop
    all_circle_el.forEach ( circle_el => {
        // add onclick function to each circle-div
        circle_el.addEventListener ("click", ()=> {
            // add function
            toggleClassToCircle(circle_el);
        });
    });
});




function toggleClassToCircle (el) {
    // get parent node id of el (circle-div)
    const parent_id = el.parentNode.id;
    // toggle class
    el.classList.toggle (`${parent_id}-slide-anim`);
    
    const slider_cover = getCoverSibling(el);
toggleClassToCover (slider_cover);
}





function toggleClassToCover (el) {
    el.classList.toggle ("cover-slide-anim");
}



function getCoverSibling (circle_el) {
    // Get reference to the parent element (.slider-container)
    const slider_container = circle_el.parentNode;
    // Get reference to .slider-cover within the same parent element
    const slider_cover = slider_container.querySelector('.slider-cover');
    
    return slider_cover;
}




