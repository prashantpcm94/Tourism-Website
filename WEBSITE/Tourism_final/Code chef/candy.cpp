#include<iostream>
using namespace std;
int main()
{
    unsigned long long t,n,k;
    cin>>t;
    while(t--)
    {
        cin>>n>>k;
        if(k!=0)
        {
        cout<<n/k<<" ";
        cout<<n%k;
        }
        else
        cout<<0<<" "<<n;

    }

    cout<<"\n";
    return 0;
}
