const fixObjectFit = () => {
  const allImages = document.querySelectorAll("body img");

  allImages.forEach((element) => {
    const objFitIsCover = window.getComputedStyle(element).getPropertyValue('object-fit') === 'cover';
    const objFitIsContain = window.getComputedStyle(element).getPropertyValue('object-fit') === 'contain';

    if(objFitIsCover || objFitIsContain) {
      const parent = element.parentElement;
      const parentWidth = parseInt(window.getComputedStyle(parent).getPropertyValue('width'));
      const parentHeight = parseInt(window.getComputedStyle(parent).getPropertyValue('height'));
      const elementWidth = parseInt(window.getComputedStyle(element).getPropertyValue('width'));
      const elementHeight = parseInt(window.getComputedStyle(element).getPropertyValue('height'));
      const allProperties = {
        imgSource: element.src,
        backgroundPosition: window.getComputedStyle(element).getPropertyValue('object-position'),
        backgroundSize: window.getComputedStyle(element).getPropertyValue('object-fit'),
        width: elementWidth > 0 ? elementWidth : parentWidth,
        height: elementHeight > 0 ? elementHeight : parentHeight
      }

      element.remove();

      const newDivWithBackground = document.createElement("div");
      newDivWithBackground.className += "new-div"
      newDivWithBackground.setAttribute('style',
      `background:url(${allProperties.imgSource});
       background-position:${allProperties.backgroundPosition};
       background-size:${allProperties.backgroundSize};
       width:${allProperties.width}px;
       height:${allProperties.height}px;`
      );
      parent.appendChild(newDivWithBackground);
    }
  });
};

fixObjectFit();