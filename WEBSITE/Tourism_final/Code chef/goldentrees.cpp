#include<iostream>
using namespace std;
static  long long z[100000005];
static  long long r[100000005];
long long prod(long long z[],int k,int j)
{
    long long c=1;
    if(r[j-1]!=0)
    {
        long long t;
        if(z[j]>z[j-k])
        t=z[j]/z[j-k];
        else
        t=z[j];
        c=(t*(r[j-1]%100000007)%100000007);
        r[j]=c;

        return c;
    }
    else
    {
    for(int i=j;i>=j-k+1;i--)
    c=(c*(z[i]%100000007)%10000007);
    r[j]=c;
    return c;
    }
}
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int t,a,b,k;long long n;
        cin>>t>>a>>b>>k>>n;
        z[0]=0;
        z[1]=t;
        if(n>1)
        for(long long i=2;i<=a+1;i++)
        z[i]=z[i-1]+1;
        if(n>a+1)
        for(long long i=a+2;i<=a+b+1;i++)
        {z[i]=(z[i-1]*2)%100000007;}
        if(n>a+b)
        for(long long i=a+b+2;i<=n;i++)
        {
            z[i]=prod(z,k,i-1);
        }
        z[n]=z[n];
        cout<<z[n]<<"\n";
    }
}
