#include<iostream>
using namespace std;
int main()
{
    long int n,t;
    cin>>t;
    while(t--)
    {
        cin>>n;
        if(n%2==1)
        cout<<n-1;
        else
        cout<<n;
        cout<<"\n";

    }
    return 0;
}
