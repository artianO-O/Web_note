function arrfind(x,arr){
    for(var i = 0,i<arr.length,i++){
        if(x == arr[i]){
            return i;
        }
    }
}

var tree = {
    name:root,
    {
        children:[{
            name:children1,
            children:[{
                name:children1_1
                children:[],
            },
            {
                name:children1_2
                children:[],
            },
            {
                name:children1_3
                children:[],
            },]
        },
        {name:children2,
            children:{
                name:children2_1
                children:[],
            },
        {name:children3,
        children:[]}}
    }
}


var promis1 = function (resolve,reject){
    console.log("凡科快图");
    settimeOut(function(){
        cosole.log("凡科微传单")
    },0);
}

var promis2 = function (resolve,reject){
    console.log("凡科商城");
    resolve.then(
        cosole.log("凡科互动");
    )
}

async funciton main(){
    console.log("凡科建站");
    console.log(awit all promis(promis1,promis2));
    console.log("凡科小程序");
    return "凡科公众号助手"
}
console.log(typeof main())