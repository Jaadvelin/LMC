

//test to verify LMC calculator is working, eventually will be done with all components to initialize them, should be done inside a general function
LMCCalculator = new Calculator;


//example function to pull html textbox to parse, can and should be removed eventually
function getInstructions() {
  unorderedString = document.getElementById("inputTextArea").value
  unorderedArray = unorderedString.split("\n")
      //console.log(unorderedArray)
  return unorderedArray
}


//Calculator  Component, can add, sub, and display info
function Calculator()
{
  
}

Calculator.prototype.display = 0;

Calculator.prototype.Sum = function(number)
{
  this.display += number;
}

//Instruction Counter Component, can display, add ( increments of one) or directly set it's value
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


//interrupt Manager Component, needs to cache the values of the current calculator and the instruction Conter and return them aswell( inside of their components)
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

//todo: mailbox component, IO box component, LMC component