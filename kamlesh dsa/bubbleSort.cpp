#include<iostream>
using namespace std;
main()
{
	int arr[5]={6 ,2, 8, 4 10};
	int n=5;
//	int min;
	for(int i=1;i<n-1;i++)
	{
		for(int j=0;j<n-i;j++)
		{
			if(arr[j] > arr[j+1])
			{
				int temp = arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}
	for(int i=0;i<n;i++)
	{
		cout<<arr[i] <<endl;
	}
}
