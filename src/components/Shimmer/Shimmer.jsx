import React from 'react';
import { ShimmerCard, ShimmerComment, Wrapper } from './Shimmer.styled';

export const Shimmer = () => {
    return (
        <ShimmerCard>
            <Wrapper>
                <ShimmerComment />
                <ShimmerComment />
                <ShimmerComment />
            </Wrapper>
        </ShimmerCard>
    );
};
