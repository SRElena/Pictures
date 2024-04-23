import imageShow from './imagenShow'
import './ImageList.css'

function imagenList({ images }){
    const renderImagen = images.map((image) =>{
        return <imageShow key={image.id} image={image}/>
    })

    return(
        <div className='image-List'>
            {renderImagen}
        </div>
    )
}

export default imagenList