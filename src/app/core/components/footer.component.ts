import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lbk-footer',
  template: `
    <footer class="fixed bottom-0 left-0 w-full text-center">
      <p>Code by <a target="_blank" class="underline text-blue-500" href="https://github.com/lbk2knewlifegithub">lbk2k</a></p>
    </footer>
  `,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
