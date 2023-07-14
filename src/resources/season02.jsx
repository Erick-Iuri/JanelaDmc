'use client'
import { Box, Button, Flex, Img, Text, Link, AspectRatio, Popover, PopoverTrigger } from "@chakra-ui/react"

import dynamic from "next/dynamic";

import { motion } from "framer-motion";


const S02 = () => {
    return(
        <div>
            <Flex 
            justify={'center'}
            bg="black"
            color={'white'}
            pt="10"

            as={motion.div}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: [0, 0.71, 0.2, 1.01]
            }} 
            >
                <Text 
                width={{lg:"700px", base:"80%"}}
                border='1px' borderColor='white' borderRadius={"10px"}
                padding={5}
                fontSize={20}
                fontWeight={600} >Sobre mim:
                    <Text
                    fontWeight={"lighter"}
                    pt="5"
                        >Sou um full-stack developer e designer com paixão por criar
                        soluções elegantes para empresas com atuação on-line. Tenho um interrece genuino por novas tecnologias, gosto de manter a organização de meus projetos como um padrão
                        para identificando possiveis melhorias, tanto no design quanto no código.
                        Atualmente trabalho em meus projetos pessoais que você pode acompanhar <Link href="/projetos" color={"azulBonito.900"}>Click aqui.</Link></Text>
                </Text>
            </Flex>

            <Flex
            justify={'center'}
            bg="black"
            color={'white'}
            pt="10"
            pr={{lg:'425px', sm: "0", md:"0"}}
            fontSize={"20"}
            
            as={motion.div}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: [0, 0.71, 0.2, 1.01]
            }} 
            >
                <Img src="/objetos/folder.png" h="17px" mt="1" mr="2"/>
                <Text >
                     Projetos Line Space Design
                </Text>
            </Flex>

            <Flex 
            justify={'center'}
            bg="black"
            color={'white'}
            pt="10"
            fontSize={"20"}

            as={motion.div}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01]
            }} 
            >
                <Flex 
                justify={"center"}
                width={{lg:"700px", base:"80%"}}
                border='1px' borderColor='white' borderRadius={"10px"}
                padding={5}
                direction={{sm:"column", lg:"row", base:"column"}}>
                    <Flex w={{lg:"700px", base:"100%" }}
                    justify={"center"}
                    p={"20px"}>
                    <Img w="160px" src="/objetos/ERICK LOGO 2.png" />
                </Flex>
                        <Flex direction={"column"} p={"10px"}>
                            <Text mb="30px" mt="15px" width={"100%"}>Conheça meu primeiro projeto. 😁</Text>
                            <Text>A Line Space Design foi meu primeiro projeto
                                de empreendedorismo, você pode ver mais sobre ele <Link href="/projetos" color={"azulBonito.900"}>Click aqui.</Link></Text>
                        </Flex>
                    </Flex>
                
            </Flex>



            <Flex
            justify={'center'}
            bg="black"
            color={'white'}
            pt="10"
            pr={{lg:'505px', sm: "0", md:"0"}}
            fontSize={"20"}
                       
            >
                <Img src="/objetos/Local.png" h="22px" mt="1" mr="2" />
                <Text >
                    Minha localização.
                </Text>
            </Flex>

           
           <Flex justify={"center"}
           bg={"black"}
           pt={"30px"}
            >
                <AspectRatio w={{lg:"700px", base:"80%"}} h={"400px"} >
                    <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58624.14781121259!2d-46.7443721!3d-23.3154236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee6a7cb6f61eb%3A0xa321d69e795bf8a6!2sFranco%20da%20Rocha%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1687467025036!5m2!1spt-BR!2sbr' />
                </AspectRatio>
            </Flex>    


            <Flex
            justify={'center'}
            bg="black"
            color={'white'}
            pt="10"
            pr={{lg:'555px', sm: "0", md:"0"}}
            fontSize={"20"}
                       
            >
                <Img src="/objetos/oi.png" h="20px" mt="1" mr="2" />
                <Text >
                    Informações
                </Text>
            </Flex>


            <Flex 
            justify={'center'}
            bg="black"
            color={'white'}
            pt="10"
            fontSize={"20"}
            >

                <Flex border='1px' borderColor='white' borderRadius={"10px"}
                direction={"column"}
                m={{lg:"0", base:"70px"}}>
                    
                    <Flex 
                    width={{lg:"700px", base:"80%"}}
                    padding={5}>
                        <Flex>
                            <Text fontWeight={"bold"}>Bio:</Text>
                        </Flex>
                    </Flex>

                    <Flex 
                    width={{lg:"700px", base:"80%"}}
                    padding={5}>
                        <Flex>
                            <Text fontWeight={"bold"}>1999</Text>
                            <Text pl="50px" >Nascido em São Paulo, Brasil.</Text>
                        </Flex>
                    </Flex>

                    <Flex 
                    width={{lg:"700px", base:"80%"}}
                    padding={5}>
                        <Flex>
                            <Text fontWeight={"bold"}>2019</Text>
                            <Text pl="50px" >Completei o curso, <Link color='#316CCF' href='#'>Design Gráfico</Link> e <Link color='#316CCF' href='#'>Web</Link> na instituição EseTec Brasil.</Text>
                        </Flex>
                    </Flex>

                    <Flex 
                    width={{lg:"700px", base:"80%"}}
                    padding={5}>
                        <Flex>
                            <Text fontWeight={"bold"}>2021</Text>
                            <Text pl="50px" >Completei o curso <Link color='#316CCF' href='#'>Foundations Of User Experience (UX) Design.</Link> Pela instituição Coursera.</Text>
                        </Flex>
                    </Flex>

                    <Flex 
                    width={{lg:"700px", base:"80%"}}
                    padding={5}>
                        <Flex>
                            <Text fontWeight={"bold"}>2022</Text>
                            <Text pl="50px" >Trabalhei como <Link color='#316CCF' href='#'>UX-Wirter</Link> na <Link color='#316CCF' href='#'>start-up </Link>de chatbots InBot.</Text>
                        </Flex>
                    </Flex>

                    <Flex 
                    width={{lg:"700px", base:"80%"}}
                    padding={5}>
                        <Flex>
                            <Text fontWeight={"bold"}>2023</Text>
                            <Text pl="50px" >Nos dias de hoje estudo Desenvolvimento web
                            (<Link color='#316CCF' href='#'>JavaScript, Css, Html, React... </Link>)</Text>
                        </Flex>
                    </Flex>

                </Flex>
            </Flex>
            

            <Flex
            justify={'center'}
            bg="black"
            color={'white'}
            pt="10"
            fontSize={"20"}>
                <Flex>
                    <Text fontWeight={"bold"} >Me mande um E-mail:</Text>
                </Flex>
            </Flex>

            <Flex
            justify={'center'}
            bg="black"
            color={'white'}
            fontSize={"20"}>
                <Flex
                w={{lg:"30%", sm:"100%", md:"100%"}}>
                    <Text
                        p={1}
                        textAlign={'center'}
                        >Quer conversar comigo sobre o seu projeto? É só clicar no botão a baixo, que seu <Link href="mailto:iurierick@gmail.com" color="azulBonito.900">E-mail</Link> magicamente vai abrir. 😆</Text>
                </Flex>
            </Flex>

            <Flex 
                justify={'center'}
                color={'red'}
                bg={"black"}
                padding={'30'}
                >
                    <Flex
                    w="300px"
                    h={"50px"}
                    bg="white"
                    borderRadius="30px"
                    justify={"space-between"}
                    align={'center'}
                    p={'5px'}
                    >
                        <Popover placement='top-start'>
                            <PopoverTrigger>
                                <Link href="mailto:iurierick@gmail.com">
                                <Button
                                _hover={{
                                    bg: "azulBonito.900"
                                }}
                                w="250px"
                                borderRadius="30px"
                                bg={"black"}
                                color="white"
                                >Eu sou um botão!
                                <Img 
                                pl="40px"
                                src="/objetos/arrow.png"/>
                                </Button>
                                </Link>
                            </PopoverTrigger>
                        </Popover>

                    </Flex>
        </Flex>
        </div>
    );
}

export default dynamic (() => Promise.resolve(S02), {ssr: false})

