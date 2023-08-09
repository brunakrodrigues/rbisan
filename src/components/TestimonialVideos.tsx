import { Box, Flex, AspectRatio } from '@chakra-ui/react';

const TestimonialVideos = () => {
  const videoSources = [
    'https://rbisan.com.br/wp-content/uploads/2023/05/Depoimento-Debora1.mp4',
    'https://rbisan.com.br/wp-content/uploads/2023/04/Depoimento-sincero-da-Sani-Farias-Psicologa-que-participa-de-nossa-Mentoria.-shorts.mp4',
    'https://rbisan.com.br/wp-content/uploads/2023/05/Depoimento-Lucia.mp4',
    'https://rbisan.com.br/wp-content/uploads/2023/02/Video-depimento-Modelita.mp4',
    'https://rbisan.com.br/wp-content/uploads/2023/02/Video-depoimento-Marcela-2.mp4',
    'https://rbisan.com.br/wp-content/uploads/2023/05/Depoimento-Sani-Lu.mp4',
  ];

  return (
    <Box minH={100} maxH={250}>
      <Flex wrap="wrap" justifyContent="center">
        {videoSources.map((src, index) => (
          <Box
            w={{ base: '90%', sm: '45%', md: '30%', lg: '200px' }}
            bg='blue.500'
            m={3}
            key={index}
          >
            <AspectRatio maxW='560px' ratio={1}>
              <iframe
                title={`video-${index}`}
                src={src}
                allowFullScreen
              />
            </AspectRatio>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default TestimonialVideos;
