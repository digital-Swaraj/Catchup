# Catchup
A js library for data storing, getting to any owner or element and managing cookies.

## Files

There is normal js and minimized js file in Catchup.

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
