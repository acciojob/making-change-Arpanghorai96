const makeChange = (c) => {
  // your name here
	let values={
		q:25,
		d:10,
		n:5,
		p:1
	}
	let penny=0,nickel=0,dime=0,quarter=0;
	while (c>0) {
		if(c>values.q)
		{
			quarter++;
			c-=values.q
		}
		else if(c>=values.d)
		{
			dime++
			c-=values.d
		}
		else if(c>=values.n)
		{
			nickel++
			c-=values.n
		}
		else if(c>=values.p)
		{
			penny++
			c-=values.p
		}
	}
	return {
		q:quarter,
		d:dime,
		n:nickel,
		p:penny
	}
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
