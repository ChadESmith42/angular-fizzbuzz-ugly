import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Fizzbuzz Game';
  answer = [];

  ngOnInit() {
    let i = 1;
    do {
      this.answer.push(
        (i%15===0 ? 'Fizzbuzz' : (
            i%5===0 ? 'Buzz' : (
              i%3===0 ? 'Fizz' : i
            )
          ) 
        )
      );
      i+= 1;
    } while (i < 101)
  }
}
