import styled from "styled-components";

export const ActionButton = styled.button`
    padding: 16px 40px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    position: relative;
    overflow: hidden;

    &:hover {
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 10px rgba(102, 126, 234, 0.4);
    }

    &:focus {
        outline: none;
        ring: 2px solid #667eea;
        ring-offset: 2px;
    }

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: translate(-50%, -50%);
        transition:
            width 0.6s,
            height 0.6s;
    }

    &:hover::after {
        width: 300px;
        height: 300px;
    }
`;
