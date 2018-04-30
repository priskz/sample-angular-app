# sample-angular-app

## Purpose

This sample angular app is to display the practice of key Angular >2 features and applied architectural concepts.

## 3rd Party Usages

* [```Angular Material```](https://material.angular.io/) - A library of UI components following the material design spec.

* [```Immuatable.js```](https://facebook.github.io/immutable-js/) - A library for easily enforcing immutabilty.

* [```NewsAPI.org```](https://newsapi.org/) - A news API for pulling in some real data.

* [```ng2 Charts```](https://github.com/valor-software/ng2-charts) - Native Angular components built for the [```Chart.js```](https://www.chartjs.org/) library. Note: This is not currently on display.

## Concepts

* [```Service Oreinted Architecture (SOA)```](https://en.wikipedia.org/wiki/Service-oriented_architecture) - All app service's are Injectable, which allows for easy Dependency Injection from within the components that need to use them. [```Service Sample```](https://github.com/priskz/sample-angular-app/blob/master/app/angular/web/src/app/core/service/news.ts) [```Usage Sample```](https://github.com/priskz/sample-angular-app/blob/master/app/angular/web/src/app/home/home.component.ts)

* [```On Push Change Detection```](https://angular.io/api/core/ChangeDetectionStrategy) - Limited implementation, but when paired with immutability and proper architecture we can turn off change detection for all components and then propagate changes as necessary. Very performant. In the sample, the component would never be checked for changes that happened on other visible parts of the page (ie: GlobalNav) since it is set to ChangeDetectionStrategy.OnPush, but it can will update it self as needed. [```Sample```](https://github.com/priskz/sample-angular-app/blob/master/app/angular/web/src/app/account/details.component.ts) 

* [```Life Cycle Hooks```](https://angular.io/guide/lifecycle-hooks) - Limited usage, but you see how the sample calls upon a service to load, once the component has been initalized (after construction). The NgOnDestroy hook, not seen in these samples is often used for unsubscribing to Observables. [```Sample```](https://github.com/priskz/sample-angular-app/blob/master/app/angular/web/src/app/home/home.component.ts)

* [```Immutability```](https://en.wikipedia.org/wiki/Immutable_object) - Limited implementation, but all of our Domain objects/models are hydrated as Immutable Records. [```Sample```](https://github.com/priskz/sample-angular-app/blob/master/app/angular/web/src/app/domain/news.ts) 

* [```Observables/RxJS```](https://angular.io/guide/observables) - All of the app's data services are built as an Observiable. By doing this we can subscribe to these and update our views in real time. This sample also displays the usage of the http service, which also returns an Observable. [```Sample```](https://github.com/priskz/sample-angular-app/blob/master/app/angular/web/src/app/core/service/news.ts) 

* [```Asynchronous Pipes```](https://angular.io/guide/pipes#pure-and-impure-pipes) - Since our data sevices are built around Observable sources, we can easily take advantage of the Async pipe to display our data. This works amazing for real time updates. Utilzing these pipes help keep our component logic clean and sleek since it has unsubcibe/subscribe functionality built in to the pipe. [```Sample```](https://github.com/priskz/sample-angular-app/blob/master/app/angular/web/src/app/home/home.component.html) 

## Sample [```Modules```](https://angular.io/guide/ngmodules)

* [```Account```](https://github.com/priskz/sample-angular-app/tree/master/app/angular/web/src/app/account) - This generic module would talk to an API and be utilized for managing a user's account. Mocked functionality.

* [```Auth```](https://github.com/priskz/sample-angular-app/tree/master/app/angular/web/src/app/auth) - This generic module would talk to an API and be utilized for authenticating a user. Mocked functionality.

* [```Core```](https://github.com/priskz/sample-angular-app/tree/master/app/angular/web/src/app/core) - This module houses all of the core service's utilized by this app.

* [```Home```](https://github.com/priskz/sample-angular-app/tree/master/app/angular/web/src/app/home) - This generic module is essentially the app's home page.

* [```Layout```](https://github.com/priskz/sample-angular-app/tree/master/app/angular/web/src/app/layout) - This generic module holds the different component's used by this app. ie: Header, footer, nav, etc.

* [```General (Shared)```](https://github.com/priskz/sample-angular-app/tree/master/app/angular/web/src/app/shared) - This module pulls in all of the components that are commonly used throughout the application.

* [```Material (Shared)```](https://github.com/priskz/sample-angular-app/tree/master/app/angular/web/src/app/shared) - This module pulls in all of the components from Angular Material that are used through the application.

## Other Directories

* [```Generic```](https://github.com/priskz/sample-angular-app/tree/master/app/angular/web/src/app/generic) - Houses generic functionality that may be used for extension.

* [```Domain```](https://github.com/priskz/sample-angular-app/tree/master/app/angular/web/src/app/domain) - Houses and provides an interface for the domian's different Models/Objects used throughout the app.

## Other


## Disclaimer

This sample code was put together very quickly in hopes of displaying knowledge on the subject matter of practical Angular >2 usage and applied architectural concepts. While this application should be functional, it is currently dependent upon an unfiltered 3rd party API, some mock code, and zero unit testing. Specifically, some image links may be broken due to SSL issues, but the concepts/samples of the code should present themself appropriately.

Here is a link to a "running/working" stackblitz of this project: [```https://angular-he6omf.stackblitz.io/```](https://angular-he6omf.stackblitz.io/)