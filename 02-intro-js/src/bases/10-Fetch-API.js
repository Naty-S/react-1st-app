// la key no esta activa, pero no me creare cuenta en giphy para esto

const apiKey = 'C1khQe3Z7R1W2lfT09myKeuShdqFYSGC';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then(resp => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  }
  ) // promesas en cadena, agarra lo que retorno arriba
  .catch(console.warn); // se puede con los catch, pero este ultimo lo agarra todo

