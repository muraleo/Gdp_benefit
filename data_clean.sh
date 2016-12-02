#!/bin/sh
mongo < edu_select.js
python edu_find3.py
