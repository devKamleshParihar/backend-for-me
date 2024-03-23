#include<iostream>
using namespace std;

int firstbinarySearch(int arr[],int key, int size)
{
	int start = 0;
	int end = size-1;
	int mid = start+(end-start)/2;
	int value = 0;
	while(start<=end)
	{
		if(arr[mid]==key)
		{
		value = mid;
		end=mid-1;	
		}
		else if(key<arr[mid])
		{
			end=mid-1;
		}
		else
		{
			start=mid+1;
		}
		mid = start+(end-start)/2;
		

		
	}
			return value;
}


int lastbinarySearch(int arr[],int key, int size)
{
	int start = 0;
	int end = size-1;
	int mid = start+(end-start)/2;
	int value = 0;
	while(start<=end)
	{
		if(arr[mid]==key)
		{
		value = mid;
		start=mid+1;	
		}
		else if(key<arr[mid])
		{
			end=mid-1;
		}
		else
		{
			start=mid+1;
		}
		mid = start+(end-start)/2;
		
	}
			return value;
}

 int main()
 {
	
	int arr[5]={1,5,5,5,5};
	
	int firstindex = firstbinarySearch(arr,5,5);
	int lastindex = lastbinarySearch(arr,5,5);
	
	int totalOccu = (lastindex-firstindex)+1;
	
	cout<< "total occurrence number of 5 is : "<< totalOccu <<endl;
	cout << " the 5 number index value is " << firstindex <<endl;
	cout << " the 5 number index value is " << lastindex;
	
	
	

}
