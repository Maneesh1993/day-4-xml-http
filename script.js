
//two object comparison same properties

//The logic is to compare not only the KEYS but also the VALUES of the two JSON dataset.
// If both are same then your output will be TRUE else FALSE.

let obj1={
    name:"person1",
    age:5,
}

let obj2={
    age:5,
    name:"person1"
}
// console.log(Object.keys(obj1)===Object.keys(obj2))  //false(bcaz order iks changed)
// console.log(Object.values(obj1)===Object.values(obj2))    //false(bcaz order iks changed)

function Two_json(o1,o2){
    let res=true;

    if(Object.keys(o1).length===Object.keys(o2).length){
        for(key in o1){
            if(o1[key]==o2[key]){
                continue;
            }else{
                res=false;
                break;
            }
        }
    }else{
        res=false;
    }
    console.log("comparing two json:",res);
}

Two_json(obj1,obj2)




 
// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))

// console.log(Object.keys(obj2))
// console.log(Object.values(obj2))



var http=new XMLHttpRequest();

    http.open("get","https://restcountries.com/v3.1/all")
    http.send()

    http.responseType="json";

    http.onload=function (){
        var data=http.response;
        console.log(data)
        // console.log(data.length)

        

        for(var i=0;i<data.length;i++){
            console.log("Country name:",data[i].name.common)
            console.log("population:",data[i].population)
            console.log("Region:",data[i].region)
            console.log("sub-region:",data[i].subregion)
            console.log(data[i].flags.svg)
    };

}