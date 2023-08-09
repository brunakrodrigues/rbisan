'use client'

import {
  Box,
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react';
import wp from '../assets/wp5.jpg';

export default function CallToActionWithAnnotation() {
  return (
    <Box bgImage={wp}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover">
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 16, md: 32 }}
          >
          <Heading
            fontWeight={600}
            color={'white'}
            textShadow="1px 1px 2px black"
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            <span style={{ color: '#F68B1F' }}>APRENDA</span> DE FORMA
              <span style={{ color: '#F68B1F' }}> RÁPIDA</span> <br />
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: 'xl', md: '2xl' }}>
              TUDO O QUE VOCÊ
              PRECISA SABER PARA
              <span style={{ color: '#F68B1F' }}> INICIAR SUA EMPRESA!</span>
              <br />
              OU
              <br />
              TUDO QUE VOCÊ NECESSITA PARA GERIR A SUA EMPRESA E <span style={{ color: '#F68B1F' }}>AUMENTAR O SEU FATURAMENTO.</span>
            </Text>
          </Heading>
        </Stack>
      </Container>
    </Box>
  )
}
