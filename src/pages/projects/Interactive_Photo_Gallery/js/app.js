window.addEventListener('load', function() {
  baguetteBox.run('.gallery');
});

const captions = [
  '',

 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',

 'The lake was so calm today. We had a great view of the snow on the mountains from here.',

 'Canyon I hiked to the top of the mountain and got this picture of the canyon and trees below.',

 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.',

 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',

 'Fall is coming, I love when the leaves on the trees start to change color.',

 'I drove past this plantation yesterday, everything is so green!',

 'My summer vacation to the Oregon Coast. I love the sandy dunes!',

 'We enjoyed a quiet stroll down this countryside lane.',

 'Sunset at the coast! The sky turned a lovely shade of orange.',

 'I did a tour of a cave today and the view of the landscape below was breathtaking.',

 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
];


// * @param {array} - indicates to use an array as an argument
// * the 'images' variable is equal to nothing
// * the counter loop runs as many times as there are captions 
// * each time a loop is completed, an image is output for display
// * i is used as a reference to inject each image and array caption to its match
// * @returns {image} each image is numbered from 1 - ~.

const getImages = (array) => {
    let images = ''; 
        for (let i = 1; i < array.length; i++) {
            images += `<a href="images/${i}.jpg" class="image" data-caption="${array[i]}"> 
                          <img src="images/thumbnails/${i}.jpg">
                       </a>`;
        }
        return images; 
};  
document.querySelector('.gallery').innerHTML = `${getImages(captions)}`;



// * userInput is the value of what the user types in the input/searchBar
// * the for loops runs as many times as there are images 
// * the dataCaption variable retrieves each data-caption attribute per image
  /*   when userInput is activated, the if statement checks whether any of the characters 
 match the data-caption attribute and pulls each image that does while hiding images that don't match */

let searchBar = document.querySelector('.search');
let image = document.querySelectorAll('.image');

const searchFilter = () => {
    let userInput = searchBar.value.toLowerCase();

    for (let i = 0; i < image.length; i++){
      let dataCaption = image[i].getAttribute('data-caption').toLowerCase();

      if (dataCaption.includes(userInput)) {
        image[i].style.display = 'block';
      } else {
        image[i].style.display = 'none';
      }
    }
  };
 searchBar.addEventListener('keyup', searchFilter); 