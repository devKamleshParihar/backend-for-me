#include <stdio.h>

int main() {
    int arr[10]; // Declare an array of size 10
    int num_values = 0; // Initialize the number of values to 0

    // Input values into the array until the user decides to stop
    int value;
    printf("Enter values into the array (enter -1 to stop):\n");
    do {
        printf("Enter value: ");
        scanf("%d", &value);
        
        if (value != -1 && num_values < 10) {
            arr[num_values] = value;
            num_values++;
        }
    } while (value != -1 && num_values < 10);

    // Find the last element in the array
    if (num_values > 0) {
        int last_element = arr[num_values - 1];
        printf("The last element in the array is: %d\n", last_element);
    } else {
        printf("The array is empty.\n");
    }

    return 0;
}

