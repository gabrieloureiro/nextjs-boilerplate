/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

import { ContainerProps } from './types'

const toastTypeVariations = {
  info: css`
    background: ${({ theme }) => theme.lightBlue};
    color: ${({ theme }) => theme.blue};
  `,
  success: css`
    background: ${({ theme }) => theme.lightGreen};
    color: ${({ theme }) => theme.green};
  `,

  error: css`
    background: ${({ theme }) => theme.lightRed};
    color: ${({ theme }) => theme.red};
  `
}

export const Container = styled(animated.div) <ContainerProps>`
  width: 360px;
  position: relative;
  margin: 8px 30px 8px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 12px;
  z-index: 999;

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 8px 12px 0 0;
  }

  div {
    flex: 1;


    p {
      padding-top: 4px;
      font-size: 14px;
      line-height: 20px;
      max-width: 360px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 8px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`
