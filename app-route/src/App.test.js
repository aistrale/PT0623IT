import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

// Singolo Test
test('renders HomePage react link', () => {
  // Effettuo il montaggio del componente React che voglio testare
  render(<App />);
  // Leggo un testo 'HomePage' nel componente caricato nel virtual dom
  const linkElement = screen.getByText(/HomePage/i);
  // Asserzione | Verifico se è contentuto un testo dentro linkElement
  expect(linkElement).toBeInTheDocument();
});


// Gruppo di test
describe('Renders Users Page', () => {
  // Singolo Test
  it('renders UsersPage react link', () => {
    // Effettuo il montaggio del componente React che voglio testare
    render(<App />);
    // Seleziono un elemento che ha un attributo title con valore 'users'
    const usersLink = screen.getByTitle('users');
    // Effetua un click sul nodo selezionato
    fireEvent.click(usersLink)
    // Leggo un testo 'Users' nel componente caricato nel virtual dom
    const linkElement = screen.getByRole('heading',  { name: 'Users'})
    // Asserzione | Verifico se è contentuto un testo dentro linkElement
    expect(linkElement).toBeInTheDocument();
  });

  // Singolo Test
  it('Renders all the 10 Users', async () => {
    // Effettuo il montaggio del componente React che voglio testare
    render(<App />);
    // Seleziono un elemento che ha un attributo title con valore 'users'
    const usersLink = screen.getByTitle('users');
    // Effetua un click sul nodo selezionato
    fireEvent.click(usersLink)
    // Leggo un array di elementi con un test-id di nome 'user-element'
    // presenti nel componente caricato nel virtual dom
    const allTheUsers = await screen.findAllByTestId('user-element');
    // Asserzione | Verifico se è contentuto un testo dentro linkElement
    expect(allTheUsers).toHaveLength(10);
  })

})

// Gruppo di test
describe('Filter Testing', () => {
  // Singolo Test
  it('Search User Clem...', async () => {
    render(<App />);
    const inputNode = screen.getByPlaceholderText('Search User');
    fireEvent.change(inputNode, {target: {value: 'Clem'}})
    const allTheUsers = await screen.findAllByTestId('user-element');
    expect(allTheUsers).toHaveLength(2);
  })
})











