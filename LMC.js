


LMCCalculator = new Calculator;



function getInstructions() {
  unorderedString = document.getElementById("inputTextArea").value
  unorderedArray = unorderedString.split("\n")
      //console.log(unorderedArray)
  return unorderedArray
}



function Calculator()
{
  
}

Calculator.prototype.display = 0;

Calculator.prototype.Sum = function(number)
{
  this.display += number;
}

function InstructionCounter()
{

}

InstructionCounter.prototype.currentInstruction = 0;

InstructionCounter.prototype.IncreaseInstruction = function()
{
  this.currentInstruction ++;
}

InstructionCounter.prototype.SetInsturction = function(number)
{
  this.currentInstruction = number;
}



function InterruptManager()
{


}

InterruptManager.prototype.instructionCounterCache = 0;
InterruptManager.prototype.calculatorCache = 0;

InterruptManager.prototype.CacheValues = function(Calculator, InstructionCounter)
{
 this.instructionCounterCache = InstructionCounter.currentInstruction;
 this.calculatorCache = Calculator.display;
}