'use client'

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Flex,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

import { motion } from 'framer-motion';

const MotionButton = motion(Button);

interface Props {
  children: React.ReactNode
}

function PriceWrapper(props: Props) {
  const { children } = props

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  )
}

export default function Pricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="5xl" color={'white'}>
          Investimento
        </Heading>
        <Text fontSize="md" color={'white'} px={8}>
          ENTÃO VOCÊ VIU, AS <span style={{ color: '#F68B1F' }}> PESSOAS ESTÃO TENDO RESULTADOS </span> E FACILMENTE PAGARIAM EM TORNO DE 6 A 10 MIL REAIS PARA OBTER ESTE CONHECIMENTO PELA NOSSA MENTORIA AO VIVO <span style={{ color: '#F68B1F' }}>  #VIRANDOOJOGO. </span>
          <br />
          A MENTORIA <span style={{ color: '#F68B1F' }}> VIRANDO O JOGO </span> DURA 2 MESES E É <span style={{ color: '#F68B1F' }}> TOTALMENTE AO VIVO.</span>
          <br />
          DAMOS AINDA UM <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}> ACOMPANHAMENTO ONLINE DE 3 MESES </span> APÓS O TÉRMINO DA MENTORIA PARA QUE VOCÊ NÃO SE SINTA SOZINHO NESTE JOGO
          <br />
          PORÉM, COMO JÁ DISSEMOS, NÃO ESTAMOS PREOCUPADOS COM SEU DINHEIRO EM NOSSA CONTA, POR ISSO IREMOS COBRAR
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12} color={'white'}>
            <Text fontWeight="500" fontSize="2xl">
              Apenas 12x de
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                R$
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                300,00
              </Text>
            </HStack>
            <Text fontSize="3xl" color={'white'}>
              Parcelado
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                ACOMPANHAMENTO ONLINE DE 3 MESES
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                TOTALMENTE AO VIVO.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                AULAS INTERATIVAS
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                PLANILHAS PRONTAS PARA DOWNLOAD
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                MATERIAL DIDÁTICO
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <MotionButton
                initial={{ scale: 1 }}
                animate={{ scale: 1.3 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                size={'md'}
                fontWeight={'bold'}
                px={6}
                colorScheme={'red'}
                bg={'#F68B1F'}
                _hover={{ bg: '#F68B1F' }}
              >
                FAZER INSCRIÇÃO
              </MotionButton>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('green.300', 'green.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Mais Popular
              </Text>
            </Box>
            <Box py={4} px={12} color={'white'}>
              <Text fontWeight="500" fontSize="2xl">
                17% DE DESCONTO
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  R$
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  3.000,00
                </Text>
              </HStack>
              <Text fontSize="3xl" color={'white'}>
                À VISTA
              </Text>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  ACOMPANHAMENTO ONLINE DE 3 MESES
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  TOTALMENTE AO VIVO.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  AULAS INTERATIVAS
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  PLANILHAS PRONTAS PARA DOWNLOAD
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  MATERIAL DIDÁTICO
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <MotionButton
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.3 }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  size={'md'}
                  fontWeight={'bold'}
                  px={6}
                  colorScheme={'red'}
                  bg={'#F68B1F'}
                  _hover={{ bg: '#F68B1F' }}
                >
                  FAZER INSCRIÇÃO
                </MotionButton>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
      </Stack>
      <Flex width="100%" alignItems="center" justifyContent="center">
      <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
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
    </Flex>
    </Box>
  )
}