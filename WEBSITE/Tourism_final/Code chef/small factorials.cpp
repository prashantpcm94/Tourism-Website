#include<iostream>
using namespace std;
static int c;
int main()
{
int t;
cin>>t;
int n[100];
for(int i=0;i<t;i++)
{
cin>>n[i];
}
for(int i=0;i<t;i++)
{
  static int a[200];
  a[0]=1;
  c=0;
 int b=1;
 for(int j=0;j<n[i];j++)
 {
 int temp,m=0;c=0;
 for(int k=0;k<b;k++)
  {
  temp=a[m]*(j+1)+c;

  c=temp/10;
  a[m]=temp%10;
  m++;
  }
  if(c!=0)
  {
  while(c!=0)
  {
      a[m]=c%10;
      c=c/10;
      m++;
 }
 b=m;
 }
 }
 for(int j=b-1;j>=0;j--)
 cout<<a[j];
 cout<<"\n";
}
return 0;
}
