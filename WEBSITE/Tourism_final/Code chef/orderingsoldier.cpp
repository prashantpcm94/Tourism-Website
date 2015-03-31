#include<iostream>
using namespace std;
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        int a[n],b[n];
        for(int i=0;i<n;i++)
        cin>>a[i];
        for(int i=0;i<n;i++)
        {
            b[i]=i-a[i]+1;
            for(int j=i+1;j<n;j++)
            {
                if(a[j]>=(j-i))
                b[i]++;
            }
        }
        for(int i=0;i<n;i++)
        cout<<b[i]<<" ";
    }
}
