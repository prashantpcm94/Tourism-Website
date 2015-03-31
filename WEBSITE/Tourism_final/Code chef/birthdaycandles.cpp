#include<iostream>
#include<cmath>
using namespace std;
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int a[10];int min=1000000,j,k=0;
        for(int i=0;i<10;i++)
        {
            cin>>a[i];
            if(a[i]<min)
            {min=a[i];j=i;}

        }
        if(j==0)
        for(int i=1;i<10;i++)
        {
            if(a[i]==a[0])
            {j=i;
            break;}
        }
        if(j==0)
        {
            a[j]++;
                cout<<1;
                while(a[j]--)
                cout<<0;
                cout<<"\n";

        }
        else if(j!=0)
        {

            a[j]++;
                while(a[j]--)
                cout<<j;
                cout<<"\n";

        }

    }
}
