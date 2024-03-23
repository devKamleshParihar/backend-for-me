#include <iostream>
using namespace std;

class First {
public:
    int x;

    void setValue(int a) {
        x = a;
    }

    virtual void print() {
        cout << x;
    }
};

class Second : public First {
public:
    int y;

    void setValue(int a, int b) {
        setValue(a);
        y = b;
    }

    void print() override {
        cout << y;
    }
};

int main() {
    Second abc;
    abc.setValue(10, 20);
    abc.print();  // Use the overridden print function
    return 0;
}
