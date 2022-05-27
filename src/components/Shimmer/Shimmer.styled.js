import styled, { css, keyframes } from 'styled-components';

const br8 = css`
    border-radius: 8px;
`;

const w80 = css`
    width: 80%;
`;

const fullViewKeyFrame = keyframes`
    100% {
        width: 100%;
    }
`;

const shimmerKeyFrame = keyframes`
      0% {
        background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
`;

const animate = css`
    animation: ${shimmerKeyFrame} 2s infinite linear;
    background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
    background-size: 1000px 100%;
`;

export const ShimmerCard = styled.div`
    border: 2px solid #fff;
    box-shadow: 0px 0px 10px 0 #a9a9a9;
    padding: 30px 40px;
    width: 80%;
    margin: 50px auto;
    height: 200px;
    ${br8}
`;

export const Wrapper = styled.div`
    width: 0px;
    animation: ${fullViewKeyFrame} 0.5s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const ShimmerComment = styled.div`
    height: ${props => props.height || '2rem'};
    background: #777;
    margin-top: 20px;
    ${br8}
    ${animate}
`;
