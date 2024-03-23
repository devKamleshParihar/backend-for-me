#include<iostream>
using namespace std;
int lenght(char arr[])
{
	int count=0;
	for(int i=0;arr[i]!='\0';i++)
	{
		count++;
	}
	return count;
}
int main()
{
	char arr[10];
	int larr;
	cout<<"enter your name :";
	cin>>arr;
	larr=lenght(arr);
	cout<<larr;
	
	
}

