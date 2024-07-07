function custom_render(element, container)
{
    const created_custom_element = document.createElement(element.custom_type);
    created_custom_element.innerHTML = element.custom_props.custom_textToDisplay;
    // ----------------------------------------

    //Each time we need to set the attribute explicitly in this case.
    //created_custom_element.setAttribute('href', element.custom_props.the_link_to_go);

    // -------------

    // using 'for' loop to set the attributes.
    for(const current_prop in element.custom_props)
    {
        // if(current_prop == children) continue; // OLD PRACTISE
        created_custom_element.setAttribute(current_prop, element.custom_props[current_prop]);
    }

    // ----------------------------------------
    container.appendChild(created_custom_element)
}

const custom_element = {
    custom_type: 'a', // Will be creating an anchor tag
    custom_props: {
        href: 'https://www.google.com',
        custom_textToDisplay: 'Click This Custom Anchor Tag to go to Google', // Not a good practise to name like this.
        the_link_to_go: 'https://www.google.com',
    },
    random_prop_of_no_use: 'Hello'
}

const mainElement = document.querySelector('#imp'); // The only element in inde.html and we will be injecting html to this tag.
custom_render(custom_element, mainElement);