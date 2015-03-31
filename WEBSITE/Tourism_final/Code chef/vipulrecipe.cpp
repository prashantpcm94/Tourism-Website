#include<iostream>
using namespace std;

int main()
{

    int a1[50],small,n,t,flag,i,hcf;
    cin>>t;
    while(t--)
    {
        small=100000000;
        hcf=1;
        cin>>n;
        for(i=0;i<n;i++)
        {
            cin>>a1[i];
            if(a1[i]<small)
            small=a1[i];

        }
        for(i=2;i<=small;i++)
        {
            flag=0;
            for(int j=0;j<n;j++)
            {
                if(a1[j]%i!=0)
                {
                    flag=1;
                    break;
                }

            }if(flag==0)
            hcf=i;
        }
        for(i=0;i<n;i++)
        cout<<a1[i]/hcf<<" ";
        cout<<"\n";
    }
}
