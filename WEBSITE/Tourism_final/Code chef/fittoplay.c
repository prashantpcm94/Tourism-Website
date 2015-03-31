#include<stdio.h>
long int a[100000],b[9999];
int main()
{
    int t;
    scanf("%d",&t);
    while(t--)
    {
        int n,i,j=0;
        scanf("%d",&n);
        int max=-1000000;

        for(i=0;i<n;i++)
        scanf("%d",&a[i]);
        for(i=1;i<n;i++)
        {
            b[i-1]=a[i]-a[i-1];
        }
        int sum=0;


     for( i=0;i<n-1;i++)
    {
         sum=0;
        for( j=i;j<n-1;j++)
        {
            sum=b[j]+sum;
            if(max<sum)
            {
                max=sum;
            }
        }
    }
    if(max<=0)
    printf("UNFIT\n");
        else
        printf("%d\n",max);
    }
}
