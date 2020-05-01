export class Greeter {
  private readonly name: string

  constructor (name: string) {
    this.name = name
  }

  public sayHello (name: string) {
    console.log(`${this.name} greets ${name}!`)
  }
}
