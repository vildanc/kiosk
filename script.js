// Resimlerin büyüdüğü ve sayfanın geri kalanının saydamlaştığı fonksiyon
function expandImage(event) {
    const image = event.target;
    const expandedImage = document.createElement("img");
    expandedImage.src = image.src;
    expandedImage.alt = image.alt;
    expandedImage.classList.add("expanded-image");
  
    const transparentBackground = document.createElement("div");
    transparentBackground.classList.add("transparent-background");
    transparentBackground.appendChild(expandedImage);
  
    document.body.appendChild(transparentBackground);
  
    transparentBackground.addEventListener("click", function () {
      document.body.removeChild(transparentBackground);
    });
  }
  
  // Tüm resimlere tıklama olayını ekleyin
  const imageWrappers = document.querySelectorAll(".hex-column img");
  imageWrappers.forEach(function (wrapper) {
    wrapper.addEventListener("click", expandImage);
  });
  

