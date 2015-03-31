#include<iostream>
using namespace std;
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int flag=1;
        int n;
        cin>>n;
        int a[n],b[n];
        int min=0;
        for(int i=0;i<n;i++)
        {
            cin>>a[i];
            b[i]=a[i];
        }
        min=a[0];
        for(int i=1;i<n;i++)
        {
            int d,c=min;
            while(c)
            {
            if(c<=a[i])
            {
                d=a[i]%c;
                if(d==0)
                {
                min=c;
                break;
                }
                a[i]=c;
                c=d;

            }
            else
            {
                d=c%a[i];;
                if(d==0)
                {
                    min=a[i];
                    break;
                }

                c=a[i];
                a[i]=d;
            }
            }

        }

       for(int i=0;i<n;i++)
       {
           b[i]=b[i]/min;
       }


       for(int i=0;i<n;i++)
       cout<<b[i]<<" ";

    }

}
