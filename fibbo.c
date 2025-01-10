#include <stdio.h>
#include <stdlib.h>

int main(int arc, char *argv[])
{
	char *value; 
	if(arc != 2){
		printf("insira um valor para como argumento do programa");
		return 0;
	}
		
	value = argv[1];
	int num = atoi(value); 
	int num1 = 0;
	int num2 = 1;
	int last = 0;
	while (last < num)
	{
		last = num1 + num2;
		num1 = num2;
		num2 = last;
	}
	if (last == num)
		printf("o numero %d pertence a sequencia de fibbo", num);
	else
		printf("o numero %d não pertence a sequencia de fibbo", num);
	return 0;
}

