function gcd(a, b)
{
    
    if (a == 0)
    return b;
    if (b == 0)
    return a;
 
    
    if (a == b)
        return a;
 
    
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}
console.log(gcd(4,8))