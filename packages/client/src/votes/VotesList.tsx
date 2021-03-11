import React from "react";
import {Heading, Stack, Text} from "@chakra-ui/layout";

import {Vote} from "./types";

interface Props {
  votes: Vote[];
}

const VotesList: React.FC<Props> = ({votes}) => {
  return (
    <Stack spacing={3}>
      <Text>{votes.length}</Text>
      <Stack
        border="2px solid"
        borderRadius={8}
        height="200px"
        overflowY="auto"
        paddingX={4}
        spacing={0.5}
      >
        {votes.map((vote, index) => (
          <Stack key={index} isInline>
            <Text color="#71D8BF">{vote.user}</Text>
            <Text>{vote.review || "-"}</Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default VotesList;
