import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import ButtonCounter from '../components/ButtonCounter'

const mockLabel = "mockLabel";

describe('Componente ButtonCounter', () => {
    test('Renderiza el componente con el label pasado en las props', () => {
        render(<ButtonCounter label={mockLabel} />);

        const buttonElement = screen.getByRole('button', { name: mockLabel });
        expect(buttonElement).toBeInTheDocument();
    });

    test('Incrementa el contador cuando se clica el botón', () => {
        render(<ButtonCounter label={mockLabel} />);

        const countElement = screen.getByText('Count: 0');
        expect(countElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button', { name: mockLabel });
        fireEvent.click(buttonElement);

        const updatedCountElement = screen.getByText('Count: 1');
        expect(updatedCountElement).toBeInTheDocument();
    });
});
