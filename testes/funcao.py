def is_even(n):
    """
    Retorna True se o argumento for par.
    """
    return n % 2 == 0
        
def is_odd(n):
    """
    Retorna True se o argumento for ímpar.
    """
    return n % 2 != 0
        
def sqrt(x):
    """
    Calcula a raiz quadrada de x.
    """
    r = 1
    for _ in range(200):
        r = 0.5 * (r + x/r) 
    return r
    
def fibo(n):
    """
    Retorna uma lista com os n primeiros numeros de 
    Fibonacci.
    """
    x, y = 1, 1
    numeros = []
    for i in range(n):
        y = x + y
        x = y
    return [x, y]
    
