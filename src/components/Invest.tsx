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
  Divider,
  VStack,
} from '@chakra-ui/react'

import myImage from '../assets/wp9.jpg';

export default function Invest() {
  return (
    <Box>
    <Container maxW={'5xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 18 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Box p={6} bg={'white'} shadow="lg" borderRadius="lg">
            <Heading as="h2" size="md" mb={4} textAlign="center" color={'Orange'} textShadow="0.7px 0.7px 1px black">
              SIM AGORA VOCÊ VAI ME PERGUNTAR QUANTO CUSTA UM TREINAMENTO DESTA MAGNITUDE, ESTOU CERTO?
            </Heading>
            <Text fontSize="xl" fontWeight={600} mb={3}>
              SÓ PARA VOCÊ SABER;
            </Text>
            <VStack align="start" spacing={3} mb={4}>
              <Text>
                UM MBA NA FUNDAÇÃO GETÚLIO VARGAS, ONDE VOCÊ IRÁ APRENDER “UMA PARTE DESTE CONTEÚDO CUSTA QUASE R$100.000,00.
              </Text>
              <Text>
                OU QUALQUER OUTRA INSTITUIÇÃO, VOCÊ IRÁ GASTAR EM TORNO R$65.000,00.
              </Text>
              <Text>
                UMA FACULDADE, ONDE VOCÊ APRENDERÁ MUITA TEORIA E POUQUÍSSIMA PRÁTICA REFERENTE AOS ASSUNTOS AQUI MENCIONADOS CUSTA EM TORNO DE R$50.000,00.
              </Text>
            </VStack>

            <Text fontSize="lg" fontWeight="bold" mb={3}>
              A IDEIA AQUI, NÃO É COBRAR ESTES VALORES ABSURDOS, POIS SABEMOS QUE O NOSSO BRASIL ESTÁ PASSANDO POR UMA SITUAÇÃO DIFÍCIL,
            </Text>
            <Divider my={5} />
            <Heading as="h3" size="md" mb={3}>
              MAS VEJA ABAIXO ALGUNS DEPOIMENTOS;
            </Heading>
          </Box>
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
    </Box>
  )
}