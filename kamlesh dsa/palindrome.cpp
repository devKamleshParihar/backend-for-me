#include<iostream>
using namespace std;
int lenght(char s)
{
	int i,count=0;
	
	while(s[i]!='\0')
	{
		count++;
		i++;
	}

	return count;
}

main()
{
	char s;
	cin>>s;
	
	cout<<"lenght of "<<lenght(s);
	 
	
	
	
}
