
# Angular

# Angular Tooling

* NodejS + NPM
* @angular/cli
* @compodoc/compodoc
* Angular Language Service (for the IDE)
* **Documentation**
   * MDN - https://developer.mozilla.org/fr/
   * https://angular.io/


# Angular Framework

## 5 Core Concepts

* `NgModule`    - Code Organisation
  * `Component` - Unit of the view (HTML/CSS/JS)
  * `Directive` - Enhancement
  * `Pipe`      - Transformation Rules
* `Service`     - Data Logic

# Angular Routing

| Mean to change a component in the view without reloadind the whole page (Single Page Application)

**Includes**

* `url` surveillance throug the `Router` service
* `Component` as view.
* `<router-outlet></router-outlet>` as routing destination.
* `Route` definitions (in a RoutingModule)

```ts
const routes: Routes = [
  {
    path:'products', // url segment
    component:ViewProductComponent, // matching component
    title:'Product List'
  }
];

```

# Angular Services

| Code Unit (as Singleton by default) providing Data Logic to the components.


# Angular Components

| Unit of the view (HTML/CSS/JS)

```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-view-unit',                 // CSS Selector
  templateUrl: './view-unit.component.html', // Path to the HTML template file
  styleUrls: ['./view-unit.component.scss']  // Paths to the CSS Files
})
export class ViewUnitComponent {
  /* Code binded to the HTML */
}
```

# Angular Components Template

```html

<!-- String Binding (interpolation) -->
<element> {{ expressionAsString }} </element>

<!-- Attribute Binding  -->
<element [attributeName]=" expressionAsValue "></element>

<!-- Event Binding  -->
<element (eventName)=" expressionAsFunction "></element>

<!-- Directives  -->
<element *ngFor="let item of iterableCollection">{{ item }}</element>

<element *ngIf=" expressionAsBoolean ">{{ item }}</element>


```
