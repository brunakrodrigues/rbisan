'use client'

import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Grid,
  GridItem,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
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
              // textShadow={"1px 1px 2px black"}
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
          {/* <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack> */}
        </Stack>
      </Container>
    </Box>
  )
}
