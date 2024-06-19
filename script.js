const firebaseConfig = {
    apiKey: "AIzaSyCjZ8eZet3qW53LVqpSP_B21NdY5fH_pfg",
    authDomain: "bara2024-a6eb8.firebaseapp.com",
    databaseURL: "https://bara2024-a6eb8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bara2024-a6eb8",
    storageBucket: "bara2024-a6eb8.appspot.com",
    messagingSenderId: "647208776082",
    appId: "1:647208776082:web:df62c25fca4ebef478d14b",
    measurementId: "G-PWZ269MVD8"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function fetchAllGalleryImages() {
    console.log('Fetching all gallery images.');
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear the gallery

    database.ref('galleryImages').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            const data = childSnapshot.val();
            const img = document.createElement('img');
            img.src = data.url;
            img.classList.add('img'); // Add your custom CSS class if needed

            const imageContainer = document.createElement('div');
            imageContainer.appendChild(img);

            gallery.appendChild(imageContainer);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAllGalleryImages();
});
