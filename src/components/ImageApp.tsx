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




import ImageSlider from "./ImageSlider"

const QUOTES = ["Hi baby. Happy birthdy. I want you to know that youre the best partner I could ever have asked for. You're everything to me. I wish 27 brings with it all the joy and happiness in the world cause you derserve it and so much more. I made this for you to show you just how special you are. I love you more thn anything. --May", "Chiboy, as i have always called you since childhood. You have always been at my side, that’s some exceptional security I have always had. This is a special day to express my gratitude and love that I have for you. You are a man whom I trust as a friend and admire as a person. I wish you sunshine, rays of hope, abundant blessings, and good fortune in every coming day of your life. Cheers brother 🥂 -- Ify",
 "You know the thing is, I dont want to copy and paste messages from the internet cos This guy na person wey comot from being friends to being a brother. He’s one guy I’ll want to meet again and again if I’ll have to come back to earth. He’s not a perfect human o but him Dey turn up at when necessary. Na why I Dey call am GOAT -- Kosi ", "Happy Birthday, Elvis!  🎉  Wishing for the new year to bring you continued love, happiness, and all your favorite things, not just on your special day, but always. It will forever be amazing that we met.Thank you for always being so kind and positive. Kick ass in the new year. ❤️  -- Seun ", "Hey Elvis, you should be the best example of what your equals should want to be like in the future. I hope your birthday it's as beautiful as your mind is. Happy birthday ! -- Coffeed Cognac", "Happy birthday my Odogwu's Odogwu. I know we're never met and I'm not sure you want to meet me🌚...but I might like you just a little bit for now😌...So here it goes. Happy Birthday Elvis Anslem, thank you for all you do especially for the LOML that you stole from me😏(just joking....or am I?). You're a great guy and i hope you see that more often, I pray you get all you desire and more...🙏🏽.Happy birthday and many more years to come🥰🥰 -- Jummai","I have been staring at my keyboard I don’t even know what to write 🤦‍♂️.Probably because I can’t pen down how special he is to me, it won’t be enough. Since 2015 til; date. He's not just a friend, He's family. I love him and I wish him happy birthday. And more grace of God upon his life. -- Jumbo", "Hi Elvis, Happy birthday to you🍾🎊🎈❤️. My wish for you is a song by Jason Mraz- have it all. May you have auspiciousness and causes of success.May you have the confidence to always do your best..May you know the meaning of the word happiness.May you always lead from the beating in your chest.May you be treated like an esteemed guest.May you get to rest, may you catch your breath.And may the best of your today’s be the worst of your tomorrows.And may the road less paved be the road that you follow.And yes I know that every sentence begins with MAY 🤣Happy birthday mon ami 💕 -- Zika", "Wishing my bestie Odogwu, the absolute best on his best day of the year! Cheers to more fun, more memories and cake! Happy birthday. --Precious", "Happy birthday Elvis. We love you."

]

const IMAGES = [pic1 , pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, ]


const ImageApp = () => {
  return (
    <div >
        <ImageSlider imageUrls={IMAGES} quotes={QUOTES} />
    </div>
  )
}

export default ImageApp