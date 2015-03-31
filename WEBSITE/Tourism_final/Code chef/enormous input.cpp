#include<iostream>
using namespace std;
int main()
{
    long int n,a,k,i=0;
    cin>>n>>k;
    while(n--)
    {
        cin>>a;
        if(a%k==0)
        i++;
    }
    cout<<i;
}
