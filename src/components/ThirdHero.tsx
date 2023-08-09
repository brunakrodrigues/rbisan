'use client'

import {
  Badge,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'

export default function ThirdHero() {
  return (
    <>
      <Stack direction={{ base: 'column', md: 'row' }} bg={'white'}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
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
                SE IDENTIFICOU?
              </Text>
              <br />{' '}
              <Text color={'gray.600'} as={'span'}>
                ENTÃO SAIBA QUE:
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'lg', lg: '2xl' }} fontWeight={'bold'} color={'#F68B1F'} textDecoration={'underline'}>
              NÓS VAMOS TE AJUDAR A RESOLVER TUDO ISSO EM 8 SEMANAS.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </Stack>

      <Container maxW="container.lg" my={12} p={5} bgColor="gray.50" borderRadius="lg" shadow="md">
        <Text fontSize="xl" mb={4}>
          VOCÊ ENTENDE QUE, NÃO TER COMPLETA NOÇÃO DOS PONTOS QUE ABORDAMOS ACIMA, DIFICULTA SEU CRESCIMENTO OU ATÉ MESMO A ESTABILIDADE DA SUA EMPRESA?
        </Text>

        <Heading size="lg" my={4}>
          AFINAL, O QUE VOCÊ QUER?
        </Heading>

        <Text mb={4}>
          ESTÁ TUDO CERTO EM QUERER FICAR DO TAMANHO OU DO JEITO EM QUE ESTÁ HOJE, MAS, EU TE PERGUNTO:
          <br />
          DA PRA GANHAR MAIS FAZENDO O QUE VOCÊ JÁ FAZ HOJE?
        </Text>

        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          A RESPOSTA É SIM!
        </Text>

        <Text fontSize="md" mb={4}>
          COM A NOSSA MENTORIA AO VIVO, NÓS VAMOS TE AJUDAR A FORTALECER A SUA EMPRESA E ATÉ PROJETAR O SEU CRESCIMENTO EM APENAS 8 SEMANAS.
        </Text>

        <Heading size="md" my={4}>
          MAS QUEM VAI TREINAR OS EMPRESÁRIOS?
        </Heading>
        <Text mb={4}>
          QUEM VAI DIRIGIR E CUIDAR PESSOALMENTE DO CONTEÚDO DO SEU PROJETO É:
        </Text>
        <Text fontSize="xl" fontWeight="semibold" mb={4}>
          RICARDO BISAN – CONSULTOR E MENTOR DE VÁRIAS EMPRESAS NO BRASIL, E QUE FATURAM MILHÕES TODOS OS MESES.
        </Text>

        <Badge
          colorScheme="orange"
          fontSize="xl"
          p={2}
          whiteSpace="normal"
          maxWidth="100%"
          display="block"
          textAlign="center"
        >
          MAS EU NÃO SOU UMA EMPRESA QUE FATURA MILHÕES, ISSO É TOTALMENTE DIFERENTE DO MEU NEGÓCIO!
        </Badge>

        <Text fontSize="md" my={4}>
          POIS É, SABE O QUE ESSAS EMPRESA E A SUA, TÊM EM COMUM?
          <br />
          TODAS ESTAS EMPRESAS UM DIA COMEÇARAM DO ZERO, E CONTARAM COM A AJUDA DE PROFISSIONAIS CAPACITADOS E COM AMPLA VISÃO DE MERCADO E DE FINANÇAS EMPRESARIAIS, GESTÃO ESTRATÉGICA DE PESSOAS, POR ISSO CHEGARAM AONDE ESTÃO.
        </Text>

        <Heading size="md" my={4}>
          OK: ENTÃO QUEM SÃO ESTES PROFISSIONAIS QUE VÃO NOS TREINAR NESTA MENTORIA AO VIVO?
        </Heading>
        <Text fontSize="xl" fontWeight="semibold">
          VEJA ABAIXO;
        </Text>
      </Container>
    </>
  )
}