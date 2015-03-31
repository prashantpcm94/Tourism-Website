#include<iostream>
using namespace std;
int main()
{
  static int a[1000000],c[1000000];
  int i,t,max=0;
  cin>>t;
  for(i=0;i<t;i++)
  {
   cin>>a[i];
   if(a[i]>max)
   max=a[i];
  }
  for(i=0;i<t;i++)
  {
   c[a[i]]=c[a[i]]+1;
  }
  for(i=0;i<=max;i++)
  {
   while(c[i]>0)
   {
    cout<<i;
    cout<<"\n";
    c[i]=c[i]-1;
   }
  }
}
