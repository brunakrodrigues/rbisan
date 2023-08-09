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

export default function CardTemplate() {
  return (
    <Box pt={18}>
      <Container maxW={'5xl'} mt={20}>
        <Flex flexWrap="wrap" gridGap={6} justify="space-between">
          <Card
            heading={'ATIVIDADE EXTRA CURRICULAR;'}
            description={
              <UnorderedList>
                <ListItem>MINISTROU CURSOS DE GESTÃO DE PESSOAS / FINANÇAS PESSOAIS – CURSOS DE FÉRIAS – FATEC PRAIA GRANDE.</ListItem>
                <ListItem>PALESTRAS MOTIVACIONAIS – FGV / FEI / FATEC / ETEC / UNIP / UNIMES / UNIBR.</ListItem>
                <ListItem>MENTOR DE PROFISSIONAIS NÍVEL GERENCIAL EMPRESA ATENTO.</ListItem>
                <ListItem>COACH EM LIDERANÇA.</ListItem>
                <ListItem>CONSULTOR DE EMPRESAS EM GESTÃO OPERACIONAL E VENDAS.</ListItem>
              </UnorderedList>
            }
          />
          <Card
            heading={'RESUMO DE COMPETÊNCIAS;'}
            description={
              <UnorderedList>
                <ListItem>MASTER COACH – LIFE COACH – BUSINESS COACH – PROFESSIONAL COACH.</ListItem>
                <ListItem>MARKETING DIGITAL</ListItem>
                <ListItem>ÓTIMO RELACIONAMENTO INTERPESSOAL, ARGUMENTAÇÃO.</ListItem>
                <ListItem>PRESTA CONSULTORIA PARA EMPRESAS NACIONAIS EM GESTÃO DE PESSOAS / VENDAS.</ListItem>
                <ListItem>GESTÃO DE PESSOAS – TREINAMENTO E FORMAÇÃO DE LÍDERES, SELEÇÃO E CONTRATAÇÃO, DESENVOLVER E MOTIVAR EQUIPES DE VENDAS OU OPERACIONAIS, COM FOCO EM RESULTADOS.</ListItem>
                <ListItem>COMPETÊNCIA PARA PLANEJAR, ORGANIZAR, DIRIGIR E CONTROLAR PLANOS E METAS COMERCIAIS.</ListItem>
                <ListItem>FORTE PODER DE NEGOCIAÇÃO</ListItem>
                <ListItem>FACILIDADE NA IDENTIFICAÇÃO DE PROBLEMAS E APLICAÇÃO DE SOLUÇÕES. ELABORAÇÃO DE PLANOS DE AÇÃO.</ListItem>
                <ListItem>SÓLIDA EXPERIÊNCIA COMO GESTÃO DE PROCESSOS, COM FOCO EM PRODUÇÃO E OTIMIZAÇÃO FINANCEIRA.</ListItem>
                <ListItem>GESTÃO FINANCEIRA DE OPERAÇÕES.</ListItem>
                <ListItem>PLANEJAMENTO DE OPERAÇÕES, VISÃO DE NECESSIDADE E QUANTIDADE DE PESSOAS PARA ATENDIMENTO, BEM COMO VISÃO DAS NECESSIDADES OPERACIONAIS.</ListItem>
                <ListItem>DOMÍNIO DO PACOTE OFFICE – INTERNET E SISTEMAS SAP ERP– HARDWARE</ListItem>
                <ListItem>VISÃO ESTRATÉGICA COM FOCO VOLTADO PARA NOVAS OPORTUNIDADES DE NEGÓCIO.</ListItem>
              </UnorderedList>

            }
          />
          <Card
            heading={'FORMAÇÃO ACADÊMICA; '}
            description={
              <UnorderedList>
                <ListItem>BACHAREL EM ADMINISTRAÇÃO DE EMPRESAS – UNIMONTE – SANTOS – SP – 2009</ListItem>
                <ListItem>TECNÓLOGO – INFORMÁTICA /GESTÃO DE NEGÓCIOS – FATEC PRAIA GRANDE – 2005</ListItem>
                <ListItem>MBA GESTÃO FINANCEIRA E CONTROLADORIA – FUNDAÇÃO GETÚLIO VARGAS – 2015</ListItem>
                <ListItem>PROFISSIONAL & SELF COACH – IBC (INSTITUTO BRASILEIRO DE COACHING)</ListItem>
                <ListItem>DIPLOMAS INTERNACIONAIS (ICC – INTERNATIONAL COACH COUNCIL / BCI – BEHAVIOR COACH INSTITUTE) – 2019</ListItem>
                <ListItem>ANALISE COMPORTAMENTAL – IBC (INSTITUTO BRASILEIRO DE COACHING)</ListItem>
              </UnorderedList>
            }
          />
          <Card
            heading={'CURSOS COMPLEMENTARES;'}
            description={
              <UnorderedList>
                <ListItem>BMF BOVESPA, SENAC (ABRIL/2010) – CONCLUÍDA.</ListItem>
                <ListItem>FLUXO DE CAIXA – PROJEÇÃO E ADMINISTRAÇÃO, SEBRAE (SETEMBRO/2002) – CONCLUÍDA.</ListItem>
                <ListItem>INGLÊS, ESCOLAS FISK (NOVEMBRO/1992) – CONCLUÍDA.</ListItem>
                <ListItem>INTELIGÊNCIA EMOCIONAL – LIDANDO COM A PRESSÃO – ESAMC – SANTOS (MARÇO / 2007)</ListItem>
                <ListItem>NOVAS MÍDIAS – MARKETING – ESAMC – SANTOS (ABRIL / 2007)</ListItem>
                <ListItem>NETWORKING E ESTRATÉGIAS DE RELACIONAMENTO – FIA ONLINE</ListItem>
                <ListItem>GESTÃO ESTRATÉGICA DE PESSOAS – FIA ONLINE</ListItem>
                <ListItem>MARKETING DIGITAL</ListItem>
              </UnorderedList>

            }

          />
        </Flex>
      </Container>
    </Box>
  )
}