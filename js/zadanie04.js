// 1
var sample_class = document.getElementsByClassName('sample_class');

function getTagsOfElements(elements) {
    
    tags = [];
    
    for (let i = 0; i < elements.length; i++) {
        tags.push(elements[i].tagName);
        
    }

    return tags
}

getTagsOfElements(sample_class);


// 2

var sample_id = document.getElementById('sample_id');

function getClassesOfElement(element) {
    listOfClasses = [];   
   
    for (let i = 0; i < element.classList.length; i++) {

        listOfClasses.push(element.classList[i]);
        
    }
    return listOfClasses

}

getClassesOfElement(sample_id);

// 3

var sample_class_2 = document.getElementsByClassName('sample_class_2')[0].getElementsByTagName("li");

function getInnerTextsOfElements(elements) {

    liTexts = [];

    for (let i = 0; i < elements.length; i++) {
        
        liTexts.push(elements[i].innerText);

        
    }
    return liTexts


}

getInnerTextsOfElements(sample_class_2);

// 4

var links = document.getElementsByTagName('a');

function getAddressesOfElements(elements) {

    linksList = [];
    for (let i = 0; i < links.length; i++) {
        linksList.push(links[i].href);
    
    }
    
    return linksList

}

getAddressesOfElements(links);

// 5

var allChildren = document.getElementsByClassName('sample_class_3')[0].children;

getTagsOfElements(allChildren);