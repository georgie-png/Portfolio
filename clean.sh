#!/bin/bash

for file in *.html; 
do
 sed -i.bak 's/padding-bottom:80vh!important;//g' "$file";
 sed -i.bak 's/margin:var(--sidebar-margin);//g' "$file"; 

done
