#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    unsigned long int s,c,d,l,t;
    cin>>t;
    while(t--)
    {
        cin>>l>>d>>s>>c;
        if(s*pow((c+1),d-1)<l)
        cout<<"DEAD AND ROTTING";
        else
        cout<<"ALIVE AND KICKING";
        cout<<"\n";
    }
}

