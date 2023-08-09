'use client'

import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

export default function HeroHome() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 20, md: 28 }}
        pb={{ base: 16, md: 22 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              color={'white'}
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
              MENTORIA AO VIVO
            </Text>
            <br />
            <Text as={'span'} color={'#F68B1F'} >
              VIRANDO O JOGO
            </Text>
          </Heading>
          <Text color={'white'} fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }} >
            (FAÇA PARTE DESTE MOVIMENTO)
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} ml={6} direction={{ base: 'column', sm: 'row' }}>
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
              FAZER INSCRIÇÃO
            </MotionButton>
          </Stack>
          <Stack spacing={{ base: 4, sm: 6 }} ml={6} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              bg={'black'}
              color={'white'}
              fontWeight={'normal'}
              _hover={{ bg: '#494949' }}
              px={6}>
              TIRAR DÚVIDAS
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <iframe
            width="600"
            height="350"
            src="https://www.youtube.com/embed/3zdeJMJIMFQ"
            title="Programas de Fidelidade como fidelizar seus clientes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </Flex>
      </Stack>
    </Container>
  )
}
