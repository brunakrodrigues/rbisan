'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Button,
  Link,
} from '@chakra-ui/react'
import CustomAccordion from './Accordion'
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

export default function Learn() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pt={{ base: 20, md: 36 }}
          pb={{ base: 18, md: 30 }}
        >
          <Heading
            fontWeight={600}
            color={'white'}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            PARA QUEM É A MENTORIA AO VIVO? <br />
            <Text as={'span'} color={'#F68B1F'}>
              #VIRANDOOJOGO.
            </Text>
          </Heading>
          <Text color={'#FFFF'} fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}>
            PRIMEIRO VAMOS FALAR SOBRE ALGUNS PONTOS QUE MUITA GENTE TEM DIFICULDADE E QUE IMPEDE A SUA EMPRESA DE ATINGIR RESULTADOS MAIORES E MELHORES.
            SE VOCÊ SE ENQUADRAR, EM ALGUNS DOS ITENS ABAIXO ESTA MENTORIA COM CERTEZA É PARA VOCÊ.
          </Text>
        </Stack>
        <CustomAccordion />
        <Stack
          spacing={3}
          py={{ base: 16, md: 24 }}
          color={'#F68B1F'}
          alignItems="center"
          width="100%"
        >
          <Link href="https://chk.eduzz.com/1875465" isExternal color="#F68B1F" _hover={{color:'#F68B1F'}}>
            <Text fontSize='xl' textDecoration={'underline'}>
              VENHA FAZER PARTE DA NOSSA MENTORIA AO VIVO
              “VIRANDO O JOGO”
            </Text>
          </Link>
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
              mt={16}
              colorScheme={'red'}
              bg={'#F68B1F'}
              _hover={{ bg: '#F68B1F' }}
            >
              PRECISO DESTA MENTORIA
            </MotionButton>
        </Stack>
      </Container>
    </>
  )
}