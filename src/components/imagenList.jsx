import imageShow from './imagenShow'

function imagenList({ images }){
    const renderImagen = images.map((image) =>{
        return <imageShow key={image.id} image={image}/>
    })

    return(
        <div>
            {renderImagen}
        </div>
    )
}

export default imagenList