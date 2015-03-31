#include<iostream>
#include<conio.h>
using namespace std;
struct node
{
char info;
struct node *link;
};
int main()
{
struct node *top,*p,*ptr;
char a[100];
top=NULL;
char *q;
cout<<"enter a code:\n";
cin>>a;
q=a;
while(*q!=NULL)
{

  if(*q=='{')
  {
  if(top==NULL)
  {
  p=new node;
  p->info=*q;
  top=p;
  }
else
{
p=new node;
p->info=*q;
p->link=top;
top=p;
}
}
if(*q=='}')
{


p=top;
top=top->link;
delete(p);
}
q++;
}
if(top->info!='{'&&top->info!='}')
cout<<"your programme is correct:\n";
else
cout<<"your programme is wrong:\n";

getch();
return 0;
}





