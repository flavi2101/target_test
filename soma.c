#include <stdio.h>
int main (void){
	int indice=13;
	int soma = 0;
	int k = 0;
	while (k < indice)
	{
		k++;
		soma+=k;
	}
	printf("%d", soma);
	return 0;
}
