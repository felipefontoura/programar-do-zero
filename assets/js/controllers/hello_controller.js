import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]
  
  connect() {
    console.log("Hello controller connected!")
  }
  
  greet() {
    this.outputTarget.textContent = `Hello, Programar do Zero!`
  }
}
