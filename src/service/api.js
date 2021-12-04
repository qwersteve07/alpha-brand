import axios from 'axios';

axios.get('http://localhost:1337/articles').then(response => {
  console.log(response);
});
