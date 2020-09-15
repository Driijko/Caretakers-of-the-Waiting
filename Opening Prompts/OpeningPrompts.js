function OpeningPrompts() {
  const fullScreenPrompt = new Prompt("Enable Fullscreen?", 0);

  this.display = function() {
    fullScreenPrompt.display();
  }
}