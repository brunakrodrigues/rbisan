'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'

import myImage from '../assets/wp2.jpg';

export default function HowWorks() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            color={'white'}
            fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              ENTÃO AGORA VOCÊ ESTÁ SE PERGUNTANDO COMO ISSO VAI FUNCIONAR, NÃO É MESMO?
            </Text>
            <br />
            <br />
            <Text as={'span'} color={'#F68B1F'}>
              NÓS VAMOS TE AJUDAR A RESOLVER TUDO ISSO EM 8 SEMANAS.
            </Text>
            <br/>
            <br/>
            <Text as={'span'} color={'white'}>
              COM A MENTORIA AO VIVO
              VIRANDO O JOGO
            </Text>
          </Heading>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={myImage}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}