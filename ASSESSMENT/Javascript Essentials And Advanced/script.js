const images = [
    {
      url: "https://i0.wp.com/cookingwithlei.com/wp-content/uploads/2017/10/Salmon-salad-bowl-2.jpg?resize=5747%2C3730",
      alt: "Salad Bowl",
    },
    {
      url: "https://static.vecteezy.com/system/resources/previews/021/333/051/large_2x/bowl-with-salad-isolated-on-a-transparent-background-png.png",
      alt: "Vegatable Salad",
    },
    {
      url: "https://images5.alphacoders.com/357/thumb-1920-357914.jpg",
      alt: "Pizza",
    },
    {
      url: "https://images.alphacoders.com/130/thumb-1920-1308370.jpg",
      alt: "Pasta",
    },
    {
      url: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/2112298/600/400/m1/fpc/wm1/kz3gumzgl6hxuo8br2niijh4scw72rgaa1qm9yuyi8wvljyv1vfhsi316mimm5au-.jpg?1484062113&s=e0cc7e7b9597df273ba65fd7c69a2b3e",
      alt: "Breakfast",
    },
    {
      url: "https://img.bestrecipes.com.au/qUHdO8D1/w643-h428-cfill-q90/br/2018/02/egg-buddha-bowls-recipe-522324-1.jpg",
      alt: "Food Bowl",
    },
  ];
  
  let currentIndex = 0;
  
  const mainImage = document.getElementById('mainImage');
  const thumbnailsContainer = document.getElementById('thumbnailsContainer');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  
  function initializeSlider() {
    createThumbnails();
    updateMainImage(0);
    prevButton.addEventListener('click', showPreviousImage);
    nextButton.addEventListener('click', showNextImage);
  }
  
  function createThumbnails() {
    images.forEach((image, index) => {
      const thumbnail = document.createElement('img');
      thumbnail.src = image.url;
      thumbnail.alt = `Thumbnail: ${image.alt}`;
      thumbnail.classList.add('thumbnail');
      thumbnail.dataset.index = index;
      thumbnail.addEventListener('click', function() {
        updateMainImage(parseInt(this.dataset.index));
      });
      thumbnailsContainer.appendChild(thumbnail);
    });
  }
  
  function updateMainImage(index) {
    if (index < 0 || index >= images.length) {
      console.error('Image index out of bounds');
      return;
    }
    currentIndex = index;
    mainImage.src = images[index].url;
    mainImage.alt = images[index].alt;
    updateActiveThumbnail();
  }
  
  function updateActiveThumbnail() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
      thumb.classList.remove('active');
    });
    thumbnails[currentIndex].classList.add('active');
  }
  
  function showPreviousImage() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    updateMainImage(newIndex);
  }
  
  function showNextImage() {
    let newIndex = currentIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    updateMainImage(newIndex);
  }
  
  document.addEventListener('DOMContentLoaded', initializeSlider);