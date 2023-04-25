import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  it('deve inserir "linda" e "legal" nos comentarios', () => {
    const { debug } = render(<PostComment />);
    // render(<PostComment />);
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'linda',
      },
    });
    fireEvent.click(screen.getByTestId('btn-cadastrar'));

    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'legal',
      },
    });
    fireEvent.click(screen.getByTestId('btn-cadastrar'));

    expect(screen.getByText('linda')).toBeInTheDocument();
    expect(screen.getByText('legal')).toBeInTheDocument();
    debug();
  });
});
