function Window() {
  this.set = function() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.verCenter = this.width/2;
    this.horCenter = this.height/2;
  }
}