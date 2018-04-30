# sample-angular-app

## Purpose

This sample angular app is to show samples key Angular >2 features and also applied architectural concepts.

## 3rd Party Usages

* [```Angular Material```](https://material.angular.io/) - A library of UI components following the material design spec.

* [```NewsAPI.org```](https://newsapi.org/) - A news API for pulling in some real data.

## Sample Modules

* Account - This generic module would talk to an API and be utilized for managing a user's account. Mocked functionality.

* Auth - This generic module would talk to an API and be utilized for authenticating a user. Mocked functionality.

* Core - This module houses all of the core service's utilized by this app.

* Home - This generic module is essentially the app's home page.

* Layout - This generic module holds the different component's used by this app. ie: Header, footer, nav, etc.

* General (Shared) - This module pulls in all of the components that are commonly used throughout the application.

* Material (Shared) - This module pulls in all of the components from Angular Material that are used through the application.

## Concepts

* Service Oreinted Architecture

* On Push Change Detection

* Life Cycle Hooks