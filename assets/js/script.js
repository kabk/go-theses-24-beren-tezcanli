// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function() {

// functions go here

navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        var videoElement = document.getElementById('camera-preview');
        videoElement.srcObject = stream;

        // Apply CSS filter for black and white effect
        videoElement.style.filter = 'grayscale(100%)';
        videoElement.style.filter = 'brightness(70%)';
    })
    .catch(function (error) {
        console.error('Error accessing the camera:', error);
    });
    
    document.getElementById('aki-hoshide').addEventListener('click', function() {
        var img = document.getElementById('aki-hoshide-img');
        var caption = document.getElementById('caption');
    
        img.style.display = (img.style.display === 'none' || img.style.display === '') ? 'block' : 'none';
    
        if (img.style.display === 'block') {
            caption.style.display = 'block'; // Show caption when image is visible
        } else {
            caption.style.display = 'none'; // Hide caption when image is not visible
        }
    });


    document.getElementById('“selfish”').addEventListener('click', function() {
        var img = document.getElementById('kardashian-img');
        var caption = document.getElementById('caption-2');

        img.style.display = (img.style.display === 'none' || img.style.display === '') ? 'block' : 'none';


        if (img.style.display === 'block') {
            caption.style.display = 'block'; // Show caption when image is visible
        } else {
            caption.style.display = 'none'; // Hide caption when image is not visible
        }
    });

    document.getElementById('camper').addEventListener('click', function() {
        var img = document.getElementById('camper-img');
        var caption = document.getElementById('caption-3');

        img.style.display = (img.style.display === 'none' || img.style.display === '') ? 'block' : 'none';


        if (img.style.display === 'block') {
            caption.style.display = 'block'; // Show caption when image is visible
        } else {
            caption.style.display = 'none'; // Hide caption when image is not visible
        }
    });

    document.getElementById('blas').addEventListener('click', function() {
        var img = document.getElementById('zach-blas-img');
        var caption = document.getElementById('caption-4');

        img.style.display = (img.style.display === 'none' || img.style.display === '') ? 'block' : 'none';


        if (img.style.display === 'block') {
            caption.style.display = 'block'; // Show caption when image is visible
        } else {
            caption.style.display = 'none'; // Hide caption when image is not visible
        }
    });

    document.getElementById('belfort').addEventListener('click', function() {
        var img = document.getElementById('movie-scene-img');
        var caption = document.getElementById('caption-5');

        img.style.display = (img.style.display === 'none' || img.style.display === '') ? 'block' : 'none';


        if (img.style.display === 'block') {
            caption.style.display = 'block'; // Show caption when image is visible
        } else {
            caption.style.display = 'none'; // Hide caption when image is not visible
        }
    });

    document.getElementById('naomi').addEventListener('click', function() {
        var img = document.getElementById('movie-scene-img');
        var caption = document.getElementById('caption-5');

        img.style.display = (img.style.display === 'none' || img.style.display === '') ? 'block' : 'none';


        if (img.style.display === 'block') {
            caption.style.display = 'block'; // Show caption when image is visible
        } else {
            caption.style.display = 'none'; // Hide caption when image is not visible
        }
    });

    document.getElementById('rigged').addEventListener('click', function() {
        var img = document.getElementById('Kate-cooper-img');
        var caption = document.getElementById('caption-6');

        img.style.display = (img.style.display === 'none' || img.style.display === '') ? 'block' : 'none';


        if (img.style.display === 'block') {
            caption.style.display = 'block'; // Show caption when image is visible
        } else {
            caption.style.display = 'none'; // Hide caption when image is not visible
        }
    });

    document.getElementById('Shudu').addEventListener('click', function() {
        var img = document.getElementById('shudu-img');
        var caption = document.getElementById('caption-7');

        img.style.display = (img.style.display === 'none' || img.style.display === '') ? 'block' : 'none';


        if (img.style.display === 'block') {
            caption.style.display = 'block'; // Show caption when image is visible
        } else {
            caption.style.display = 'none'; // Hide caption when image is not visible
        }
    });

    document.getElementById('Miquela').addEventListener('click', function() {
        var img = document.getElementById('miquela-img');
        var caption = document.getElementById('caption-8');

        img.style.display = (img.style.display === 'none' || img.style.display === '') ? 'block' : 'none';


        if (img.style.display === 'block') {
            caption.style.display = 'block'; // Show caption when image is visible
        } else {
            caption.style.display = 'none'; // Hide caption when image is not visible
        }
    });
    
    
    
 
    });

  

