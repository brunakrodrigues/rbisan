'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { ReactElement } from 'react'

interface CardProps {
  heading: string
  description: ReactElement
  icon?: ReactElement
}

const Card = ({ heading, description }: CardProps) => {
  return (
    <Box
      w={'full'}
      bg={'white'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      mb={6}  // Add a bottom margin to separate the cards vertically
      maxW="48%"  // Adjust this value if needed to control the width of the card
    >
      <Stack align={'start'} spacing={2}>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default function CardTemplateTwo() {
  return (
    <Box pt={18}>
      <Container maxW={'5xl'} mt={20}>
        <Flex flexWrap="wrap" gridGap={6} justify="space-between">
          <Card
            heading={'RESUMO DE COMPETÊNCIAS;'}
            description={
              <UnorderedList>
                <ListItem>EMPREENDEDORA</ListItem>
                <ListItem>ESPIRITUALIZADA</ListItem>
                <ListItem>MOTIVADORA DE PESSOAS</ListItem>
                <ListItem>CRIATIVIDADE EMPRESARIAL</ListItem>
                <ListItem>DINAMISMO</ListItem>
                <ListItem>ÓTIMO RELACIONAMENTO INTERPESSOAL</ListItem>
                <ListItem>TÉCNICAS DE PERSUASÃO</ListItem>
                <ListItem>ORIENTADORA PEDAGÓGICA</ListItem>
                <ListItem>MENTORA</ListItem>
              </UnorderedList>
            }
          />
          <Card
            heading={'FORMAÇÃO ACADÊMICA; '}
            description={
              <UnorderedList>
                <ListItem>GRADUADA EM LETRAS (UNIJUÍ)</ListItem>
                <ListItem>GRADUADA EM PEDAGOGIA (UNINTER)</ListItem>
                <ListItem>ESPECIALISTA EM ENSINO-APRENDIZAGEM DE LÍNGUAS (UNIJUÍ)</ListItem>
                <ListItem>ESPECIALISTA EM PROGRAMAÇÃO NEUROLINGUÍSTICA (FAVENE)</ListItem>
                <ListItem>MESTRE EM EDUCAÇÃO NAS CIÊNCIAS (UNIJUÍ)</ListItem>
                <ListItem>DOUTORA EM LETRAS (UFRGS)</ListItem>
                <ListItem>PÓS-DOUTORANDA EM LINGUÍSTICA (UNB)</ListItem>
              </UnorderedList>
            }
          />
          <Card
            heading={'OUTROS CONHECIMENTOS E FORMAÇÕES; '}
            description={
              <UnorderedList>
                <ListItem>CIÊNCIA MENTAL</ListItem>
                <ListItem>INTELIGÊNCIA EMOCIONAL</ListItem>
                <ListItem>INTELIGÊNCIA ESPIRITUAL</ListItem>
                <ListItem>RELACIONAMENTO INTRA E INTERPESSOAL</ListItem>
                <ListItem>GESTÃO ESTRATÉGICA DE PESSOAS</ListItem>
                <ListItem>ORATÓRIA E DESINIBIÇÃO</ListItem>
                <ListItem>ESCUTA ATIVA</ListItem>
                <ListItem>ESCRITA ACADÊMICA</ListItem>
                <ListItem>COPYWRITER</ListItem>
              </UnorderedList>

            }
          />
          <Card
            heading={'ATIVIDADE EXTRA CURRICULAR;'}
            description={
              <UnorderedList>
                <ListItem>CONFERENCISTA</ListItem>
                <ListItem>MINISTROU INÚMEROS CURSOS NA ÁREA DA EDUCAÇÃO, MOTIVAÇÃO E COMPORTAMENTO PARA MULHERES, DOCENTES, DISCENTES, EMPRESÁRIOS E COLABORADORES</ListItem>
              </UnorderedList>
            }
          />
        </Flex>
      </Container>
    </Box>
  )
}