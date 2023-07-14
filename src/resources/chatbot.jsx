'use client'
import { Box, Button, Flex, Img, Text, Link } from "@chakra-ui/react"

import dynamic from "next/dynamic";

/* janela do chatbot */

import JanelaConversa from '@/resources/janela'

/* use State */

import { useState } from "react";

const Chatbot = () => {

    const [abrirJanela, setJanelaOpen] = useState(false)

    const fecharOdemonio = async(props2) => {
        console.log(props2, "log do chat")
        setJanelaOpen(props2)
    }

    const abrirDemonio = () => {
        setJanelaOpen(true)
    }

    return(     
        <> 
                <Box 
                pos="fixed" w="100%" zIndex={2} right="100px" bottom="30px"
                bg="white"
                width={"150px"}
                height={"150px"}
                borderRadius={"50%"}
                cursor={"pointer"}

                onClick={abrirDemonio}
                >
                
                {abrirJanela?
                <JanelaConversa fechar1={abrirJanela} fechar2={fecharOdemonio}/>
                : null }

                </Box>
        </>
    );

};

export default dynamic (() => Promise.resolve(Chatbot), {ssr: false})
