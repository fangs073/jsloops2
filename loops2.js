var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];


// Problem 1


	// animals.forEach(function(val,i,arr) {
	// 	if (i !== arr.length-1)
	// 		console.log(val)
	// })

	for (var i =0; i < animals.length-1; i++)
		console.log(animals[i])

	console.log('\n');

	// animals.forEach(function(val,i,arr) {
	// 	if (i % 2 === 0)
	// 		console.log(val)
	// })
	for (var i = 0; i < animals.length; i +=2)
		console.log(animals[i])


	console.log('\n');

	for (var i = animals.length-1; i >=0; i--)
		console.log(animals[i])	

	// animals.reverse().forEach(function(val){
	// 	console.log(val)
	// })

	console.log('\n');



	for (var i = 0; i< animals.length; i++) {
		console.log(animals[i]);
		if (i !== animals.length-1 && i !== 0)
			console.log(animals[i])
	}

	// animals.reverse()forEach(function(val,i,arr){
	// 	console.log(val);
	// 	if (i !== 0 && i !== arr.length-1)
	// 		console.log(val)
	// })
