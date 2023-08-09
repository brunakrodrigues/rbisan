'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Image, Text, Stack, Button, Flex, Heading } from '@chakra-ui/react'
// import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'
import zero from '../assets/0.png';
import um from '../assets/1.png';
import dois from '../assets/2.png';
import tres from '../assets/3.png';
import quatro from '../assets/4.png';
import cinco from '../assets/5.png';
import seis from '../assets/6.png';
import sete from '../assets/7.png';
import logo from '../assets/logow.png';

import { motion } from 'framer-motion';

const MotionButton = motion(Button);

interface FeatureProps {
  title: string
  image: ReactElement
}

const Feature = ({ title, image, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {image}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
    </Stack>
  )
}

export default function Topics() {
  return (
    <Box p={4} color={'white'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
        >
        <Flex
        align="center"
        justify="center"
      >
          <Image src={logo} alt="Logo" />
        </Flex>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          MENTORIA AO VIVO <br />
          "VIRANDO O JOGO"<br />
          <span style={{ color: '#F68B1F' }}>APRENDA NA PRÁTICA</span>
          <Text as={'span'} color={'green.400'}>
          </Text>
        </Heading>
        <Text color={'white'} fontSize={{ base: '1xl', sm: '2xl', md: '3xl' }}>
          SALAS COM ATÉ 10 MENTORADOS
          ESTUDOS DE CASOS PRÁTICOS DA SUA EMPRESA
          O QUE VOCÊ VAI VER NA MENTORIA AO VIVO!
        </Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <Feature
          image={<Image src={zero} w={10} h={10} />}
          title={'FINANÇAS EMPRESARIAIS'}
        />
        <Feature
          image={<Image src={um} w={10} h={10} />}
          title={'GESTÃO ESTRATÉGICA'}
        />
        <Feature
          image={<Image src={dois} w={10} h={10} />}
          title={'CAMPANHAS DE VENDAS'}
        />
        <Feature
          image={<Image src={tres} w={10} h={10} />}
          title={'ANÚNCIOS DE PRODUTOS'}
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} mt={14}>
        <Feature
          image={<Image src={quatro} w={10} h={10} />}
          title={'FLUXO DE CAIXA INVESTIMENTOS'}
        />
        <Feature
          image={<Image src={cinco} w={10} h={10} />}
          title={'GESTÃO DE PESSOAS FORMAÇÃO DE LIDERES E EQUIPES'}
        />
        <Feature
          image={<Image src={seis} w={10} h={10} />}
          title={'CAMPANHAS: MOTIVACIONAIS VENDAS PREMIAÇÕES E METAS'}
        />
        <Feature
          image={<Image src={sete} w={10} h={10} />}
          title={'GOOGLE INSTAGRAM FACEBOOK TIKTOK'}
        />
      </SimpleGrid>
      <Flex
        align="center"
        justify="center"
        mt={16}
      >
            <MotionButton
              initial={{ scale: 1 }}
              animate={{ scale: 1.3 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              rounded={'full'}
              size={'lg'}
              fontWeight={'bold'}
              px={6}
              colorScheme={'red'}
              bg={'#F68B1F'}
              _hover={{ bg: '#F68B1F' }}
            >
              QUERO PARTICIPAR
            </MotionButton>
          </Flex>
    </Box>
  )
}