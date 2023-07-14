'use client'
import { Box, Button, Flex, Img, Text, Link, Input } from "@chakra-ui/react"

import dynamic from "next/dynamic";

const JanelaConversa = (props) => {

  console.log(props.fechar1, "log da janela")

    return (
      <>
      {props.fechar1?
        <Box 
          pos="fixed" zIndex={2} right="100px" bottom="30px"
          width={"400px"}
          height={"700px"}
          bg="white"
          >
  
                <Flex justify={"center"} 
                align={"start"} 
                bg="blue" w="100%" h="40px">
                    <Flex justify={"end"} w="100%" p="10px">
                        <Button 
                        w="10px" h="20px"
                        onClick={()=> props.fechar2(false)}
                        >X</Button>
                    </Flex>
                </Flex>
  
                <Flex justify={"center"}
                align={"end"}
                h={"600px"}>
                    <Input borderRadius="none" placeholder='Basic usage'/>
                </Flex>
        </Box>
          : null
      }
      </>    
    )
}

export default dynamic (() => Promise.resolve(JanelaConversa), {ssr: false})
