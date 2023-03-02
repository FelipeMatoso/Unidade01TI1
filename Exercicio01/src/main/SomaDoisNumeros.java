package main;

public class SomaDoisNumeros {
	private int num1;
	private int num2;
	
	public SomaDoisNumeros() {
		this.num1 = 0;
		this.num2 = 0;
	}
	
	public SomaDoisNumeros(int num1, int num2) {
		this.num1 = num1;		
		this.num2 = num2;
	}
	
	public int getNum1 (){
		return num1;
	}
	
	public int getNum2 (){
		return num2;
	}

	public void setNum1 (int num1){
		this.num1 = num1;
	}
	
	public void setNum2 (int num2){
		this.num2 = num2;
	}
	
	public int resultado () {
		int resultadoDaSoma;
		resultadoDaSoma = this.num1 + this.num2;
		return resultadoDaSoma;
	}
}
