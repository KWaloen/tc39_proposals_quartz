```dataview

TABLE 
file.tags AS "Stages"
WHERE contains(file.outlinks, link("API Change")) 
AND contains(file.outlinks, link("Inactive")) 

```

