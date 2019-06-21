import React, {useState, useEffect} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'next':
            return {
                index: (state.index + 1) % action.totalCount
            };
        case 'prev': 
            return {
                index: (state.index - 1 + action.totalCount) % action.totalCount
            };
        default:
            throw new Error();
    }
}

export {reducer}