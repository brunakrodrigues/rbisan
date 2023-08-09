'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useBreakpointValue,
} from '@chakra-ui/react'

import profile from '../assets/perfil.jpeg';
import linkedin from '../assets/linkedin.png'

export default function Profile() {
  return (
    <Container maxW={'5xl'} pt={20}>
      <Stack maxH={'60vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            borderRadius={500}
            src={profile}
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color={'white'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                RICARDO BISAN
              </Text>
              <br />{' '}
              <Text color={'#F68B1F'} as={'span'} fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
                GESTÃO ESTRATÉGICA & VENDAS
              </Text>{' '}
            </Heading>
            <UnorderedList spacing={3} color={'white'}>

              <ListItem>35 anos de carreira</ListItem>

              <ListItem>MBA pela Fundação Getúlio Vargas em Gestão e Controladoria</ListItem>

              <ListItem>Administrador de Empresas</ListItem>

              <ListItem>Formado em Tecnologia da Informação</ListItem>

              <ListItem>Diplomado pelo Behavior Coach Institute New York e pela International Coach Council England</ListItem>

              <ListItem>Analista Comportamental</ListItem>

              <ListItem>Estrategista para empresas</ListItem>

            </UnorderedList>
          </Stack>
        </Flex>
      </Stack>
      <Box maxWidth="100%" p={4} boxShadow="lg" mt={20} borderRadius="md" border='1px solid white' color={'white'} overflow="hidden">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <GridItem>
          <Heading size="md" mb={2}>OUTROS CONHECIMENTOS E FORMAÇÕES;</Heading>
            <UnorderedList>
              <ListItem>BMF BOVESPA</ListItem>
              <ListItem>FLUXO DE CAIXA – PROJEÇÃO E ADMINISTRAÇÃO.</ListItem>
              <ListItem>INTELIGÊNCIA EMOCIONAL.</ListItem>
              <ListItem>NETWORKING E ESTRATÉGIAS DE RELACIONAMENTO</ListItem>
              <ListItem>GESTÃO ESTRATÉGICA DE PESSOAS</ListItem>
            </UnorderedList>
          </GridItem>

          <GridItem display="flex" alignItems="center" justifyContent="center">
            <Link href='https://www.linkedin.com/in/ricardo-bisan-b05a0721/' isExternal>
            <Image src={linkedin} />
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  )
}