'use client'
import { Box, Button, Flex, Img, Text, Link, AspectRatio, Popover, PopoverTrigger } from "@chakra-ui/react"
/* nav bar */
import Navbar from "@/resources/sesson"

export default function Home() {
    return (
      <div>
        <Navbar />

        <Flex
            justify={'center'}
            bg="black"
            color={'white'}
            pt="10"
            pr={{base: "0", md: "0", lg: "420px"}}
            fontSize={"20"}
            >
                <Img src="/objetos/folder.png" h="17px" mt="1" mr="2" />
                <Text>
                     Projetos Line Space Design
                </Text>
        </Flex>

        <Flex 
            justify={'center'}
            bg="black"
            color={'white'}
            pt="2"
            fontSize={"20"}
            >
                <Flex 
                width={{base: "90%", md: "90%", lg: "700px"}}
                border='1px' borderColor='white' borderRadius={"10px"}
                padding={5}
                direction={"column"}>
                
                <Flex
                m="20px"
                justifyContent={"Center"}>
                  <Img w="160px" src="/objetos/ERICK LOGO 2.png" />
                </Flex>

                <Text pl="5" textAlign={"center"} >A Line Space foi meu projeto pessoal de 
                empreendedorismo, nossa principal missão era levar o poder do 
                design para pequenos negócios.</Text>

                </Flex>
                
        </Flex>

        <Flex
            justify={'center'}
            bg="black"
            color={'white'}
            pt="10"
            pr={{base: "0", md: "0", lg: "250px"}}
            fontSize={"20"}
            >
            <Img src="/objetos/folder.png" h="17px" mt="1" mr="2" />
                <Text>
                     <Link fontWeight={"bold"}>Projetos</Link> Line Space Design <Link color="azulBonito.900">Primeiros Clientes</Link>
                </Text>
        </Flex>

        <Flex 
            justify={'center'}
            bg="black"
            color={'white'}
            pt="10"
            fontSize={"20"}
            >
                <Flex 
                width={{base: "90%", md: "90%", lg: "700px"}}
                border='1px' borderColor='white' borderRadius={"10px"}
                padding={5}
                direction={"column"}>

                <Flex>
                  <Img src="/objetos/vidraçaria1.png" />
                </Flex>

                <Text pt="4" pb="5" >Lembro-me com carinho do nosso primeiro cliente, que estava buscando uma logo design para sua vidraçaria.
                 Trabalhamos muito para trazer ao design tudo o que melhor representava seu negocio e seus valores.</Text>

                <Flex>
                  <Img src="/objetos/Cartao.png" />
                </Flex>

                <Text pt="4" pb="5" >O cliente ficou tão feliz com sua nova identidade digital que até nos pediu para fazer seu cartão de visita. 🥰</Text>

                <Text pt="4" pb="5" >Tivemos alguns outros cases de sucesso onde ajudamos ideias a sairem do papel.</Text>

                <Flex mb="20px">
                  <Img src="/objetos/inlogo.png" />
                </Flex>

                <Flex mb="20px">
                  <Img src="/objetos/inboost2.png" />
                </Flex>

                <Flex>
                  <Img src="/objetos/skymel.png" />
                </Flex>

                <Text pt="4" pb="5" >Foi uma jornada muito divertida. Tenho certeza que conseguimos ajudar diversas pessoas através do poder do design.</Text>

                </Flex>

                
        </Flex>

        <Flex 
                justify={'center'}
                color={'red'}
                bg={"black"}
                padding={'30'}
                >
                    <Flex
                    w="210px"
                    h={"50px"}
                    bg="white"
                    borderRadius="30px"
                    justify={"space-between"}
                    align={'center'}
                    p={'5px'}
                    >
                        <Popover placement='top-start'>
                            <PopoverTrigger>
                                <Link href="#">
                                <Button
                                _hover={{
                                    bg: "azulBonito.900"
                                }}
                                w="200px"
                                borderRadius="30px"
                                bg={"black"}
                                color="white"
                                >Voltar ao topo.
                                <Img 
                                pl="3"
                                src="/objetos/arrow up.png"/>
                                </Button>
                                </Link>
                            </PopoverTrigger>
                        </Popover>

                    </Flex>
        </Flex>

        <Box w={'100%'} h={'100%'} bg={'black'}/>
      </div>
    )
  }