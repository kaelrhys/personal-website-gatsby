import React from "react"
import { Flex, Box } from '@rebass/grid'
import PropTypes from 'prop-types';


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


IntroTable.propTypes = {
    columns: PropTypes.object,
}

IntroTable.defaultProps = {
    columns: null,
};


export default IntroTable
