#include<iostream>
#include<cmath>
using namespace std;
static long long s=1,x=1;
struct node
{
    unsigned long long data;
    node *p;
    node *f;
};
int main()
{
    long t;int r,l=1,flag,j,w,v;
    cin>>t;
    node *h=NULL,*u;
    while(t--)
    {
        static int c;
        int n;
        cin>>n;
        int m,i=0,j=0;
        m=n;
        static int a[1000000];
        static int b[1000000];
        while(m)
        {
            a[i]=(m%2);
            m=m/2;
            i++;
        }
        unsigned long long num=0,num1;;
        for(int z=i;z>=0;z--)
        {
            num=a[z]+num*10;
        }
        cout<<num<<"\n";
        num1=num;
        while(num1)
        {
            b[j]=(num1%2);
            num1=num1/2;
            j++;
        }


        c=0;static int q[100000000];
        h=new node;
        h->data=1;
        h->p=NULL;
        h->f=NULL;
        u=h;
        for(long i=0;i<num;i++)
        {
            node *d=u;
            for(r=0;r<l;r++)
            {
                int y;
                cout<<"h";
                y=4*(d->data)+c;
                d->data=y%10;
                c=y/10;
                if(d->p!=NULL)
                d=d->p;
            }

            if(c)
            {
                    node *p;
                    p=new node;
                    p->f=h;
                    h->p=p;
                    h=p;
                    h->data=0;
                    p->p=NULL;
                    l++;
                    d=d->p;
                    d->data=c;
            }
            c=0;
        }

        while(h!=NULL)
        {
            cout<<h->data;
            h=h->f;
        }
        cout<<"\n";

    }
}
