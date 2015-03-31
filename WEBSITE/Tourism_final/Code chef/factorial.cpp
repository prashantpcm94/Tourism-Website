#include<iostream>
#include<cmath>
using namespace std;
static long int x;
int main()
{
    long t;

    cin>>t;
    while(t--)
    {
        long long int n;
        cin>>n;
        long int a=0;
        x=n;int i=1;
        while(x)
        {
            a=a+(n/pow(5,i));
            i++;
            x=n/pow(5,i);

        }

             cout<<a<<"\n";
    }
    cout<<"\n";
    return 0;

}
