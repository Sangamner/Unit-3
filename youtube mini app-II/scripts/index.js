// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY] 
//AIzaSyC-DJJmiqLHgv7jwgJKs5IfZHDrCM9E76o
//fetch(https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=AIzaSyC-DJJmiqLHgv7jwgJKs5IfZHDrCM9E76o)
const API="AIzaSyC-DJJmiqLHgv7jwgJKs5IfZHDrCM9E76o";


 async function myfun(){
  const res= await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyC-DJJmiqLHgv7jwgJKs5IfZHDrCM9E76o")
  let data=await res.json();
  console.log(data)
   append(data.items)
}
myfun()



const searchVideos=async () =>{
    try{
          const q = document.getElementById("qurey").value;
          const res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=${API}`)
          const data =await res.json();
          // console.log(data.items);
          append(data.items)
        }catch(err){
         console.log(err);
    }
};
const append= (videos) => {
    let show_videos=document.getElementById("show_videos");
    show_videos.innerHTML=null;
    videos.forEach(({id:{videoId}, snippet: {title}}) =>{
         let div = document.createElement("div");
         let iframe = document.createElement("iframe");
         iframe.src=  `https://www.youtube.com/embed/${videoId}`;
         iframe.width="100%";
         iframe.height="100%";
         iframe.allow="fullscreen";
         let h3 = document.createElement("h3");
         h3.innerText=title;
         div.append(iframe,h3);
        show_videos.append(div);
        document.getElementById("qurey").value=null;
    
        let video={
          title,
          videoId,
        };

        div.onclick=()=>{
          playVideo(video)
        }
      });
};
let arr=JSON.parse(localStorage.getItem("video"))||[]; 
let playVideo=(video)=>{
     console.log(video);
     arr.push(video)
    localStorage.setItem("video",JSON.stringify(video))
      window.location.href="video.html";
}