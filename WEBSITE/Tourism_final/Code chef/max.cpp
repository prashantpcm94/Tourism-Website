#include<iostream>
using namespace std;
int main()
{
    long int n;
    cin>>n;
    while(n--)
    {
        long int t;int i;
        cin>>t;
        long long a[t];
        long long max=-1000000,maxb=0;
        for( i=0;i<t;i++)
        {
            cin>>a[i];
            if(a[i]>max)
            max=a[i];
        }
        int b[max+1];
        for( i=0;i<=max;i++)
        b[i]=0;
        for( i=0;i<t;i++)
        {
            b[a[i]]++;
        }
        for( i=0;i<=max;i++)
        {
            if(b[i]>maxb)
            maxb=b[i];
        }
         int c[t+1],min=1000000000;
         for(i=0;i<=t;i++)
         c[i]=0;int k=0;
        for( i=0;i<=max;i++)
        {
            if(b[i]==maxb)
            c[k]=i;
            k++;
        }
        for( i=0;i<=t;i++)
        {
            if((c[i]<min)&&(c[i]>0))
            min=c[i];
        }
        cout<<min<<" "<<maxb;
        cout<<"\n";
    }
}
