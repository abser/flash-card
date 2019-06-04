import React, {useState, useEffect} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'next':
            return {index: state.index + 1};
        case 'prev': 
            return {index: state.index - 1};
        default:
            throw new Error();
    }
}

export {reducer}