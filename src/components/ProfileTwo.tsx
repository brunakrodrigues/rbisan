'use client'

import {
  Box,
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
  useBreakpointValue
} from '@chakra-ui/react';

import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import profile from '../assets/lu.png';

export default function ProfileTwo() {
  return (
    <Container maxW={'5xl'} pt={20}>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            borderRadius={500}
            w={400}
            h={400}
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
                DRA. LUCIANE SIPPERT LANZANOVA
              </Text>
              <br />{' '}
              <Text color={'#F68B1F'} as={'span'} fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
                GESTÃO EMOCIONAL & EDUCAÇÃO EMPREENDEDORA
              </Text>{' '}
            </Heading>
            <UnorderedList spacing={3} color={'white'}>

              <ListItem>25 ANOS DE CARREIRA <br /> REALIZOU MAIS DE 1000 PALESTRAS E APRESENTAÇÕES PÚBLICAS</ListItem>
              <ListItem>PROFESSORA UNIVERSITÁRIA, COMUNICADORA E PALESTRANTE MOTIVACIONAL E COMPORTAMENTAL</ListItem>
              <ListItem>ESPECIALISTA EM LINGUÍSTICA, NEUROLINGUÍSTICA, PNL E DESENVOLVIMENTO HUMANO</ListItem>
              <ListItem>COORDENADORA DE PROJETOS DE PESQUISA E EXTENSÃO UNIVERSITÁRIA</ListItem>
              <ListItem>EDITORA-CHEFE DA REVISTA CIENTÍFICA REVUERGS</ListItem>
              <ListItem>COORDENADORA DO JORNAL METAMORFOSE – RS</ListItem>
              <ListItem>COORDENADORA DA REVISTA ONLINE METAMORFOSE</ListItem>

            </UnorderedList>
          </Stack>
        </Flex>
      </Stack>
      <Box maxWidth="100%" p={4} boxShadow="lg" mt={20} borderRadius="md" border='1px solid white' color={'white'} overflow="hidden">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          <GridItem>
            <Heading size="md" mb={2}>OUTROS CONHECIMENTOS E FORMAÇÕES;</Heading>
            <UnorderedList>
              <ListItem>TREINADORA COMPORTAMENTAL</ListItem>
              <ListItem>TERAPEUTA HOLÍSTICA</ListItem>
              <ListItem>MESTRE REIKI</ListItem>
              <ListItem>PRELETORA SNI</ListItem>
            </UnorderedList>
          </GridItem>

          <GridItem display="flex" alignItems="center" justifyContent="center">
            <Link href='https://www.linkedin.com/in/ricardo-bisan-b05a0721/' isExternal mr={8} >
              <Image src={linkedin} />
            </Link>
            <Link href='https://www.instagram.com/LUCIANESIPPERT/' isExternal>
              <Image src={instagram} />
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  )
}