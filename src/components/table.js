import React from "react"
import { Flex, Box } from '@rebass/grid'



const IntroTable = (props) => {

    const noOfCols = props.columns.length
    const columns = props.columns.map((column, key) =>
        <Box key={key} width={1/noOfCols} px={2}>
            <h3>{ column.column_title.text }</h3>
            <div dangerouslySetInnerHTML={{ __html: column.column_text.html }} />
        </Box>
    );

    return (
        <Flex py={2} mx={-2}>
            { columns }
        </Flex>
    )
}

export default IntroTable
