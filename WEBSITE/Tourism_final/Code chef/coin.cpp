#include<iostream>
using namespace std;
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        long long n,r;
        cin>>n;
        r=(n/2)+(n/3)+(n/4);
        if(r<n)
        {
            r=n;
        }
        cout<<r<<"\n";

    }
}
