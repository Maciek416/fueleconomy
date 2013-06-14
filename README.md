# fueleconomy

## What it is

A node module for computing fuel economy and related measurements

## Current Version

0.0.2

## Installing

    > npm install fueleconomy

## How to Use

    var fuel = require('fueleconomy');

    fuel.conversions.mpg_Lper100km(10); // 23.52

    fuel.consumption.mpg(100, 10); // 10

    fuel.range.miles(10, 100); // 1000
