#include<iostream>
using namespace std;

int binarySearch(int arr[],int key, int size)
{
	int start = 0;
	int end = size-1;
	int mid = start+(end-start)/2;
	
	while(start<=end)
	{
		if(arr[mid]==key)
		{
			return mid;
		}
		
		if(key>arr[mid])
		{
			start = mid + 1;
		}
		else {
			end = mid - 1;
		}
	    mid = start+(end-start)/2;
	}
	return mid;
}

 main(){
	
	int arr[5]={1,2,3,4,5};
	
	int index = binarySearch(arr,4,5);
	cout << " the 1 number index value is " << index;
	
	
	

}
