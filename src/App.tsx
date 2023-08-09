import { Box, Divider } from '@chakra-ui/react'
import './App.css'
import HeroHome from './components/Hero'
import FirstHero from './components/FirstHero'
import Topics from './components/Topics'
import Learn from './components/Learn'
import ThirdHero from './components/ThirdHero'
import Profile from './components/Profile'
import CardTemplate from './components/Cards'
import ProfileTwo from './components/ProfileTwo'
import CardTemplateTwo from './components/CardsTwo'
import HowWorks from './components/HowWorks'
import Interactivity from './components/Interactivity'
import Invest from './components/Invest'
import Testimonials from './components/Testimonials'
import TestimonialVideos from './components/TestimonialVideos'
import Pricing from './components/Pricing'
import MentoriaInfo from './components/MentorialInfo'

function App() {
  return (
    <Box bg="linear-gradient(to right, #333, #111)">
      <FirstHero />
      <HeroHome />
      <Topics />
      <Learn />
      <ThirdHero />
      <Profile />
      <CardTemplate />
      <Divider mt={10}/>
      <ProfileTwo />
      <CardTemplateTwo />
      <Divider mt={10}/>
      <HowWorks />
      <Divider mt={10}/>
      <Interactivity />
      <Invest />
      <Testimonials />
      <TestimonialVideos />
      <Divider mt={10}/>
      <Pricing />
      <MentoriaInfo />
    </Box>
  )
}

export default App
