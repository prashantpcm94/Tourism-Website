#include<iostream>
using namespace std;
int main()
{
   float b;
   int w;
    cin>>w>>b;
    cout.precision(6);
    if((w>0&&b>=0)&&(w<=2000&&b<=2000))
    {
    if(w<b)
    {
        if(w%5==0)
        cout<<(b-w-.05);
        else
        cout<<b;
    }
    else
    cout<<b;
    }
    return 0;
}
