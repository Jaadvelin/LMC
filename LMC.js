
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

//mailbox component, should store all the mailboxes' values aswell as the interrup flags
function MailBoxes()
{

}

MailBoxes.prototype.mailBoxArray =  new Array(100);
MailBoxes.prototype.mailBoxInterruptArray = new Array(100);
//todo initialize both arrays as something ( probablu nulls and or 0s)
MailBoxes.prototype.SetMailBox = function (target, value, flag)
{
this.mailBoxArray[target] = value;
this.mailBoxInterruptArray[target] = flag;
}


MailBoxes.prototype.ParseSheet = function ()
{

}

//Input and Output Box, should have an array to store the output values and same for inputs
function IOBox()
{

}

IOBox.prototype.inputBoxArray = new Array();
IOBox.prototype.outputBoxArray = new Array();

//The little man itself, will be used as an axuliary class to assists the program (for science)
function LittleMan()
{

}

LittleMan.prototype.handHeld = 0;
LittleMan.prototype.cTask = 0;
LittleMan.prototype.stateStatus = true;
// where the good shit at
LittleMan.prototype.execute = function(Calculator,IOBox,MailBoxes,LMC,InterruptManager,InstructionCounter)
{
  this.cTask = InstructionCounter.currentInstruction;
  this.handHeld = MailBoxes.mailBoxArray(this.cTask);
  var cInstruction = new Array ();
  switch


}

//function to initialize components, can and should be used for reset cases
function boot()
{
  LMCCalculator = new Calculator;
  LMCMailbox = new MailBoxes;
  LMCIOBox = new IOBox;
  LMCInstructionCounter = new InstructionCounter;
  LMCInterruptManager = new InterruptManager;
  LMCLittleMan = new LittleMan;

}

//starting function for the program itself
function Start()
{
 while (LMCLittleMan.stateStatus == true)
 {
    /*LMCLittleMan.cTask = LMCInstructionCounter.currentInstruction;
    LMC.LittleMan.handHeld = LMCMailbox.mailBoxArray(LMCLittleMan.cTask);*/



    
 }
}