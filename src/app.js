const mongoose = require("./model/connectivity")





// const schema2 = new mongoose.Schema({
    
//     mobile_no: String,
//     DOB : String
// })


//  const Playlist = new mongoose.model("usersProfile",schema2)



// const recent2 = new Playlist({
    
//     mobile_no:"9888888888" ,
//     DOB : "22/4/1996"
// })

//  recent2.save()


const playlistSchema =  new mongoose.Schema(
    {
        firstname : String,
        email : String ,
        lastname: String ,
        password: String,
        age:String,
    }
     )
     const Playlist = new mongoose.model("user",playlistSchema) 
     const recent = new Playlist({
        firstname : "sunny",
        email : "sunnyyadav988@gmail.com",
        lastname: "yadav",
        password: "sunnny@123",
        age:"23"
     });
     const recent2 = new Playlist({
        firstname : "sunny",
        email : "sunnyyadav988@gmail.com",
        lastname: "yadav",
        password: "sunnny@121",
        age:"22"
     });
     const recent3 = new Playlist({
        firstname : "sunny",
        email : "sunnyyadav988@gmail.com",
        lastname: "yadav",
        password: "sunnny@122",
        age:"23"
     });
     const recent4 = new Playlist({
        firstname : "Deepak",
        email : "Deepakyadav988@gmail.com",
        lastname: "yadav",
        password: "sunnny@124",
        age:"24"
     });

        const recent5 = new Playlist({
            firstname : "rahul",
            email : "rahul988@gmail.com",
            lastname: "katoch",
            password: "sunnny@125",
            age:"25"
         });
         const recent6 = new Playlist({
            firstname : "aman",
            email : "aman988@gmail.com",
            lastname: "kumar",
            password: "sunnny@126",
            age:"26"
         });
         const recent7 = new Playlist({
            firstname : "guddu",
            email : "guddu988@gmail.com",
            lastname: "yadav",
            password: "sunnny@127",
            age:"27"
         });
         const recent8 = new Playlist({
            firstname : "akash",
            email : "akash988@gmail.com",
            lastname: "kumar",
            password: "sunnny@128",
            age:"28"
         });
   

   // Playlist.insertMany([recent2,recent3,recent4,recent5,recent6,recent7,recent8])
   

const called = async ()=>{
   const reg =     await Playlist.find()
   let fetchage = reg.map((item)=>{
      return item.age
     })
  console.log(fetchage)
  let sum =0 
  let avg ;
  let len = fetchage.length;
//   for(let i = 0;i<len;i++){
// sum = sum + +fetchage[i]
//   }
for(let number of fetchage){
   sum = sum + +number
}
  console.log(len)
  console.log(sum)
  avg = sum/len
  console.log(avg)


  const del = await Playlist.deleteMany({age:{$gt:"25"}})
  console.log(reg)
    
   
}

 called()



 
     