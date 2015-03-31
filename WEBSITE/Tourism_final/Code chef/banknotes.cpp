#include<iostream>
using namespace std;
bool subset(int set[],int n,int sum)
{
    bool b[sum+1][n+1];
    for(int i=0;i<=n;i++)
    b[0][i]=1;
    for(int i=1;i<=sum;i++)
    b[i][0]=0;
    for(int i=1;i<=sum;i++)
    {
        for(int j=1;j<=n;j++)
        {
            b[i][j]=b[i][j-1];
            if(i>=set[j-1])
            b[i][j]=b[i][j]||b[i-set[j-1]][j-1];
        }
    }

    return b[sum][n];
}
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n,m;
        cin>>n>>m;
        int a[n];
        for(int i=0;i<n;i++)
        cin>>a[i];
        bool y=subset(a,n,m);
        if(y==true)       cout<<"YES\n";
        else cout<<"NO\n";

    }
}
