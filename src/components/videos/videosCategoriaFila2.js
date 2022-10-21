/* eslint-disable array-callback-return */
import React from "react";
//
import VideosItemRow from "./videosItemRow";

import "../../styles/styles.css";
import "../../styles/conCate.css";


const VideosCategoriaFila2 = ({ categoria, ...props }) => {

  if(categoria){
    
    return (
      <div >      
      <div className="col-12 contenedorXcateg">
        <h1 className="titleCateg" key = {categoria.id}>{categoria.categoria}</h1>
        <div className="row">
          {props.videos && props.search(props.videos).map((video) => (
              video.categorias.map((element, index) => {
                if (categoria.categoria === element.categoria) 
                  return(
                      <VideosItemRow
                      key={index}
                      video={video}
                      >
                      </VideosItemRow> 
                      )                 
              })
            ))}
        </div>
      </div>
    </div>
  );}
  
};

export default VideosCategoriaFila2;
