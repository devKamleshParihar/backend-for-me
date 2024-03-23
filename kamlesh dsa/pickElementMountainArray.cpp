#include<iostream>
using namespace std;

int pickElement(int arr[], int size)
{
	int start = 0;
	int end= size-1;
	int mid = start+(end-start)/2;
	int value = 0;
	
	while(start<end)
	{
		if(arr[mid] < arr[mid + 1] )
		{
			start = mid + 1;
			value = mid[arr]+1;
			
		}
		else if(arr[mid] > arr[mid+1])
		{
			end = mid;	
			
		}
		mid = start+(end-start)/2;

	}
	return value;
	 
}


int main()
 {
	
	int arr[6]={1,2,1,0,0,-1};
	
	int firstindex = pickElement(arr,6);
	
	
	
	cout << firstindex;
	
	
	

}
