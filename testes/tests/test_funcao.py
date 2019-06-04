from funcao import is_even, is_odd, sqrt


def test_funcao_is_even():
    assert is_even(2) is True
    assert is_even(3) is False
    
def test_funcao_is_odd():
    assert is_odd(2) is False
    assert is_odd(3) is True
        
def test_is_even_different_from_is_odd():
    assert is_even(2) != is_odd(2)
    assert is_even(3) != is_odd(3)
    
def test_sqrt():
    tol = 1e-6
    assert abs(sqrt(0)) < tol
    assert abs(sqrt(1) - 1) < tol
    assert abs(sqrt(2) - 1.4142135) < tol
    assert abs(sqrt(9) - 3) < tol
