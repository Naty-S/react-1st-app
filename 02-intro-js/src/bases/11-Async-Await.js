// 

const getImg = async () => {
  try {
    // los 'await' solo se usan dentro de un 'async'
    const prom = 'promesa sencilla';
    const awaitt = await fetch('espera que termine el fetch antes de ejecutar lo que sigue');
    // const resp = await resp.json(); // esperar a que termine porque tambien es promesa
    console.log('termine de esperar a todo lo asyncrono:', prom, awaitt);
  } catch (error) {
    console.log('falle');
  }
}

getImg();
