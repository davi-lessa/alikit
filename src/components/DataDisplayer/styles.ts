import styled from "styled-components";

export const Container = styled.div`
  margin: 15px 0;
  outline: 1px solid #e8e8e8;
  border-radius: 6px;
  overflow: hidden;
  padding: 0;
`;

export const ActiveSection = styled.div`
  min-height: 150px;
  position: relative;
`;

export const NoData = styled.div`
  height: 100%;
  width: 100%;
  padding: var(--global-default-padding);
  user-select: none;

  .front {
    width: 100%;
    min-height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 10px;
    padding: var(--global-default-padding);
    background: #ffffff88;
    backdrop-filter: blur(5px);
    flex-wrap: wrap;
  }

  .front p {
    flex-basis: 100%;
    text-align: center;
  }

  .back {
  }
`;
