'use client'
import { Box, Button, Flex, Img, Text, Link, keyframes } from "@chakra-ui/react"



const Navbar = () => {
    return(
        <>
            <Flex 
            justify={'center'}
            color={'red'}
            bg={"black"}
            padding={'30'}
            >
                <Flex
                w="400px"
                h={"50px"}
                bg="white"
                borderRadius="30px"
                justify={"space-between"}
                align={'center'}
                p={'5px'}
                >
                    <Link href="/"><Button 
                    borderRadius="50%"
                    bg= "black"
                    color="white"

                    _hover={{
                        bg:"azulBonito.900"
                    }}

                    >
                    <Img w="15px" src="/objetos/home.png" />
                    </Button></Link>

                    <Link href="/projetos" ><Button
                     _hover={{
                        bg:"azulBonito.900"
                    }}
                    w="160px"
                    borderRadius="30px"
                    bg={"black"}
                    color="white">Projetos<Img 
                    pl="40px"
                    src="/objetos/arrow.png"/></Button></Link>
                </Flex>
            </Flex>
        </>
    )
}

export default Navbar;