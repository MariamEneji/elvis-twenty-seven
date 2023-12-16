import {SetStateAction, useState} from 'react'
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from 'lucide-react'

type ImageSliderProps = {
    imageUrls: string[],
    quotes: string[]
}

const ImageSlider = ({imageUrls, quotes}: ImageSliderProps) => {


const [imageIndex, setImageIndex] = useState(0)
const [quoteIndex, setQuoteIndex] = useState(0)

const showNextImage = () => {
setImageIndex(index => {
    if(index === imageUrls.length - 1) return 0
    return index + 1
})


setQuoteIndex(index => {
    if(index === quotes.length - 1) return 0
    return index + 1
})

}

const showPreviousImage = () => {
    setImageIndex(index => {
        if(index === 0) return imageUrls.length - 1
        return index - 1
    })

    setQuoteIndex(index => {
        if(index === 0) return quotes.length - 1
        return index - 1
    })


}

const setIndex = (index: SetStateAction<number>) => {

    setImageIndex(index );
    setQuoteIndex(index);
  };




  return (
    <div className=' h-full font-quin flex flex-col justify-center items-center '>

<div className='h-full w-full md:w-[40%] flex relative overflow-hidden rounded-3xl  ' >
    <div className='h-full absolute  z-10 w-full bg-black/40'/>
{imageUrls.map(url => (
   
    <img key={url} className=' flex-shrink-0 flex-grow-0 block w-full  h-[20rem] md:h-[25rem] ' style={{translate: `${-100 * imageIndex}%`, transition: 'translate 300ms ease-in-out' }} src={url} alt=""
    
    />
))}


</div>

<div className=' z-10  flex md:text-xl text-white w-[97%]   md:m-4  overflow-hidden' >
{quotes.map(() => (
     <h1 className=' flex-shrink-0 flex-grow-0 w-full '  style={{translate: `${-100 * imageIndex}%`, transition: 'translate 300ms ease-in-out' }} >{quotes[quoteIndex]} </h1>
))}
</div>






        
    

        <button   onClick={showPreviousImage}   className=' btn block absolute top-0 bottom-0  cursor-pointer left-0 p-2 z-20 transition-colors ease-in-out'><ArrowBigLeft className='stroke-white fill-black '/></button>
        <button  onClick={showNextImage}  className='btn block absolute top-0 bottom-0 p-2 z-20 cursor-pointer right-0 transition-colors ease-in-out '><ArrowBigRight className='stroke-white fill-white'/></button>



        <div className='absolute  bottom-[1rem] left-[50%] flex gap-2  ' style={{translate: '-50%'}}>
            {imageUrls.map((_, index) => (
                <button className='btn' style={{transition: 'scale 100ms ease-in-out'}} key={index}  onClick={() => setIndex(index)} >{index === imageIndex ? <CircleDot className='w-4 '  /> : <Circle className='w-4 ' />} </button>
            ))}
        </div>
    </div>

 
  )

  
}

export default ImageSlider