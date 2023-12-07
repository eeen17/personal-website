import React from "react";
import { FaGithub } from "react-icons/fa";
import { Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";

export default function NameCard() {
	return (
		<Flex direction="column" background="gray.700" p={12} rounded={6}>
			<Heading as="h1" size="3xl" mb={4}>
				Ethan Chang.
			</Heading>
			<Text fontSize="xl">CS & Stats @ UIUC</Text>
			<br />
			<Text fontSize="xl">Test</Text>
			<HStack>
				<Button variant='outline' leftIcon={<FaGithub />}></Button>
			</HStack>
		</Flex>
	);
}
