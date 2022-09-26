import styled from 'styled-components'
import colors from 'styles/colors'
import { lighten } from 'polished'

export const SContainer = styled.ul``

export const SCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 50px 0;

  h1 {
    font-size: 24px;
    font-weight: normal;
    color: ${colors.white};
  }
`

export const SImage = styled.div`
  position: relative;
  width: 200px;
  height: 300px;

  margin: 20px 0;

  @media (min-width: 500px) {
    width: 220px;
    height: 330px;
  }
`
export const SButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    padding: 10px 50px;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 500;

    &:first-child {
      background-color: ${colors.green};
      color: ${colors.black};
    }

    &:last-child {
      background-color: ${colors.black};
      color: ${colors.white};
    }
  }
`
export const SLoading = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 25px;

  display: flex;
  justify-content: center;
`

export const SScrolToTop = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 99;
  font-size: 18px;
  padding: 8px 10px;
  border-radius: 10px;
  background-color: ${colors.black};
  color: ${colors.white};

  transition: background-color ease-out 200ms;

  &:hover {
    background-color: ${lighten(0.1, colors.black)};
  }
`
