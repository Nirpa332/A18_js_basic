const Userdata=[
    {id:1, name:"Nirpa",age:19,gender:"male", hasPassOut:true, occupation:"Intern"},
    {id:2, name:"Awasthi",age:21,gender:"male", hasPassOut:true, occupation:undefined},
    {id:3, name:"Jalan",age:19,gender:"male", hasPassOut:true, occupation:undefined},
    {id:4, name:"Shital",age:19,gender:"female", hasPassOut:true, occupation:undefined},
    {id:5, name:"Ishwor",age:19,gender:"", hasPassOut:false, occupation:undefined},
    {id:6, name:"Ishwor",age:19,gender:"", hasPassOut:false, occupation:undefined},
    {id:7, name:"Ishwor",age:19,gender:"", hasPassOut:false, occupation:undefined},
]

const response={
    status:200,
    message:"Data fetched successfully",
    data:Userdata
}
const getUserName = ()=>{
    const APIStatus=response.status
    if(APIStatus === 200){
        const result = response.data
        .filter((user)=>user.occupation)
        .map((user)=>user.name)
        return result;

    }else{

    }
}
console.log(getUserName());