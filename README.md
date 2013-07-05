# fueleconomy

## What it is

A node module for computing fuel economy and related measurements

## Current Version

0.0.4

## Installing

    > npm install fueleconomy

## How to Use

    var fuel = require('fueleconomy');
  
    > fuel("65mpg").to("L/100km");
    
    3.6184615384615384
  
    > fuel("100mpg").to("L/100km")
    
    2.352
  
    > fuel("100mpg").to("km/L")
    
    42.51700680272109
    
    > fuel("42.517km/L").to("mpg")
    
    99.99998400000001
