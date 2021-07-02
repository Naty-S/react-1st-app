import React from 'react';
// import { shallow } from 'enzyme'

import CounterApp from '../CounterApp';


describe('Pruebas en el <CounterApp />', () => {

  // let wrapper = shallow(<CounterApp />); // global cuando no necesito pasar 'value'

  beforeEach(() => { // Se ejecuta antes de cada pruba
    // wrapper = shallow(<CounterApp />);
  });

  test('debe de mostrar <CounterApp /> correctamente', () => {

    // expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el valor por defecto de 100 ', () => {

    // const wrapper = shallow(<CounterApp value={100} />);
    // const counterText = wrapper.find('h2').text().trim(); // .trim para quitar los espacios

    // expect(counterText).toBe('100');
  })

  test('debe de incrementar con el botón +1', () => {

    // wrapper.find('button').at(0).simulate('click');
    // const counterText = wrapper.find('h2').text().trim();
    // expect(counterText).toBe('11');
  })

  test('debe de decrementar con el botón -1', () => {

    // No da 9 porque al ejecutar la prueba anterior queda guardado el 11, y luego ejecuta esta y seria 10
    // para eso se usa el 'beforeEach' definido arriba, se inicializa con ese valor cada prueba

    // wrapper.find('button').at(2).simulate('click');
    // const counterText = wrapper.find('h2').text().trim();
    // expect(counterText).toBe('9');
  });

  test('debe de colocar el valor por defecto con el btn reset', () => {

    // const wrapper = shallow(<CounterApp value={105} />);

    // wrapper.find('button').at(0).simulate('click'); // Cambio el valor que le paso para ver que realmente se resetee
    // wrapper.find('button').at(0).simulate('click');
    // wrapper.find('button').at(1).simulate('click');

    // const counterText = wrapper.find('h2').text().trim();

    // expect(counterText).toBe('105');
  })
})
