#include<iostream>
using namespace  std;
 main()
{
	int lb=0,up=10,N=0;
	int arr[10];
	
	while(lb<up)
	{
		if(up==N)
		{
			cout<<"insrtion not possible";
		}
		
		if(lb<N)
		{
			N++;
			arr[N]=1;
				
		}
		else
		{
			N++;
			arr[N]=2;
			
		}
//		lb++;
		
	}
	cout<<N<<endl;
	for(int i=0;i<10;i++)
	{
		cout <<" " <<arr[i];
	}
	
}
