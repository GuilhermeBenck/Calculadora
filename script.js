function calcular(){
    var calculo= document.getElementById("calculo").value
    var num1= document.getElementById('num1').value
    var num2= document.getElementById('num2').value
  
    if(num1 == '' || num1 == null){
      alert("Digite um número válido")
      document.getElementById('num1').focus()
      return false
    }
  
    if(num2 == '' || num2 == null){
      alert("Digite um número válido")
      document.getElementById('num2').focus()
      return false
    }
    var resultado= null
    num1= Number(num1)
    num2= Number(num2)
  
    if(calculo == 1){
      resultado= num1 + num2
    }else if(calculo == 2){
      resultado= num1 -num2
    }else if(calculo == 3){
      resultado= num1 * num2
    }else if(calculo == 4){
      resultado= num1 / num2
    }else{
      alert("Selecione uma uma opção!")
      return false
    }
  
    document.getElementById('resultado').value = resultado
  }