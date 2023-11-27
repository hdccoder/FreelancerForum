//1.Declare arrays containing 
const names = ["Katnis","Peeta","Tigris","Gale","Snow"] ;
const occupations = [
    "Victor",
    "Dog Wisper",
    "Mentor",
    "Earthing Instructor",
    "Dance Instructor"];
const prices = ["2k","80k","40k","150k","200k"];
function randomFreelancer (){
    const nameNum = Math.floor(Math.random() * names.length);
    const occuNum = Math.floor(Math.random() * occupations.length);
    const priceNum = Math.floor(Math.random() * prices.length);

    const freelancers = {
    Name: names[nameNum],
    Occupation: occupations[occuNum],
    Price: prices[priceNum]}
    return freelancers;
}

const randFreelancer1 = randomFreelancer()
const randFreelancer2 = randomFreelancer()
const randFreelancer3 = randomFreelancer()
const freelancers = [randFreelancer1,randFreelancer2,randFreelancer3]
const table = document.querySelector("table")
console.log(table)
function render (){
    const html = freelancers.map((freelancer) => {
        return `<tr>
            <td>${freelancer.Name} </td>
            <td> ${freelancer.Occupation} </td>
            <td>${freelancer.Price} </td>
        </tr>`;
    })
    table.innerHTML = html.join("")
    console.log(table)
}

const interval = setInterval(() => {
    const obj = randomFreelancer()
    freelancers.push(obj)
    render ()
    if(freelancers.length === 20){
        clearInterval(interval)      
    }
},1000)

render()





