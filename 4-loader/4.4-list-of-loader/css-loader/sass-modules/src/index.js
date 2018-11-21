import jsonFormat from 'json-format';
import classNames from 'classnames';
import styles from './Home.scss';

var JSON_CONFIG = {
  type: 'space',
  size: 2
};

document.body.innerHTML = /* html */ `
  <h1 class="${classNames('title', styles.title)}">
    Hello World
  </h1>
  <p class="${classNames('paragraph', styles.paragraph)}">Hello World</p>
  <pre class=${styles.json}>${jsonFormat(styles, JSON_CONFIG)}</pre>
`;
