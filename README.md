# Catchup
Catchup is a js library for data storing and getting to any owner or element by js.

## Files

There is normal js and minimized js file in Catchup.

## Usage

### With objects
``` HTML
<script>
	var owner = {};
	var data = new Catchup();
	data.set(owner, "foo", "bar");
	data.get(owner, "foo"); # returns "bar"
	data.has(owner); # returns true
	data
