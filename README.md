# Catchup
A js library for data storing, getting to any owner or element and managing cookies.

## Files

There is normal js file in Catchup.

## Usage

### With objects
``` HTML
<script>
	var owner = {};
	var data = new Catchup();
	data.set(owner, "foo", "bar");
	data.get(owner, "foo"); // returns "bar"
	data.hasData(owner); // returns true
	data.hasData(owner, "foo") // returns true
	data.removeData(owner, "foo");
	data.hasData(owner, "foo"); // returns false
</script>
```

#### Functions
1. .set()
2. .get()
3. .hasData()
4. .removeData()
5. .data()

### With DOM elements
```HTML
<script>
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	var data = new Catchup();
	data.vSet(div1, "foo", "bar"); // sets attribute data-foo="bar" to div1
	data.vGet(di2, "bar") // it gets attribute data-bar to div2
	data.vHasData(div2, "foo") // return that div2 has data-foo attribute or not
	data.vHasData(div1) // returns that div1 has data-* attributes or not
	data.vRemoveData(div1, "foo") // removes data-foo attribute to div1
</script>
// html goes here
<div id="div1">Hello World!</div>
<div id="div2" data-bar="foo">Hello again!</div>
```

#### Functions
1. .vSet()
2. .vGet()
3. .vHasData()
4. .vRemoveData()
5. .vData()

'v' is prefix for data functions for handling data with data-* attributes.
You can use normal functions instead of 'v' functions with elements but it can't handle with data-* attributes.

### Cookie Handling

```HTML
<script>
	var data = new Catchup();
	data.cSet("foo", "bar"); // sets foo cookie with bar value in current document
	data.cSet("foo", "bar", anotherDocument) // sets cookie in another document responsed by ajax or a frame document
	data.cGet("foo"); // gets foo cookie in current document
	data.cGet("foo", anotherDocument) // gets foo cookie in another document
	data.cRemoveData("foo"); // removes foo cookie in current document
	data.cRemoveData("foo", anotherDocument) // removes foo cookie in another document
	data.cHasData("foo"); // checks foo cookie exists or not empty in current document
	data.cHasData("foo", anotherDocument) // checks foo cookie exists or not empty in another document
</script>
```
#### Another Functions
 ```HTML
<script>
	Catchup.rawCookie({foo:"bar", john:"doe"}); // returns "foo=bar; john=doe;"
	Catchup.uRawCookie("foo=bar; john=doe;"); // returns {foo:"bar", john:"doe"}
</script>
 ```
 #### Functions
 1. .cSet()
 2. .cGet()
 3. .cHasData()
 4. .cRemoveData()
 5. .cData()
 6. Catchup.rawCookie()
 7. Catchup.uRawCookie()
