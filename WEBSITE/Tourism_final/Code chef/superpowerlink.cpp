#include<iostream>
using namespace std;
struct node
{
    short int data;
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
        int m,i=0;
        m=n;
        static int a[1000000];
        while(m)
        {
            a[i]=(m%2);
            m=m/2;
            i++;
        }
        for( j=0;j<i;j++)
        {
            int t;
            t=(2*a[j])+c;
            a[j]=t%10;
            c=t/10;
        }
        if(c!=0)
        {
            a[j]=c;
            i++;
        }
        c=0;static int q[100000000];
        h=new node;
        h->data=1;
        h->p=NULL;
        h->f=NULL;
        u=h;
        while(1)
        {
            for(w=0;w<i;w++)
            {
                if(q[w]==a[w])
                flag=1;
                else
                {
                    flag=0;
                    break;
                }
            }
            int g=i;
            if(flag==0)
            {
                int u;
                u=q[0]+1;
                c=u/10;
                q[0]=u%10;
                for(v=1;v<i;v++)
                {
                    int r;
                    r=q[v]+c;
                    c=c/10;
                    q[v]=r%10;
                }
                q[v]=c;
            }
            c=0;
            if(flag==1)
            break;
            node *d=u;
            for(r=0;r<l;r++)
            {
                int y;

                y=2*(d->data)+c;
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
