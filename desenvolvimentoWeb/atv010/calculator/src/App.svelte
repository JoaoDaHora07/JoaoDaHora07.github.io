<!-- App.svelte -->
<script>
  import Display from './Display.svelte';
  import Keyboard from './Keyboard.svelte';


  let val1 = "";
  let val2 = "";
  let sinal = "";
  let displayValue = "";

  function handleKeyPress(event) {
	if(event.detail == '+' || event.detail == '-' || event.detail == '*' || event.detail == '/'){
		if(val1 != "" && val2 == "" && displayValue != ""){
			setTimeout(() =>{
				displayValue = "";
				val1 = "";
				val2 = "0";	
			},2000);
			displayValue = "Error";
			
			
		}else{
			val1 = displayValue;
			sinal = event.detail;
			displayValue = "";
			console.log(val1);
		}
	
		
	}else if(event.detail == '=' && val1 != ""){
		val2 = displayValue;
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		if(sinal == '+'){
			displayValue = val1 + val2;
			val1 = displayValue;
			val2 = "0";
		}
		if(sinal == '-'){
			displayValue = val1 - val2;
			val1 = displayValue;
			val2 = "0";
		}
		if(sinal == '*'){
			displayValue = val1 * val2;
			val1 = displayValue;
			val2 = "0";
		}
		if(sinal == '/'){
			displayValue = val1 / val2;
			val1 = displayValue;
			val2 = "0";
		}
	}else if(event.detail == 'C'){
		displayValue = ""
		val1 = ""
		val2 = "0"
	}else{
		displayValue += event.detail;
	}
    
  }
</script>

<main>
  <Display value={displayValue} />
  <Keyboard on:keyPress={handleKeyPress} />
</main>
