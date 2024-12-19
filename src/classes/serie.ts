export class Serie {
    constructor() {
      // No necesitamos propiedades adicionales para esta clase
    }
  
    calcularTermino(n: number) {
      // Función auxiliar para calcular el número triangular
      const triangular = (n: number) => n * (n + 1) / 2;
  
      // Función auxiliar para calcular el número primo (simplificada, puede mejorarse)
      const esPrimo = (num: number) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return num > 1;
      };
      const primo = (n: number) => {
        let contador = 0;
        let numero = 2;
        while (contador < n) {
          if (esPrimo(numero)) {
            contador++;
          }
          numero++;
        }
        return numero - 1;
      };
  
      // Función auxiliar para calcular el número de Fibonacci
      const fibonacci = (n: number) => {
        if (n <= 1) return n;
        let result:any = fibonacci(n - 1) + fibonacci(n - 2)
        return result;
      };
  
      // Calculando el término de la serie
      return 2 * triangular(n + 1) - 2 * primo(n) + fibonacci(n + 1);
    }
  }