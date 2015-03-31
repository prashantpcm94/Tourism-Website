#include<stdio.h>

int main()
{
    long int n,a,k,i=0;
    scanf("%ld%ld",&n,&k);
    while(n--)
    {
        scanf("%ld",&a);
        if(a%k==0)
        i++;
    }
    printf("%ld",i);
    return 0;
}
