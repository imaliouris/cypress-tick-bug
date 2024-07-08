import { Component, computed, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <button
      data-test="counter"
      class="p-0"
      type="button"
      [disabled]="counting()">
      @if (counter() > 0) {
        <span>Resend code in:</span>
        <span class="ms-1">{{ counter() * 1000 | date: 'mm:ss' }}</span>
      } @else {
        <span>Resend code</span>
      }
    </button>
  `,
  imports: [
    DatePipe
  ]
})
export class AppComponent implements OnInit {
    counter = signal(120)
    counting = computed(() => this.counter() > 0)

    ngOnInit() {
      setInterval(() => {
        this.counter.update((counter) => counter - 1)
      }, 1000)
    }
}
