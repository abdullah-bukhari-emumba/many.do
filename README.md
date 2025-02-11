# many.do

## 🚀 Angular Topics Covered

### 📌 **Component Architecture**
- Smart/Container Components: `TodoFormComponent`, `TodoListComponent`
- Dumb/Presentational Components: `TodoItemComponent`
- Component Lifecycle: `ngOnInit`

### 📌 **Angular Modules**
- Feature Modules: `TodoModule`, `TodoFormModule`, `TodoListModule`
- Core Module: `CoreModule`
- Module imports/exports & declarations

### 📌 **Data Binding**
- Two-way binding: `[(ngModel)]`
- Event binding: `(click)`, `(ngSubmit)`, `(blur)`
- Property binding: `[class.active]`, `[value]`
- String interpolation: `{{ expression }}`

### 📌 **Directives**
- Structural: `*ngFor`, `*ngIf`
- Attribute: `[class.completed]`
- Template reference variables: `#editInput`

### 📌 **Component Communication**
- `@Input()` decorators for passing data down
- `@Output()` decorators with `EventEmitter` for passing data up
- Parent-child component interaction

### 📌 **Services & Dependency Injection**
- Injectable services: `TodoService`
- Dependency injection in components
- `providedIn: 'root'` for service registration

### 📌 **RxJS Usage**
- `BehaviorSubject` for state management
- Observable streams
- Subscription handling in components

### 📌 **Template Syntax**
- Template reference variables
- Event filtering: `(keydown.enter)`, `(keydown.escape)`
- Local template variables
- `ngTemplateOutlet`

### 📌 **Forms**
- Template-driven forms
- `FormsModule` integration
- Form events and validation

### 📌 **State Management**
- Local storage integration
- Service-based state management
- Component-level state

### 📌 **Styling**
- Component-specific styles: `component.scss`
- Global styles: `styles.scss`
- CSS variables
- View encapsulation

### 📌 **Angular Best Practices**
- Folder structure (`components/_smart`, `components/_dumb`)
- Barrel files
- Interface definitions
- Single Responsibility Principle

### 📌 **TypeScript Features**
- Interfaces
- Type safety
- Access modifiers
- Strong typing

### 📌 **Angular CLI Usage**
- Project structure
- Module organization
- Component generation patterns


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
