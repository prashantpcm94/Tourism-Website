#include<stdio.h>
long int a[100005],b[1000000];
int mid(long int a[],int l,int m,int h)
{
    int sum=0;int i;
    int maxl=-1000000;
    for(i=m;i>=l;i--)
    {
        sum=a[i]+sum;
        if(maxl<sum)
        maxl=sum;
    }
    int maxr=-1000000;
    sum=0;
    for(i=m+1;i<=h;i++)
    {
        sum=a[i]+sum;
        if(maxr<sum)
        maxr=sum;
    }
    return maxr+maxl;
}
int fun(long int a[],int l,int h)
{
    int m=(l+h)/2;

    if(l==h)
    return a[l];

    else
    {
        int left=fun(a,l,m);
        int right=fun(a,m+1,h);
        int mt=mid(a,l,m,h);
        if(left>right&&left>mt)
        return left;
        else if(right>left&&right>mt)
        return right;
        else return mt;
    }
}
int main()
{
    int t;
    scanf("%d",&t);
    while(t--)
    {
        int n,m=0,q=0,j=0;
        scanf("%d",&n);

        int i;
        for(i=0;i<n;i++)
        scanf("%d",&a[i]);
        for(i=1;i<n;i++)
        {
            b[i-1]=a[i]-a[i-1];
        }
        int y=fun(b,0,n-2);
        if(y<=0)
        printf("UNFIT\n");
        else
        printf("%d\n",y);
    }
}
