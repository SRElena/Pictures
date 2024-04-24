import ImageShow from './ImagenShow'
import './ImageList.css'

function ImagenList({ images }){
    const renderImagen = images.map((image) =>{
        return <ImageShow key={image.id} image={image}/>
    })

    return(
        <div className='image-List'>
            {renderImagen}
        </div>
    )
}

export default ImagenList