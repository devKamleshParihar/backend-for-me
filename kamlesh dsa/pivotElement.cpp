#include<iostream>
using namespace std;

int pivotElement(int arr[] , int size)
{
	int start = 0;
	int end = size - 1;
	int mid = start+(end-start)/2;
	
	
	
	while(start < end)
	{
		if(arr[mid] >= arr[0])
		{
			start = mid + 1;
			
				
		}
		else 
		{
			end = mid;
		}
		mid = start+(end-start)/2;
	}
	return arr[start];
}

int main()
{
	int arr[4]={1,5,10,2};
	int element = pivotElement(arr,4);
	cout << element; 
}
