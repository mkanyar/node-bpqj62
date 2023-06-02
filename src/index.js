import * as c from './animals/cat';

let fileName;

document.querySelector('input').addEventListener('input', (ev) => {
  fileName = ev.target.value;
});

document.getElementById('demo').addEventListener('click', () => {
  import(
    /* webpackChunkName: 'animal', webpackMode: 'weak' */ `./animals/${fileName}.js`
  )
    .then((m) => {
      console.warn('FILE LOADED!', m);
      m.default();
    })
    .catch(console.warn);
});
