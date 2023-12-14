import React from 'react'

import pic1 from "../assets/twentyseven/pic1.jpg"
import pic2 from "../assets/twentyseven/pic2.jpg"
import pic3 from "../assets/twentyseven/pic3.jpg"
import pic4 from "../assets/twentyseven/pic4.jpg"
import pic5 from "../assets/twentyseven/pic5.jpg"
import pic6 from "../assets/twentyseven/pic6.jpg"
import pic7 from "../assets/twentyseven/pic7.jpg"
import pic8 from "../assets/twentyseven/pic8.jpg"
import pic9 from "../assets/twentyseven/pic9.jpg"
import pic10 from "../assets/twentyseven/pic10.jpg"
import pic11 from "../assets/twentyseven/pic5.jpg"
import pic12 from "../assets/twentyseven/pic12.jpg"



import ImageSlider from "./ImageSlider"

const QUOTES = ["Hi baby. Happy birthdy. I want you to know that youre the best partner I could ever have asked for. You're everything to me. I wish 27 brings with it all the joy and happiness in the world cause you derserve it and so much more. --May",
 "You know the thing is, I dont want to copy and paste messages from the internet cos This guy na person wey comot from being friends to being a brother. He’s one guy I’ll want to meet again and again if I’ll have to come back to earth. He’s not a perfect human o but him Dey turn up at when necessary. Na why I Dey call am GOAT -- Kosi ", "Happy Birthday, Elvis! Wishing for the new year to bring you continued love, happiness, and all your favorite things, not just on your special day, but always. It will forever be amazing that we met.Thank you for always being so kind and positive. Kick ass in the new year.  -- Seun ", "Hey Elvis, you should be the best example of what your equals should want to be like in the future. I hope your birthday it's as beautiful as your mind is. Happy birthday ! -- Coffeed Cognac", '5',

]

const IMAGES = [pic1 , pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12]


const ImageApp = () => {
  return (
    <div >
        <ImageSlider imageUrls={IMAGES} quotes={QUOTES} />
    </div>
  )
}

export default ImageApp