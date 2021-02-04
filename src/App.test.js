import { render, screen, queryByAttribute, queryAllByAttribute, within } from '@testing-library/react';
import App from './App';


const getById = queryByAttribute.bind(null, 'id');
const getAllByClass = queryAllByAttribute.bind(null, 'className');

test('has a drum-machine container', () => {
  const dom = render(<App />);

  const drumMachine = getById(dom.container, "drum-machine");
  expect(drumMachine).toBeInTheDocument();
});

test('has a display element in the drum machine', () => {
  const dom = render(<App />);
  const drumMachine = getById(dom.container, "drum-machine");
  const display = getById(drumMachine, "display");
  expect(display).toBeInTheDocument();
});

test('expect the drum machine to have a Q element', () => {
  const dom = render(<App />);
  const drumMachine = getById(dom.container, "drum-machine");
  const qPad = getById(drumMachine, "Q");
  expect(qPad).toBeInTheDocument();
});

test('expect the drum machine to have a W element', () => {
  const dom = render(<App />);
  const drumMachine = getById(dom.container, "drum-machine");
  const wPad = getById(drumMachine, "W");
  expect(wPad).toBeInTheDocument();
});

test('expect the drum machine to have a E element', () => {
  const dom = render(<App />);
  const drumMachine = getById(dom.container, "drum-machine");
  const ePad = getById(drumMachine, "E");
  expect(ePad).toBeInTheDocument();
});

test('expect the drum machine to have a A element', () => {
  const dom = render(<App />);
  const drumMachine = getById(dom.container, "drum-machine");
  const aPad = getById(drumMachine, "A");
  expect(aPad).toBeInTheDocument();
});

test('expect the drum machine to have a S element', () => {
  const dom = render(<App />);
  const drumMachine = getById(dom.container, "drum-machine");
  const sPad = getById(drumMachine, "S");
  expect(sPad).toBeInTheDocument();
});

test('expect the drum machine to have a D element', () => {
  const dom = render(<App />);
  const drumMachine = getById(dom.container, "drum-machine");
  const dPad = getById(drumMachine, "D");
  expect(dPad).toBeInTheDocument();
});

test('expect the drum machine to have a Z element', () => {
  const dom = render(<App />);
  const drumMachine = getById(dom.container, "drum-machine");
  const zPad = getById(drumMachine, "Z");
  expect(zPad).toBeInTheDocument();
});

test('expect the drum machine to have a X element', () => {
  const dom = render(<App />);
  const drumMachine = getById(dom.container, "drum-machine");
  const xPad = getById(drumMachine, "X");
  expect(xPad).toBeInTheDocument();
});

test('expect the drum machine to have a C element', () => {
  const dom = render(<App />);
  const drumMachine = getById(dom.container, "drum-machine");
  const cPad = getById(drumMachine, "C");
  expect(cPad).toBeInTheDocument();
});

