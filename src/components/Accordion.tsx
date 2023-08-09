import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ListItem, UnorderedList } from '@chakra-ui/react';

export default function CustomAccordion() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ color: '#F68B1F' }} color={'white'}>
            <Box
              as="span"
              flex='1'
              textAlign='left'
              color={'#F68B1F'}
            >
              FINANÇAS:
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList spacing={3} paddingLeft="20px" color={'white'}>
            <ListItem>DIFICULDADE PARA CONTROLAR AS CONTAS DA EMPRESA.</ListItem>
            <ListItem>NÃO SABE MONTAR UM FLUXO DE CAIXA PARA TER UMA VISÃO ESTRATÉGICA DE FUTURO DA SUA EMPRESA.</ListItem>
            <ListItem>QUER VENDER A EMPRESA MAS NÃO SABE O QUANTO ELA VALE.</ListItem>
            <ListItem>TÁ ENTRANDO DINHEIRO MAS NÃO CONSEGUE IDENTIFICAR AONDE VAI INVESTIR ESTE DINHEIRO PARA CRESCER A SUA EMPRESA.</ListItem>
            <ListItem>SUAS CONTAS PESSOAIS ESTÃO SE MISTURANDO COM AS CONTAS EMPRESARIAIS, MAS, NÃO CONSEGUE SEPARAR.</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ color: '#F68B1F' }} color={'white'}>
            <Box as="span" flex='1' textAlign='left' color={'#F68B1F'}>
              GESTÃO ESTRATÉGICA DO NEGÓCIO:
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList spacing={3} paddingLeft="20px" color={'white'}>
            <ListItem>TEM DIFICULDADE EM OLHAR O MERCADO.</ListItem>
            <ListItem>NÃO SABE POR ONDE COMEÇAR PARA INOVAR E FAZER DIFERENTE DOS CONCORRENTES.</ListItem>
            <ListItem>NÃO CONSEGUE MONTAR UMA POLÍTICA DE VENDAS.</ListItem>
            <ListItem>FAZ TUDO SOZINHO PORQUE NÃO EXISTEM PESSOAS MELHORES DO QUE VOCÊ NA SUA EMPRESA.</ListItem>
            <ListItem>NÃO SABE QUAL PRODUTO TE DÁ MAIS LUCRO.</ListItem>
            <ListItem>NÃO SABE REALMENTE O QUANTO SUA EMPRESA FATURA.</ListItem>
            <ListItem>NÃO FAZ IDEIA DE COMO ANALISAR OS DADOS DA SUA EMPRESA.</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ color: '#F68B1F' }} color={'white'}>
            <Box as="span" flex='1' textAlign='left' color={'#F68B1F'}>
              VENDAS:
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList spacing={3} paddingLeft="20px" color={'white'}>
            <ListItem>TEM DIFICULDADE EM MONTAR UM BOM FUNIL DE VENDAS.</ListItem>
            <ListItem>SEUS FUNCIONÁRIOS NÃO SABEM VENDER.</ListItem>
            <ListItem>TEM DIFICULDADE EM MONTAR UMA BOA CAMPANHA DE VENDAS.</ListItem>
            <ListItem>TEM O PENSAMENTO QUE PROMOÇÃO É SOMENTE DESCONTO.</ListItem>
            <ListItem>TEM DIFICULDADE EM ENGAJAR OU MOTIVAR O TIME A VENDER MAIS.</ListItem>
            <ListItem>NÃO SABE COMO TREINAR O SEU TIME PARA SER PARTE DA EMPRESA.</ListItem>
            <ListItem>SUA EQUIPE ATENDE BEM, MAS AS PESSOAS INSISTEM EM SEREM ATENDIDAS POR VOCÊ.</ListItem>
            <ListItem>CAMPANHAS DE FIDELIDADE É SÓ PRA QUEM FATURA MUITO.</ListItem>
            <ListItem>NÃO FAZ GESTÃO DE RELACIONAMENTO.</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ color: '#F68B1F' }} color={'white'}>
            <Box as="span" flex='1' textAlign='left' color={'#F68B1F'}>
              GESTÃO DE PESSOAS:
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList spacing={3} paddingLeft="20px" color={'white'}>
            <ListItem>O CLIMA É PÉSSIMO NA EMPRESA.</ListItem>
            <ListItem>PESSOAS FALTAM POR QUALQUER MOTIVO.</ListItem>
            <ListItem>PREFERE DEMITIR DO QUE RECUPERAR.</ListItem>
            <ListItem>TEM RECEIO DE TER UM GERENTE.</ListItem>
            <ListItem>SENTE QUE AS PESSOAS FALAM MAL DE VOCÊ PELAS COSTAS.</ListItem>
            <ListItem>JÁ NÃO EXISTE CONFIANÇA ENTRE OS COLABORADORES E A EMPRESA.</ListItem>
            <ListItem>CONTRATAR É UMA DIFICULDADE, POIS NINGUÉM QUER NADA COM O TRABALHO.</ListItem>
            <ListItem>AS PESSOAS QUANDO ENTRAM ESTÃO TOPANDO TUDO DEPOIS FICAM SE ESCORANDO PELOS CANTOS.</ListItem>
            <ListItem>A ÚNICA PESSOA QUE TEM COMPROMISSO COM A EMPRESA É VOCÊ.</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ color: '#F68B1F' }} color={'white'}>
            <Box as="span" flex='1' textAlign='left' color={'#F68B1F'}>
              PROPAGANDAS E ANÚNCIOS:
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <UnorderedList spacing={3} paddingLeft="20px" color={'white'}>
            <ListItem>ACHA QUE VAI PERDER DINHEIRO ANUNCIANDO, POIS SEU COMÉRCIO É LOCAL.</ListItem>
            <ListItem>ACHA QUE VAI PERDER DINHEIRO COM ANÚNCIOS, POIS, NÃO SABE COMO FAZER E AGENCIAS CUSTAM CARO.</ListItem>
            <ListItem>NÃO ESTÁ ATIVO NAS MÍDIAS SOCIAIS.</ListItem>
            <ListItem>FACEBOOK, INSTAGRAM, TIKTOK, GOOGLE, SÃO MUITO COMPLICADOS.</ListItem>
            <ListItem>NÃO SABE QUAL PRODUTO ANUNCIAR.</ListItem>
            <ListItem>PENSA QUE, NÃO ADIANTA FAZER PROPAGANDA, PORQUE SEU NEGÓCIO NÃO PRECISA.</ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}