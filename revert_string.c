#include <stdio.h>

int main(int arc, char *argv[])
{
	char *value; 
	int size = 0;
	if(arc != 2)
	{
		printf("insira um valor como argumento do programa");
		return 0;
	}
	value = argv[1];
	while (value[size] != '\0')
	size++;

	while (size > 0)
	printf("%c", value[--size]);
}
