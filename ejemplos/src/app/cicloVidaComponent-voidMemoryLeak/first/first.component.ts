import {
  Component, OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges
} from '@angular/core';
import { Subject } from 'rxjs';


// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() value: string;
  color = new Subject<string>();
  person: any = {};
  message: string[] = [];


  constructor() {
    console.log('constructor', this.value);
    this.person.firstname = '';
    this.person.lastname = '';
  }

  ngOnInit() {
    console.log('ngOnInit', this.color);
    const $obserbableValue = this.color.asObservable();
    $obserbableValue.subscribe((result) => {
      console.log("escuchando", result);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
    console.log('ngOnChanges: Se ejecuta');
    // tslint:disable-next-line: max-line-length
    this.message.push('| ngOnChanges | : Se ejecuta cuando se recibe cambios de los input que actualiza el componente padre. Color:' + changes.value.currentValue);

    const $obserbableValue = this.color.asObservable();
    $obserbableValue.subscribe((result) => {
      console.log("escuchando 1", result);
    });
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    this.message.push('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    this.message.push('| ngAfterContentInit | : Se ejecuta cuando se inicializa el contenido del componete');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    this.message.push('| ngAfterContentInit | : Se ejecuta cuando se actualiza el contenido del componete');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.message.push('| ngAfterViewInit | : Se ejecuta cuando se inicializa la vista del componete');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    this.message.push('| ngAfterViewInit | : Se ejecuta cuando se actualiza la vista del componete');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.color.complete();
    console.log('ngOnDestroy', this.color);
  }

  add() {
    console.log('get');
    this.value = 'greed';
    this.color.next('greed');
  }

  clean() {
    this.message = [];
    console.log('greed');
  }

}
