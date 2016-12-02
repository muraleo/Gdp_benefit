#!/bin/sh
python analysis_gdp_com.py
python analysis_gdp_edu.py
mongo < analysis_gourp.js
