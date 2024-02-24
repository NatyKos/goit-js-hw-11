const gallery = document.querySelector('.gallery');
function newImages({ largeImageURL, webformatURL, tags }) {
    return `<a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"/></a>`
};
export function createGallery(elements) {
    const markup = elements.map(newImages).join('');
    return gallery.insertAdjacentHTML('beforeEnd', markup);
};

     

// gallery.insertAdjacentHTML('beforeEnd', createGallery);
//     // searchImages()
//     //     .then(data => {
//             // const image = data.hits;
//             const images = data.hits.map(({ webformatURL }) => {
                
//             })
//                 .join('')
           
//         }
// //     )
// // }
