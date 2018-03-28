import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'minesweeper', component: MinesweeperComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    MinesweeperComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
