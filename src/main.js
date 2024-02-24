import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchImages } from './js/pixabay-api';
import { createGallery } from './js/render-function';
import icon from './img/icon.svg'

export const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const QUERY = form.search.value.trim().replace(/\s/g, "+");
        if (QUERY && QUERY !== '') {       
            searchImages(QUERY)
                .then(data => {
                    if (data.total !== 0) {
                        createGallery(data.hits)
                        const lightbox = new SimpleLightbox('.gallery a');
                        lightbox.refresh();
                    } else {
                        iziToast.show({
                            iconUrl: icon,
                            message: `Sorry, there are no images matching your search query. Please try again!`,
                            messageColor: '#ffffff',
                            color: '#FF6868',
                            position: 'topRight',
                            progressBarColor: '#ffffff',
                            close: false
                        })
                    }
                })
            .catch (error => console.log(error));
    }
    form.reset();
}
)     


