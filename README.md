### **Angular 9 Project**

Each of the components, directives and services were generated with the command "npm g(enerate)". For each component generated, a route had to be created. I initialized the backend with the JSON server and compile the frontend to read .ts and generate .js.

» Installed Angular
`npm i -g @angular/cli`
» Generating my app
`ng new my-app`
» Started npm by generating package.json
`init npm - y`
» Generating package-lock.json
`npm i jason-server`
» Generating frontend
`ng new frontend -- minimal` (option CSS)

And so on, I generated the components, directives and services:
`ng g c components/template/footer`
`ng g c components/template/nav`
`ng g c views/home`
`ng g c components/template/header`
`ng g c views/product-crud`
`ng g c components/product/product-create`
`ng g d directives/pink`
`ng g d directives/for`
`ng g s components/product/product`
`ng g c components/product/product-read`
`ng generate @angular/material:table components/product/product-read2`
`ng g c component/product/product-update`
`ng g c component/product/product-delete`

Schematics Material
https://material.angular.io/guide/schematics
