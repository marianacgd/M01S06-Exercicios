const obterPersonagens = async () => {
  const url = 'https://rickandmortyapi.com/api/character';

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener('load', async () => {
  const data = await obterPersonagens();

  const lista = document.getElementById('lista');
  // if(data){
  //   return
  // }

  const item = document.createElement('li');
  item.innerText = 'Falha ao obter dados';
  lista.appendChild(item);
});
