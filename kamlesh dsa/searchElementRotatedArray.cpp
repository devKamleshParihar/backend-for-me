#include<iostream>
using namespace std;

int pivotElement(int arr[] , int size)
{
    int start = 0;
    int end = size - 1;
    int mid = start+(end-start)/2;

    while (start<end)
    {
        if (arr[mid] >= arr[0])
        {
            start = mid +1;
        
        }else
        {
            end = mid;
        }
        mid = start+(end-start)/2;
        
    
    }
    return start;
    
}


int binary(int arr[] ,int s,int e, int key)
{
    int start = s;
    int end = e;
    int mid = start+(end-start)/2; 
    while(start<=end)
    {
        if(arr[mid]==key)
		{
			return key;
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

}


int main()
{
	int arr[5]={3,8,17,1,2};
	int element = pivotElement(arr,5);
    int valueSearch ;
    cin>>valueSearch ;
    int ans;

    if(valueSearch  >=  arr[element]  && valueSearch  >=  arr[element-1])
    {
        ans=binary(arr,element,4,valueSearch);
    }
    else
    {
        ans=binary(arr,0,element-1,valueSearch);
    }



    
	cout << ans; 
}
