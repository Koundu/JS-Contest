const url = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
let order_status = false;
let paid = false;

const myPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve();
    },300)
})

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function getMenu(){fetch(url).then((data) =>{
    return data.json(); //Converted to Object
}).then((objectData)=> {
    let tableData ="";
    objectData.map((values) =>{
        tableData+= `
        <tr>
        <th scope="row">${values.id}</th>
        <td>${values.name}</td>
        <td>${values.price}</td>
        <td><img src="${values.imgSrc}" /></td>
        </tr>
        `
    })
    document.getElementById("table_body").innerHTML = tableData;
})
}

function takeOrder(){fetch(url).then((data) =>{
    return data.json();
}).then((objectData) =>{
    const order1 = getRandomInt(1,25);
    const order2 = getRandomInt(1,25);
    const order3 = getRandomInt(1,25);
    let tableData = "";
    objectData.map((values) =>{
        if(values.id ===order1){
        tableData+= `
        <tr>
        <th scope="row">${values.id}</th>
        <td>${values.name}</td>
        <td>${values.price}</td>
        <td><img src="${values.imgSrc}" /></td>
        </tr>   
        `
        }
        else if(values.id === order2){
            tableData+= `
            <tr>
            <th scope="row">${values.id}</th>
            <td>${values.name}</td>
            <td>${values.price}</td>
            <td><img src="${values.imgSrc}" /></td>
            </tr>   
            `          
        }
        else if(values.id === order3){
            tableData+= `
            <tr>
            <th scope="row">${values.id}</th>
            <td>${values.name}</td>
            <td>${values.price}</td>
            <td><img src="${values.imgSrc}" /></td>
            </tr>   
            `
        }
    })
    document.getElementById("table_body_ordered").innerHTML = tableData;
    alert("Random Orders are Selected");
})
}


function thankyouFunc(){
    if(paid == true && order_status== true)
    {
    alert("Bill Payment Done!! \nThank you for Eating Withus Today!! \nHope to Visit Again!!");
    }
}

function errorCatch(){
    alert("Error Found in the Code!!");
}

function orderPrep(){
    return order_status = true;
    console.log(order_status, paid);
}
function payOrder(){
    return paid = true;
    console.log(paid,order_status);
}
myPromise
    .then(getMenu,errorCatch)
    .then(setTimeout(takeOrder,2500),errorCatch)
    .then(setTimeout(orderPrep,1500),errorCatch)
    .then(setTimeout(payOrder,1000),errorCatch)
    .then(setTimeout(thankyouFunc,8000),errorCatch)


