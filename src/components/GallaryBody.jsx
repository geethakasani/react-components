import imageData from "./ImageData.jsx"
export default function(){
    
        
          return(
            <div>
                {imageData.map(image=>(
            <div key={image.id} className="column">
              <img src={image.img} alt=""></img>
            </div>
          ))}
          </div>
        );
      
}