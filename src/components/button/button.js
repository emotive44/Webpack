import './button.css';
import './button.scss';
import './secondStyles.css';

const button = () => {
  let i = 0;
  const button = document.createElement('button');
  button.className = 'btn'
  button.innerText = 'Click';

  const div = document.createElement('div');

  button.onclick = function() {
    const p = document.createElement('p');
    p.innerText = `clicked ${++i} times`;
    div.appendChild(p);
  }

  const body = document.getElementsByTagName('body')[0];
  body.appendChild(button);
  body.appendChild(div);
}

export default button;
