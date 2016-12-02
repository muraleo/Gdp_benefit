#!/bin/sh
mongo < create_collections.js

mongoimport --db gdp_benefit --collection education --type csv --headerline --file ./data/EDULIT_DS_27092016201028036.csv
mongoimport --db gdp_benefit --collection comsumption --type csv --headerline --file ./data/UNdata_Export_comsumption.csv
mongoimport --db gdp_benefit --collection gdp --type csv --headerline --file ./data/UNdata_Export_GDP.csv
