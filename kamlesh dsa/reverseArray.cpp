#include<iostream>
using namespace std;
main()
{
	int arr[5]={1,2,3,4,5};
	int n=4;
	int m=2;
	int s=m+1;
	int e=n;
	while(s<=e)
	{

	swap(arr[s],arr[e]);
		s++;
		e--;
	}
	
	for(int i=0;i<=n;i++)
	{
		cout<<arr[i]<<endl;
	}
}
