import './heading.css';

const heading = () => {
  const h1 = document.createElement('h1');
  h1.innerText = 'Webpack <3';

  const body = document.getElementsByTagName('body')[0]
  body.appendChild(h1);
}

export default heading;