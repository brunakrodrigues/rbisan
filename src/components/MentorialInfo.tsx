import { Box, Heading, Text, Button, Link } from '@chakra-ui/react';

const MentoriaInfo = () => {
  return (
    <Box color={'white'} p={5} borderRadius='md' borderWidth='1px' maxW='800px' mx='auto' textAlign='center'>

      <Heading mb={3}>MAS CALMA LÁ</Heading>
      <Text mb={3}>TEMOS UMA PROPOSTA MELHOR AINDA.</Text>
      <Text mb={3}>
        ANTES DE VOCÊ FAZER QUALQUER PAGAMENTO, NOS VAMOS TE DAR 1 SESSÃO DE MENTORIA GRATUITA AO VIVO COM OS CONSULTORES
        RICARDO BISAN E DRA. LUCIANE SIPPERT LANZANOVA, PARA TE AJUDAR A ANALISAR E DEFINIR O QUE SERÁ ENTREGUE
        EXCLUSIVAMENTE PARA VOCÊ.
      </Text>
      <Text mb={3}>
        E PARA PROVAR QUE VOCE TERÁ RESULTADO, ACREDITAMOS QUE FAZ TOTAL SENTIDO DARMOS UMA DEGUSTAÇÃO DE COMO IRÁ
        FUNCIONAR A MENTORIA!
      </Text>
      <Text mb={3}>A SESSÃO TOTALMENTE GRATUÍTA...</Text>
      {/* Continue inserindo os parágrafos usando o componente <Text> */}

      <Text fontWeight='bold' mb={3}>GOSTOU, ENTÃO GARANTA SUA VAGA AGORA, POIS, POR SER AO VIVO AS TURMAS SÃO LIMITADAS!</Text>

      <Heading size='md' mb={3}>COMO FAZER:</Heading>
      <Link href='#link_to_questionario' isExternal color='orange.500'>
        QUERO AGENDAR MINHA CHAMADA PRIMEIRO – RESPONDA NOSSO QUESTIONÁRIO
      </Link>
      <Text mb={3}>OU</Text>
      <Link href='#link_inscricao' isExternal color='orange.500'>
        QUERO ME INSCREVER DIRETO
      </Link>
      <Text mb={3}>NESTE GRUPO: VOCÊ RECEBERÁ OS LINKS PARA NOSSAS REUNIÕES SEMANAIS.</Text>

      <Button colorScheme='orange' mt={5}>TE VEJO ONLINE – NÃO PERCA ESTA CHANCE!</Button>

    </Box>
  );
}

export default MentoriaInfo;
