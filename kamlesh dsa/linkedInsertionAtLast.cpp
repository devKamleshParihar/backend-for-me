#include<iostream>
using namespace std;

class node{
	public:
		int data;
		node* next;
		
		node(int val)
		{
			data=val;
			next = NULL;
		}
};

void insertAtLast(node* &start , int val){
	node* n = new node(val);
	
	if(start==NULL){
		start=n;
		return;
	}
	
	node* temp = start;
	while(temp->next!=NULL)
	{
		temp = temp->next;
	}
	temp->next=n;
}
void print(node* start){
	node* temp=start;
	while(temp!=NULL){
		cout<<temp->data<<" ";
		temp=temp->next;
	}
	cout<<"Null"<<endl;
}



main(){
	node* start=NULL;
	insertAtLast(start,1);
	insertAtLast(start,2);
	insertAtLast(start,3);
	insertAtLast(start,4);
	print(start);
	
}

