#include<stdio.h>
#include<string.h>

int main()
{
	int t,i,l1,l2,j;
	char c,m[25001],w[25001];
	scanf("%d",&t);
	while(t--)
	{	i=0;
		scanf("%s%s",m,w);
		l1=strlen(m);
		l2=strlen(w);
		if(l1==l2)
		{	i=0;
			while(m[i]==w[i]&&m[i]!='\0')
				i++;
			if(i==l1)
				printf("YES\n");
			else
				printf("NO\n");
		}
		else if(l1>l2)
		{
			i=0;j=0;
			for(i=0;i<l1;i++)
				if(m[i]==w[j])
					j++;
			if(j==l2)
				printf("YES\n");
			else
				printf("NO\n");
		}
		else
		{
			i=0;j=0;
			for(i=0;i<l2;i++)
				if(w[i]==m[j])
					j++;
			if(j==l1)
				printf("YES\n");
			else
				printf("NO\n");
		}

	}
	return 0;

}
