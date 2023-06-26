 var body = document.querySelector('body');
 var x = document.createElement("BUTTON");
 var t = document.createTextNode("Click me");
 const input = document.createElement('INPUT');
 const select = document.createElement('SELECT');
 const opt = document.createElement('OPTION');
 const opt2 = document.createElement('OPTION');
 const opt3 = document.createElement('OPTION');
 const div = document.createElement('div');
 const name = document.createElement('p');
 const age = document.createElement('p');
 const count = document.createElement('p');
 // const input = document.createElement('p');

 opt.innerHTML = 'FR'
 opt2.innerHTML = 'Italy'
 opt3.innerHTML = 'Belguim'

 x.append(t);
 body.append(input, x,select);
 select.append(opt,opt2,opt3);
 // // const userInput = document.querySelector("#input").value;

 let theLEst = [];

 input.nextElementSibling.addEventListener("click", (e) => {
 	let userinpo = e.target.previousElementSibling.value; //here we get the input of the label
 	fetch(`https://api.agify.io/?name=${userinpo}&country_id=${select.value}`)
 		.then(response => response.json())
 		.then((data) => {
 			const name = document.createElement('p');
 			const age = document.createElement('p');
 			const count = document.createElement('p');
 			const country = document.createElement('p');
 			name.innerHTML = data.name
 			age.innerHTML = data.age
 			count.innerHTML = data.count
 			country.innerHTML = data.country_id
 			body.appendChild(name)
 			body.appendChild(age)
 			body.appendChild(count)
 			body.appendChild(country)
 			// console.log(data.name)
 			console.log(data.count)
 		})
 		.catch(error => {
 			console.log('There was an error!', error)
 		})
 });
 localStorage.setItem('data', JSON.stringify(theLEst));


 // input.addEventListener("change", (e) => {
 // 	const myFunction = () =>  {
 // 		const fetchName = name => fetch('https://api.agify.io/?name=' + name)
 // 		let userinpo = document.querySelector("INPUT").value
 // 		userinpo = e.target.value;
 // 		fetchName(userinpo)
 // 			.then(response => response.json())
 // 			.then(json => {
 // 				name.innerHTML = json.name
 // 				age.innerHTML = json.age
 // 				count.innerHTML = json.count
 // 				body.appendChild(name)
 // 				body.appendChild(age)
 // 				body.appendChild(count)
 // 				// console.log(json.name)
 // 				console.log(json.count)
 // 			})
 // 			.catch(error => {
 // 				console.log('There was an error!', error)
 // 			})
 // 	}
 // 	x.addEventListener("onclick", myFunction());
 // });


 // addEventListener("keyup", (event) => {
 // const fetchName = name => fetch('https://api.agify.io/?name='+name)
 // fetchName(userinpo)
 // .then(response => response.json())
 // .then(json => {
 //   console.log(json.age)
 //   console.log(json.name)
 //   console.log(json.count)
 // })
 // .catch(error => {
 //   console.log('There was an error!', error)
 // })
 // });