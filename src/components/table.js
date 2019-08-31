import React from 'react';
import { Flex, Box } from '@rebass/grid';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Column = styled(Box)`
    ul {
        margin-top: 4px;
    }
`

const IntroTable = (props) => {
    const noOfCols = props.columns.length
    const columns = props.columns.map((column, key) =>
        <Column key={key} width={[1, 1/noOfCols]} px={2}>
            <h3>{ column.column_title.text }</h3>
            <div dangerouslySetInnerHTML={{ __html: column.column_text.html }} />
        </Column>
    );
    return (
        <Flex flexWrap="wrap" py={2} mx={-2}>
            { columns }
        </Flex>
    )
}


IntroTable.propTypes = {
    columns: PropTypes.array,
}

IntroTable.defaultProps = {
    columns: null,
};


export default IntroTable
