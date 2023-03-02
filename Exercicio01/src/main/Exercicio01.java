package main;

import java.util.*;

public class Exercicio01 {
	public static Scanner sc = new Scanner(System.in);
	public static void main(String[] args) {
		int num1, num2;
		
		System.out.println("Digite o primeiro numero:");
		num1 = sc.nextInt();
		System.out.println("Digite o segundo numero:");
		num2 = sc.nextInt();
		
		SomaDoisNumeros soma = new SomaDoisNumeros(num1, num2);
		
		System.out.println("O resultado da soma dos dois números é: " + soma.resultado());
	}
}
