#include<iostream>
using namespace std;
char lowercase(char ch)
{
		if(ch >='a' && ch <='z')
		{
			return ch;
		}
		else{
			char tmp = ch-'A'+'a';
			return tmp;
		}
	
}

bool palindrome(char arr[],int size)
{
	int s=0;
	int e=size-1;
	while(s<=e)
	{
		if(lowercase(arr[s])!=lowercase(arr[e]))
		{
			return 0;
		}
		else{
			
			s++;
			e--;
			
		}
	}
	return 1;
}
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
	
	cout<<palindrome(arr,larr);
	cout<<arr;
	
	
}

