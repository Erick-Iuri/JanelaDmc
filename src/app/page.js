"use client"
/* chakra ui */
import { Box } from "@chakra-ui/react"
/* nav bar */
import Navbar from "@/resources/sesson"
/* sessão 01 */
import S01 from "@/resources/season01"
/* sessão02 */
import S02 from "@/resources/season02"
/* Chat bot */
import Chatbot from "@/resources/chatbot"
/* contexto */

import { AuthContext } from '@/providers/ContextoProp'

export default function Home() {
  return (
    <>
      <Box h="100vh" bg={"black"} justify={"center"}>
        <Navbar />

        <Chatbot />

        <S01 />

        <S02 />
        
      </Box>
    </>
  )
}
