// Como al hacer la peticion de los gifs se ejecuta el codigo cada vez que se coloque en la
// pag, si se coloca este codigo en el mismo archivo/nivel de la pag principal (GifExpertApp)
// se crearia un ciclo infinito porque dispararia la re-renderizacion con cada peticion o
// alguna otra funcion que se tenga en la pag
// Para evitarlo se usa el hook 'useEffec'

export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_small.url // si vienen las imagenes entonces usa ese tamanio?
    }
  });

  return gifs;
}
