'use client'

import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import kevin from '../assets/kevin.jpg';

export default function Testimonials() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text fontSize={{ base: 'lg', md: 'xl' }} textAlign={'center'} maxW={'5xl'}>
      BISAN, OBRIGADO POR TODAS AS OPORTUNIDADES E ENSINAMENTOS QUE ADQUIRI COM SUA ENORME LIDERANÇA. APRENDI MUITO SOBRE RESILIÊNCIA E PACIÊNCIA, DOIS ITENS SUPER IMPORTANTES PARA SE CONQUISTAR GRANDES MUDANÇAS E DERRUBAR BARREIRAS. UMA LIDERANÇA PARCEIRA E PRESENTE QUE ME PERMITIU UMA GRANDE EVOLUÇÃO PESSOAL E PROFISSIONAL. A LIDERANÇA DO BISAN FOI UM DIVISOR DE ÁGUAS PARA ME TRANSFORMAR NO CEO, INSTRUTOR E CONSULTOR QUE SOU HOJE.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={kevin}
          w={120}
          h={120}
          mb={2}
        />

        <Text fontWeight={600} fontSize={'3xl'}>KEVIN MACKAULAY</Text>
        <Text fontSize={'xl'} color={'#F68B1F'}>
        CEO - OBTER DADOS
        </Text>
      </Box>
    </Stack>
  )
}