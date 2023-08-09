'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from '@chakra-ui/react';

import myImage from '../assets/wp8.jpg';

export default function Interactivity() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
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
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={400}
            color={'white'}
            fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}>
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
              TODOS PARTICIPANTES DA MENTORIA AO VIVO <span style={{ color: '#F68B1F' }}> #VIRANDOOJOGO </span> PARTICIPARÃO DE UM GRUPO <span style={{ fontWeight: "bold" }}>EXCLUSIVO </span> PARA PERGUNTAS E DÚVIDAS, DURANTE A SEMANA DA MENTORIA.
            </Text>
            <br />
            <br />
            <Heading lineHeight={1.1}
            fontWeight={600}
            color={'white'}
            fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }}>
            <span style={{ color: '#F68B1F' }}>TEREMOS:</span>
            </Heading>
            <UnorderedList>
              <ListItem><span style={{ fontWeight: "bold" }}> TAREFAS E METAS </span> A SEREM FEITAS DE ACORDO COM A MATÉRIA MINISTRADA NA SEMANA</ListItem>
              <ListItem><span style={{ fontWeight: "bold" }}> AULAS INTERATIVAS </span>VIA LINK EXCLUSIVO</ListItem>
              <ListItem><span style={{ fontWeight: "bold" }}> MATERIAL DIDÁTICO </span></ListItem>
              <ListItem><span style={{ fontWeight: "bold" }}> PLANILHAS PRONTAS PARA DOWNLOAD </span></ListItem>
              <ListItem><span style={{ fontWeight: "bold" }}> ACOMPANHAMENTO GRATUITO</span>, DOS CONSULTORES POR <span style={{ color: '#F68B1F' }}>3 MESES </span> APÓS FINALIZADO A <span style={{ color: '#F68B1F' }}>MENTORIA</span>, COM ENCONTROS QUINZENAIS DE TODAS AS TURMAS, ALÉM DE UM ACESSO DIRETO COM OS CONSULTORES ATRAVÉS DE UM GRUPO EXCLUSIVO.</ListItem>
            </UnorderedList>
          </Heading>
        </Stack>

      </Stack>
    </Container>
  )
}