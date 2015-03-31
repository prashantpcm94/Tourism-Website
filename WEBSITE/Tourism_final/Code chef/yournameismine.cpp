#include<iostream>
#include<string.h>
using namespace std;
void name(char a[],char b[]);
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
         char a[25000],b[25000];
         cin>>a>>b;
         name(a,b);
    }
}
void name(char a[],char b[])
{
        int i,n,m,w,q;
        n=strlen(a);
        m=strlen(b);
        if(m>=n)
        {
            for(i=0;i<m;i++)
            {
                if(a[0]==b[i])
                break;
            }
            q=i;
            if(m-q<n){
            cout<<"NO\n";
            return;}
            else
            {
                 for(i=m-1;i>q;i--)
                 {
                     if(a[n-1]==b[i])
                     break;
                 }
                 w=i;
            }
        }
        else
        {
            for(i=0;i<n;i++)
            {
                if(b[0]==a[i])
                break;
            }
            q=i;
            if(n-q<m){
            cout<<"NO\n";
            return;}
            else
            {
                 for(i=n-1;i>q;i--)
                 {
                     if(b[m-1]==a[i])
                     break;
                 }
                 w=i;
            }
        }
             char c[25000];int j=0;
             char d[25000];
            for(int i=1;i<n;i++)
            c[i-1]=a[i];
            for( i=q+1;i<w;i++)
            {d[j]=a[i];j++;}
            if(w==q)
            cout<<"YES\n";
            else
            name(c,d);


}

