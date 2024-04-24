function ImagenShow({ image }){
    return(
        <div>
            <img src={image.urls.small}
            alt={image.alt_description}/>
        </div>
    )
}

export default ImagenShow