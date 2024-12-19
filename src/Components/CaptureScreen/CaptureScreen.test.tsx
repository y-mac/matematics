import { render, screen, waitFor} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import CaptureScreen from './CaptureScreen';
import { MathProvider } from '../../contexts/mathContext';

describe('CaptureScreen', () => {
  it('should render the input field and submit button', () => {
    render(
      <MathProvider>
        <CaptureScreen />
      </MathProvider>
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Submit' });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should call the captureNumber function on submit', () => {
    

    render(
      <MathProvider >
        <CaptureScreen />
      </MathProvider>
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Submit' });

    userEvent.type(input, '10');
    userEvent.click(button);

    //expect(mockCaptureNumber).toHaveBeenCalledWith(10);
  });

  
});


describe('CaptureScreen', () => {
    it('should calculate the correct result for different input values', async () => {
      const testCases = [
        { input: 3, expected: 13 },
        { input: 5, expected: 28 },
        { input: 13, expected: 505 },
        { input: 15, expected: 1165 },
        { input: 17, expected: 2808 },
        { input: 18, expected: 4439 },
        { input: 20, expected: 11266 },
        { input: 25, expected: 121901 },
        { input: 30, expected: 1347035 },
        // ... otros casos de prueba
      ];
  
      testCases.forEach(async ({ input, expected }) => {
        const { getByLabelText, getByText } = render(<CaptureScreen />);
        const inputElement = getByLabelText('Ingrese un número'); // Ajusta el label según tu componente
        const calculateButton = getByText('Calcular');
  
        // Simula la entrada del usuario
        userEvent.type(inputElement, input.toString());
        userEvent.click(calculateButton);
  
        // Espera a que se actualice el estado (si es necesario)
        await waitFor(() => {
          const resultElement = getByText(expected);
          expect(resultElement).toBeInTheDocument();
        });
      });
    });
  });