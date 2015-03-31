#include<iostream>
using namespace std;
int main()
{
    int j;
    int a[10]={9,8,7,6,5,4,3,2,1,0};
    for(int h=1;h<=9/4;h=2*h+1)
    for(;h>0;h=h/2)
    for(int i=h+1;i<10;i++)
    {
        int v=a[i];j=i;
        while(j>h&&a[j-h]>v)
        {
            a[j]=a[j-h];j=j-h;
        }
        a[j]=v;
    }
    for(int i=0;i<10;i++)
    cout<<a[i];

}
