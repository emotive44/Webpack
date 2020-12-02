import image from './image.png';

const importImg = () => {
  const body = document.getElementsByTagName('body')[0];
  const img = document.createElement('img');
  img.width = 300;
  img.src = image;

  body.appendChild(img)
}

export default importImg;
