'use client'
import { Box, Button, Flex, Img, Text, Link } from "@chakra-ui/react"
import { motion } from "framer-motion";

import dynamic from "next/dynamic";



const S01 = () => {
    return(
        <>
            <Flex justify={'center'} bg="black" pt="80px"
            
            as={motion.div}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
           
            >
                <Flex color={'white'} direction={{ lg:"row", md:"column-reverse", sm:"column-reverse", base: "column-reverse"}} mx={{base:"50px"}}>
                    <Flex pr={{lg:"20", md:"0", sm:"10", base:"10"}}>
                        
                        <Text fontSize={35} fontWeight={'bold'} >
                        <Flex>

                            <Link href="https://github.com/Erick-Iuri" target="_blank"
                            as={motion.div}
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }} > <Img w="20px" h="20px" mr="1" src="/objetos/git.png"/> </Link>


                            <Link href="https://www.linkedin.com/in/erick-iuri-49953b163/" target="_blank"
                            as={motion.div}
                            whileHover={{ scale: [null, 1.5, 1.4] }}
                            transition={{ duration: 0.3 }} > <Img w="20px" h="20px" src="/objetos/in.png"/> </Link>

                            
                        </Flex>
                            Erick Aniello
                        <Text fontSize={20} fontWeight={"light"} width={{ lg:"500px", base:"100%" }}>Front-end developer (JavaScript, UX/UI Designer, Graphic Designer)</Text></Text>
                        
                    </Flex>
                    <Flex
                    cursor={"pointer"} 
                    justify={"center"}
                    as={motion.div}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{
                    scale: 0.8,
                    rotate: 360,
                    }}
                    >
                        <Img  borderRadius="50%" w="120px" h="120px" src="/objetos/91703936_830104807494789_3627303368432549888_n.jpg"/>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default dynamic (() => Promise.resolve(S01), {ssr: false})
