import { Box, Button, Center, Flex, Heading, Square, Text } from "@chakra-ui/react";
import NameCard from "./NameCard";

export default function Home() {
	return (
		// <Flex>
		//     <Center w='100px' bg='green.500'>
		//         <Text>Hi</Text>
		//     </Center>
		//     <Square size='150px' bg='blue.500'>
		//         <Text>
		//             Hello
		//         </Text>
		//     </Square>
		// </Flex>
		<Flex>
			<Flex height="80vh" alignItems="flex-end" justifyContent="left">
				<NameCard />
			</Flex>
			<Flex direction='column' alignItems="center" justifyContent="center">
				<Button size='lg'>Projects</Button>
				<Button size='lg'>About</Button>
				<Button size='lg'>Contact</Button>
			</Flex>
		</Flex>
	);
}
