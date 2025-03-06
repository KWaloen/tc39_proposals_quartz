#API_Change 

# Inactive
```dataview

TABLE 
file.tags AS "Stages"
WHERE contains(file.outlinks, link("API Change")) 
AND contains(file.outlinks, link("Inactive")) 

```

# Test Scatterplot

<div id="scatterplot"></div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="/static/scatterplot.js"></script>


# Stage 0

```dataview

TABLE 
file.tags AS "Stages"
WHERE contains(file.outlinks, link("API Change")) AND contains(file.tags, "#Stage0Tag") 

```
# Stage 1

```dataview

TABLE 
file.tags AS "Stages"
WHERE contains(file.outlinks, link("API Change")) AND contains(file.tags, "#Stage1Tag") 

```

# Stage 2

```dataview

TABLE 
file.tags AS "Stages"
WHERE contains(file.outlinks, link("API Change")) AND contains(file.tags, "#Stage2Tag") 

```

# Stage 2.7

```dataview

TABLE 
file.tags AS "Stages"
WHERE contains(file.outlinks, link("API Change")) AND contains(file.tags, "#Stage_2_7Tag") 

```

# Stage 3

```dataview

TABLE 
file.tags AS "Stages"
WHERE contains(file.outlinks, link("API Change")) AND contains(file.tags, "#Stage3Tag") 

```

# Stage 4

```dataview

TABLE 
file.tags AS "Stages"
WHERE contains(file.outlinks, link("API Change")) AND contains(file.tags, "#Stage4Tag") 

```


























