#include<iostream>
using namespace std;
main()
{
	int arr[5]={3,8,5,10,7};
	int n=5;
//	int min;
	for(int i=0;i<5;i++)
	{
//		min = arr[i];
		for(int j=i+1;j<n;j++)
		{
			if(arr[i] > arr[j])
			{
				swap(arr[i],arr[j]);
			}
		}
	}
	for(int i=0;i<n;i++)
	{
		cout<<arr[i] <<endl;
	}
}
