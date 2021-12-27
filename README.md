# MyStore Project

## Code Base

All code resides inside the `MyStore` folder

## Overview

Frontend project using the Angular framework to create a storefront. Leveraging the features Angular provides to make this all come together

## Deploying

To deploy the project, run `ng serve`.

This will create a local server running on port `4200`. 

Connect to: `http:localhost:4200`

This is the best part of Angular! Makes it super easy to work with!

## Unit Testing

As per the project rubric, unit testing has not been included in this project. If you do decide to add it, you can run `ng test` to run your tests.

## Building

To build this project ready for deployment, run `ng build`

# Project Structure

## Routing

### `/`

Returns a list of all the products available

### `/product:id`

A detailed product page about the item

### `/checkout`

Takes the user to the checkout page

### `/order`

Once a user successfully completes their order, this page will be shown.

## Services

### HTTP Service

To simulate working with a REST API, the project uses the HTTP service which returns observables that can be subscribed to which returns data from `data.json` in the `assets` folder.

This effectively renders the project "offline" but has the infrastructure in place to smoothly transition to an API endpoint. 

### Cart Service

The Cart service is shared between components and acts like the "state" by holding onto the value of the cart, handling adding, updating and deleting items from the users cart as well as useful functionality such as returning the cart total.

Since so many components need access to the cart, this is a better approach to take rather than passing information via Input and Output decorators.

## Modules

### Product Module

As the name implies, this houses the product components. There are Three components in this module:

 - `productlist`
 - `productitem`
 - `productpage`

### Cart Module

Houses the `cart-checkout` component. 

### Components Module

This is for components that are shared throughout the project such as the `navbar` component as well as a location for components that don't need to be logically separated or nested such as the `order` component used for just showing an order success page.

## Components

### Product Components

 - `productlist`: Parent component for `productitem`. This component acts as a container to initially pull the Product data with the HTTP service and iterates through the result rendering a `productitem` for each product in the list
 - `productitem`: Renders the product on the product page
 - `productpage`: This displays the full description of the item. When the user clicks on the product, this is what will be show

### Cart Components

 - `cart-checkout`: Houses the entire checkout process and heavily leverages the cart module. The user will enter the details here and will then be presented with a successful order if everything is in order. Here the user can update their cart such as removing items or updating quantities.

### Generic Components

 - `navar`: Renders the Navigation Bar visible throughout the entire site
 - `order`: Upon the user submitting the form from the `cart-checkout` component, an Order Success page is made visible