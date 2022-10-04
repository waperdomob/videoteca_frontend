import React from "react";

//components
import { useNavigate  } from "react-router-dom";
import { Image } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import "../../styles.css";


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(5),

		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	
}));

const VideosItem = ({video, listVideos}) => {
    const history = useNavigate();
    const classes = useStyles();

    return (
            <div className="container" id="contenedorItemVideo">
                <div className="row ">
                    <div className="col-md-8  col-12 ">
                    <Button onClick={()=> history(`/seeVideo/${video.id}`)}>
                        <Image src={ video.featured_image } className="img-fluid"
                        ></Image>
                    </Button>
                    </div>
                    <div className="col-md-4 col-12 ">
                        <h3 className={classes.paper}>{video.title_espanol}</h3>                        
                        <p className="card-text">Duración: {video.duration}</p>
                        <p className="card-text">Puntuación: {video.score}</p>                        
                        <p className="card-text">{video.description_esp}</p>
                        <br></br>
                    </div>
                </div>               
            </div>
    );

};

export default VideosItem;
